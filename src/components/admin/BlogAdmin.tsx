import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../integrations/supabase/client';
import { BlogPostForm } from './BlogPostForm';
import { BlogPostList } from './BlogPostList';
import { LinkChecker } from './LinkChecker';

import { Plus, LogOut } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  author: string;
  image_url?: string | null;
  status: 'draft' | 'published';
  tags: string[] | null;
  created_at: string;
  updated_at: string;
}

export function BlogAdmin() {
  const { user, signOut } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showLinkChecker, setShowLinkChecker] = useState(false);
  const [linkCheckerPost, setLinkCheckerPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts((data || []).map(post => ({
        ...post,
        status: post.status as 'draft' | 'published'
      })));
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewPost = () => {
    setSelectedPost(null);
    setShowForm(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedPost(null);
    fetchPosts();
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleCheckLinks = (post: BlogPost) => {
    setLinkCheckerPost(post);
    setShowLinkChecker(true);
  };

  const handleCloseLinkChecker = () => {
    setShowLinkChecker(false);
    setLinkCheckerPost(null);
  };

  const handleUpdateContent = async (newContent: string) => {
    if (!linkCheckerPost) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ content: newContent })
        .eq('id', linkCheckerPost.id);

      if (error) throw error;
      
      // Update the local posts state
      setPosts(posts.map(post => 
        post.id === linkCheckerPost.id 
          ? { ...post, content: newContent }
          : post
      ));
      
      // Update the link checker post
      setLinkCheckerPost({ ...linkCheckerPost, content: newContent });
    } catch (error) {
      console.error('Error updating post content:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-foreground">Blog Admin</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user?.email}</span>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>



      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm ? (
          <BlogPostForm
            post={selectedPost}
            onClose={handleCloseForm}
          />
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Blog Posts</h2>
              <button
                onClick={handleNewPost}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Plus size={20} />
                New Post
              </button>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="text-muted-foreground">Loading posts...</div>
              </div>
            ) : (
              <BlogPostList
                posts={posts}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
                onCheckLinks={handleCheckLinks}
              />
            )}
          </div>
        )}
      </main>

      {/* Link Checker Modal */}
      {showLinkChecker && linkCheckerPost && (
        <LinkChecker
          content={linkCheckerPost.content}
          onClose={handleCloseLinkChecker}
          onUpdateContent={handleUpdateContent}
        />
      )}
    </div>
  );
}