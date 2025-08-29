import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../integrations/supabase/client';
import { BlogPostForm } from './BlogPostForm';
import { BlogPostList } from './BlogPostList';
import { Plus, LogOut } from 'lucide-react';
export function BlogAdmin() {
    const { user, signOut } = useAuth();
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showForm, setShowForm] = useState(false);
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
            if (error)
                throw error;
            setPosts((data || []).map(post => ({
                ...post,
                status: post.status
            })));
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
        finally {
            setLoading(false);
        }
    };
    const handleNewPost = () => {
        setSelectedPost(null);
        setShowForm(true);
    };
    const handleEditPost = (post) => {
        setSelectedPost(post);
        setShowForm(true);
    };
    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedPost(null);
        fetchPosts();
    };
    const handleDeletePost = async (id) => {
        if (!confirm('Are you sure you want to delete this post?'))
            return;
        try {
            const { error } = await supabase
                .from('blog_posts')
                .delete()
                .eq('id', id);
            if (error)
                throw error;
            fetchPosts();
        }
        catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("header", { className: "bg-card border-b border-border", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx("h1", { className: "text-xl font-semibold text-foreground", children: "Blog Admin" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: "text-sm text-muted-foreground", children: user?.email }), _jsxs("button", { onClick: () => signOut(), className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [_jsx(LogOut, { size: 16 }), "Sign Out"] })] })] }) }) }), _jsx("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: showForm ? (_jsx(BlogPostForm, { post: selectedPost, onClose: handleCloseForm })) : (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Blog Posts" }), _jsxs("button", { onClick: handleNewPost, className: "flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors", children: [_jsx(Plus, { size: 20 }), "New Post"] })] }), loading ? (_jsx("div", { className: "text-center py-8", children: _jsx("div", { className: "text-muted-foreground", children: "Loading posts..." }) })) : (_jsx(BlogPostList, { posts: posts, onEdit: handleEditPost, onDelete: handleDeletePost }))] })) })] }));
}
