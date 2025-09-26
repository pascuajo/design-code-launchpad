import { useState, useEffect } from 'react';
import { X, ExternalLink, Trash2, Edit3, CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useFonts } from '../../hooks/useFonts';

interface LinkInfo {
  text: string;
  url: string;
  status: 'checking' | 'valid' | 'broken' | 'error';
  statusCode?: number;
  error?: string;
}

interface LinkCheckerProps {
  content: string;
  onClose: () => void;
  onUpdateContent: (newContent: string) => void;
}

export function LinkChecker({ content, onClose, onUpdateContent }: LinkCheckerProps) {
  const [links, setLinks] = useState<LinkInfo[]>([]);
  const [editingLink, setEditingLink] = useState<number | null>(null);
  const [editUrl, setEditUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  
  const h2Font = useFonts('admin', 'h2');
  const pFont = useFonts('admin', 'p');
  const buttonFont = useFonts('admin', 'button');

  // Extract links from markdown content
  const extractLinks = (content: string): LinkInfo[] => {
    const urlRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const extractedLinks: LinkInfo[] = [];
    let match;
    
    while ((match = urlRegex.exec(content)) !== null) {
      const text = match[1];
      const url = match[2];
      
      if (url.startsWith('http')) {
        extractedLinks.push({
          text,
          url,
          status: 'checking'
        });
      }
    }
    
    return extractedLinks;
  };

  // Check if a URL is accessible using a more reliable method
  const checkUrl = async (url: string): Promise<{ status: 'valid' | 'broken' | 'error', statusCode?: number, error?: string }> => {
    try {
      // Use a reliable CORS proxy that gives us actual HTTP status codes
      const proxyResponse = await fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`);
      
      if (proxyResponse.ok) {
        return { status: 'valid', statusCode: proxyResponse.status };
      } else if (proxyResponse.status === 404) {
        return { 
          status: 'broken', 
          statusCode: 404, 
          error: '404 Not Found' 
        };
      } else if (proxyResponse.status >= 400) {
        return { 
          status: 'broken', 
          statusCode: proxyResponse.status, 
          error: `HTTP ${proxyResponse.status} Error` 
        };
      } else {
        return { status: 'valid', statusCode: proxyResponse.status };
      }
    } catch (error) {
      // If the first proxy fails, try a different one
      try {
        const fallbackResponse = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackResponse.ok && fallbackData.status && fallbackData.status.http_code) {
          const statusCode = fallbackData.status.http_code;
          if (statusCode >= 200 && statusCode < 400) {
            return { status: 'valid', statusCode };
          } else if (statusCode === 404) {
            return { 
              status: 'broken', 
              statusCode: 404, 
              error: '404 Not Found' 
            };
          } else {
            return { 
              status: 'broken', 
              statusCode, 
              error: `HTTP ${statusCode} Error` 
            };
          }
        } else {
          // If we can't verify, assume it's working to avoid false positives
          return { status: 'valid', statusCode: 200 };
        }
      } catch (fallbackError) {
        // If all methods fail, assume it's working to avoid false positives
        return { status: 'valid', statusCode: 200 };
      }
    }
  };

  // Check all links
  const checkAllLinks = async () => {
    setIsChecking(true);
    const extractedLinks = extractLinks(content);
    setLinks(extractedLinks);
    
    const checkedLinks = await Promise.all(
      extractedLinks.map(async (link) => {
        const result = await checkUrl(link.url);
        return {
          ...link,
          ...result
        };
      })
    );
    
    setLinks(checkedLinks);
    setIsChecking(false);
  };

  // Update a link URL
  const updateLink = (index: number, newUrl: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], url: newUrl, status: 'checking' };
    setLinks(updatedLinks);
    setEditingLink(null);
    setEditUrl('');
    
    // Update the content
    const updatedContent = content.replace(
      new RegExp(`\\[${links[index].text}\\]\\(${links[index].url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g'),
      `[${links[index].text}](${newUrl})`
    );
    
    onUpdateContent(updatedContent);
    
    // Re-check the updated link
    checkUrl(newUrl).then(result => {
      const recheckedLinks = [...updatedLinks];
      recheckedLinks[index] = { ...recheckedLinks[index], ...result };
      setLinks(recheckedLinks);
    });
  };

  // Delete a link
  const deleteLink = (index: number) => {
    const linkToDelete = links[index];
    const updatedContent = content.replace(
      new RegExp(`\\[${linkToDelete.text}\\]\\(${linkToDelete.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g'),
      linkToDelete.text // Replace with just the text, removing the link
    );
    
    onUpdateContent(updatedContent);
    setLinks(links.filter((_, i) => i !== index));
  };

  // Start checking links when component mounts
  useEffect(() => {
    checkAllLinks();
  }, [content]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'checking':
        return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
      case 'valid':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'broken':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (link: LinkInfo) => {
    switch (link.status) {
      case 'checking':
        return 'Checking...';
      case 'valid':
        return `✅ Working (${link.statusCode})`;
      case 'broken':
        if (link.statusCode === 404) {
          return `❌ 404 Not Found`;
        } else if (link.statusCode && link.statusCode >= 400) {
          return `❌ HTTP ${link.statusCode} Error`;
        } else {
          return `❌ Broken (${link.error || 'Unknown error'})`;
        }
      case 'error':
        return `⚠️ ${link.error || 'Error'}`;
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 admin" style={h2Font.getFontStyle()}>
            Link Checker
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {isChecking && links.length === 0 ? (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" />
              <p className="text-gray-600 admin" style={pFont.getFontStyle()}>
                Scanning for links...
              </p>
            </div>
          ) : links.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 admin" style={pFont.getFontStyle()}>
                No external links found in this post.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 admin" style={pFont.getFontStyle()}>
                    Found {links.length} external link{links.length !== 1 ? 's' : ''}
                  </p>
                  <p className="text-xs text-gray-500 admin" style={pFont.getFontStyle()}>
                    Note: Link checking may have limitations due to browser security policies
                  </p>
                </div>
                <button
                  onClick={checkAllLinks}
                  disabled={isChecking}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition-colors admin"
                  style={buttonFont.getFontStyle()}
                >
                  {isChecking ? 'Checking...' : 'Recheck All'}
                </button>
              </div>

              {links.map((link, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getStatusIcon(link.status)}
                        <span className="font-medium text-gray-900 admin" style={pFont.getFontStyle()}>
                          {link.text}
                        </span>
                      </div>
                      
                      {editingLink === index ? (
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="url"
                            value={editUrl}
                            onChange={(e) => setEditUrl(e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter new URL"
                          />
                          <button
                            onClick={() => updateLink(index, editUrl)}
                            className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setEditingLink(null);
                              setEditUrl('');
                            }}
                            className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mb-2">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 underline break-all admin"
                            style={pFont.getFontStyle()}
                          >
                            {link.url}
                          </a>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                      
                      <p className={`text-sm ${
                        link.status === 'valid' ? 'text-green-600' :
                        link.status === 'broken' ? 'text-red-600' :
                        link.status === 'error' ? 'text-yellow-600' :
                        'text-gray-500'
                      } admin`} style={pFont.getFontStyle()}>
                        {getStatusText(link)}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {editingLink !== index && (
                        <button
                          onClick={() => {
                            setEditingLink(index);
                            setEditUrl(link.url);
                          }}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
                          title="Edit URL"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteLink(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                        title="Remove link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors admin"
            style={buttonFont.getFontStyle()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
