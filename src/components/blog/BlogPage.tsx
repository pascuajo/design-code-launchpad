import React, { useState, useEffect } from 'react';
import { AnimateOnScroll, AnimateChildren } from '../AnimateOnScroll';
import { BlogCard } from './BlogCard';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
}

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => 
        post.tags?.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const fetchPublishedPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const formattedPosts = data?.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || '',
        imageUrl: post.image_url || '',
        date: new Date(post.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        author: post.author,
        slug: post.slug,
        tags: post.tags
      })) || [];
      
      setPosts(formattedPosts);
      setFilteredPosts(formattedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full">
        <section className="w-full bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-gray-600">Loading blog posts...</div>
          </div>
        </section>
      </div>
    );
  }

  return <div className="w-full">
      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Our <span className="bg-yellow-300 px-1">Blog</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto text-center mb-8">
              Insights, strategies, and practical advice to help you build what
              truly matters.
            </p>
            
            <div className="max-w-md mx-auto mb-16">
              <input
                type="text"
                placeholder="Search by tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </AnimateOnScroll>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-600">
                {searchTerm ? `No posts found with tag "${searchTerm}"` : 'No published posts yet'}
              </div>
            </div>
          ) : (
            <AnimateChildren staggerDelay={0.1} distance={40} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => <BlogCard key={post.id} post={post} />)}
            </AnimateChildren>
          )}
        </div>
      </section>
    </div>;
}