import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  slug: string;
  category?: string;
  tags?: string[] | null;
}

export function useBlogPosts(limit?: number) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPublishedPosts();
  }, [limit]);

  const fetchPublishedPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      
      const formattedPosts = data?.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt || '',
        imageUrl: post.image_url || '',
        publishedAt: post.created_at,
        author: post.author,
        slug: post.slug,
        category: post.category || undefined,
        tags: post.tags || []
      })) || [];
      
      setPosts(formattedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, refetch: fetchPublishedPosts };
}
