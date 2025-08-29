import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../integrations/supabase/client';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import { useFonts } from '../../hooks/useFonts';
export function BlogPostDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const h1Font = useFonts('blog', 'h1');
    const pFont = useFonts('blog', 'p');
    const spanFont = useFonts('blog', 'span');
    useEffect(() => {
        if (slug) {
            fetchPost(slug);
        }
    }, [slug]);
    const fetchPost = async (postSlug) => {
        try {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('slug', postSlug)
                .eq('status', 'published')
                .single();
            if (error) {
                if (error.code === 'PGRST116') {
                    setNotFound(true);
                }
                else {
                    throw error;
                }
            }
            else {
                setPost(data ? {
                    ...data,
                    status: data.status
                } : null);
            }
        }
        catch (error) {
            console.error('Error fetching post:', error);
            setNotFound(true);
        }
        finally {
            setLoading(false);
        }
    };
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 py-8", children: _jsx("div", { className: "text-center", children: "Loading post..." }) }) }));
    }
    if (notFound || !post) {
        return (_jsx("div", { className: "min-h-screen bg-background", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 py-8", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-foreground mb-4 blog", style: h1Font.getFontStyle(), children: "Post Not Found" }), _jsx("p", { className: "text-muted-foreground mb-6 blog", style: pFont.getFontStyle(), children: "The blog post you're looking for doesn't exist." }), _jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-primary hover:text-primary/80", children: [_jsx(ArrowLeft, { size: 16 }), "Back to Blog"] })] }) }) }));
    }
    return (_jsxs(_Fragment, { children: [_jsxs("title", { children: [post.title, " | Blog"] }), _jsx("meta", { name: "description", content: post.excerpt || `Read ${post.title} by ${post.author}` }), _jsx("meta", { property: "og:title", content: post.title }), _jsx("meta", { property: "og:description", content: post.excerpt || `Read ${post.title} by ${post.author}` }), post.image_url && _jsx("meta", { property: "og:image", content: post.image_url }), _jsx("meta", { property: "og:type", content: "article" }), _jsx("div", { className: "min-h-screen bg-background blog-post-detail", "data-component": "blog", children: _jsxs("article", { className: "max-w-4xl mx-auto px-4 py-8", children: [_jsx("div", { className: "mb-6", children: _jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground", children: [_jsx(ArrowLeft, { size: 16 }), "Back to Blog"] }) }), _jsxs("header", { className: "mb-8", children: [post.image_url && (_jsx("div", { className: "aspect-video overflow-hidden rounded-lg mb-6", children: _jsx("img", { src: post.image_url, alt: post.title, className: "w-full h-full object-cover" }) })), _jsx("h1", { className: "text-4xl font-bold text-foreground mb-4 blog", style: h1Font.getFontStyle(), children: post.title }), _jsxs("div", { className: "flex items-center gap-4 text-muted-foreground mb-4", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { size: 16 }), _jsx("span", { className: "blog", style: spanFont.getFontStyle(), children: formatDate(post.created_at) })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(User, { size: 16 }), _jsx("span", { className: "blog", style: spanFont.getFontStyle(), children: post.author })] })] }), post.tags && post.tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", children: post.tags.map((tag) => (_jsx("span", { className: "px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full blog", style: spanFont.getFontStyle(), children: tag }, tag))) }))] }), _jsx("div", { className: "prose prose-lg max-w-none", children: _jsx(MDEditor.Markdown, { source: post.content, style: { backgroundColor: 'transparent' } }) })] }) })] }));
}
