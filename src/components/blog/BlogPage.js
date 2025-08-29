import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { AnimateOnScroll, AnimateChildren } from '../AnimateOnScroll';
import { BlogCard } from './BlogCard';
import { supabase } from '../../integrations/supabase/client';
import { useFonts } from '../../hooks/useFonts';
export function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const h1Font = useFonts('blog', 'h1');
    const pFont = useFonts('blog', 'p');
    const highlightedFont = useFonts('blog', 'highlighted');
    useEffect(() => {
        fetchPublishedPosts();
    }, []);
    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredPosts(posts);
        }
        else {
            const filtered = posts.filter(post => post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
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
            if (error)
                throw error;
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
                tags: post.tags || []
            })) || [];
            setPosts(formattedPosts);
            setFilteredPosts(formattedPosts);
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
        finally {
            setLoading(false);
        }
    };
    if (loading) {
        return (_jsx("div", { className: "w-full", children: _jsx("section", { className: "w-full bg-white py-20 px-4", children: _jsx("div", { className: "max-w-6xl mx-auto text-center", children: _jsx("div", { className: "text-gray-600", children: "Loading blog posts..." }) }) }) }));
    }
    return _jsx("div", { className: "w-full blog-page", "data-component": "blog", children: _jsx("section", { className: "w-full bg-white py-20 px-4", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs(AnimateOnScroll, { children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 text-center blog", style: h1Font.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", style: highlightedFont.getFontStyle(), children: "Our Blog" }) }), _jsx("p", { className: "text-gray-600 text-xl max-w-3xl mx-auto text-center mb-8 blog", style: pFont.getFontStyle(), children: "Insights, strategies, and practical advice to help you build what truly matters." }), _jsx("div", { className: "max-w-md mx-auto mb-16", children: _jsx("input", { type: "text", placeholder: "Search by tags...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" }) })] }), filteredPosts.length === 0 ? (_jsx("div", { className: "text-center py-12", children: _jsx("div", { className: "text-gray-600", children: searchTerm ? `No posts found with tag "${searchTerm}"` : 'No published posts yet' }) })) : (_jsx(AnimateChildren, { staggerDelay: 0.1, distance: 40, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredPosts.map(post => _jsx(BlogCard, { post: post }, post.id)) }))] }) }) });
}
