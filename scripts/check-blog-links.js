#!/usr/bin/env node

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Function to check if a URL is accessible
function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
      }
    };

    const req = client.request(options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        success: res.statusCode >= 200 && res.statusCode < 400
      });
    });

    req.on('error', (error) => {
      resolve({
        url,
        status: 0,
        statusText: error.message,
        success: false
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        statusText: 'Timeout',
        success: false
      });
    });

    req.setTimeout(10000);
    req.end();
  });
}

// Function to extract URLs from markdown content
function extractUrls(content) {
  const urlRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    const url = match[2];
    if (url.startsWith('http')) {
      urls.push({
        text: match[1],
        url: url
      });
    }
  }
  
  return urls;
}

// Main function
async function checkBlogLinks() {
  console.log('🔍 Blog Link Checker\n');
  
  // You can paste your blog post content here, or we can fetch it from Supabase
  const blogContent = `
  <!-- Paste your September briefing blog post content here -->
  `;
  
  if (blogContent.trim() === '<!-- Paste your September briefing blog post content here -->') {
    console.log('❌ Please paste your blog post content in the script first.');
    console.log('📝 Edit scripts/check-blog-links.js and replace the blogContent variable.');
    return;
  }
  
  const urls = extractUrls(blogContent);
  
  if (urls.length === 0) {
    console.log('ℹ️  No external links found in the content.');
    return;
  }
  
  console.log(`Found ${urls.length} external links to check:\n`);
  
  const results = [];
  
  for (let i = 0; i < urls.length; i++) {
    const { text, url } = urls[i];
    process.stdout.write(`Checking ${i + 1}/${urls.length}: ${text}... `);
    
    const result = await checkUrl(url);
    results.push({ ...result, text });
    
    if (result.success) {
      console.log(`✅ ${result.status}`);
    } else {
      console.log(`❌ ${result.status} - ${result.statusText}`);
    }
  }
  
  console.log('\n📊 Summary:');
  const broken = results.filter(r => !r.success);
  const working = results.filter(r => r.success);
  
  console.log(`✅ Working: ${working.length}`);
  console.log(`❌ Broken: ${broken.length}`);
  
  if (broken.length > 0) {
    console.log('\n🔧 Broken Links:');
    broken.forEach(({ text, url, status, statusText }) => {
      console.log(`  • ${text}: ${url} (${status} - ${statusText})`);
    });
  }
}

// Run the checker
checkBlogLinks().catch(console.error);
