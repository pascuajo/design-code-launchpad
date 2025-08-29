import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../integrations/supabase/client';
import MDEditor from '@uiw/react-md-editor';
import { ArrowLeft, Upload, Save, Eye } from 'lucide-react';
export function BlogPostForm({ post, onClose }) {
    const { user } = useAuth();
    const [title, setTitle] = useState(post?.title || '');
    const [slug, setSlug] = useState(post?.slug || '');
    const [content, setContent] = useState(post?.content || '');
    const [excerpt, setExcerpt] = useState(post?.excerpt || '');
    const [author, setAuthor] = useState(post?.author || 'Joe Pascual');
    const [imageUrl, setImageUrl] = useState(post?.image_url || '');
    const [status, setStatus] = useState(post?.status || 'draft');
    const [tags, setTags] = useState(post?.tags?.join(', ') || '');
    const [createdAt, setCreatedAt] = useState(post?.created_at ? new Date(post.created_at).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16));
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef(null);
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    };
    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
        if (!post) {
            setSlug(generateSlug(newTitle));
        }
    };
    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file)
            return;
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = `blog/${fileName}`;
            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);
            if (uploadError)
                throw uploadError;
            const { data } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);
            setImageUrl(data.publicUrl);
        }
        catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image');
        }
    };
    const handleSave = async () => {
        if (!user)
            return;
        setLoading(true);
        try {
            const postData = {
                title,
                slug,
                content,
                excerpt,
                author,
                image_url: imageUrl || null,
                status,
                tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
                user_id: user.id,
                created_at: new Date(createdAt).toISOString(),
            };
            if (post) {
                const { error } = await supabase
                    .from('blog_posts')
                    .update(postData)
                    .eq('id', post.id);
                if (error)
                    throw error;
            }
            else {
                const { error } = await supabase
                    .from('blog_posts')
                    .insert([postData]);
                if (error)
                    throw error;
            }
            onClose();
        }
        catch (error) {
            console.error('Error saving post:', error);
            alert('Failed to save post');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("button", { onClick: onClose, className: "flex items-center gap-2 text-muted-foreground hover:text-foreground", children: [_jsx(ArrowLeft, { size: 20 }), "Back to Posts"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("button", { onClick: () => setShowPreview(!showPreview), className: "flex items-center gap-2 px-3 py-1 border border-border rounded-md hover:bg-muted/50", children: [_jsx(Eye, { size: 16 }), showPreview ? 'Edit' : 'Preview'] }), _jsxs("button", { onClick: handleSave, disabled: loading, className: "flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50", children: [_jsx(Save, { size: 16 }), loading ? 'Saving...' : 'Save'] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Title *" }), _jsx("input", { type: "text", value: title, onChange: (e) => handleTitleChange(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "Enter post title" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Slug *" }), _jsx("input", { type: "text", value: slug, onChange: (e) => setSlug(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "post-url-slug" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Featured Image" }), _jsxs("div", { className: "space-y-2", children: [_jsx("input", { type: "text", value: imageUrl, onChange: (e) => setImageUrl(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "Image URL or upload below" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", onChange: handleImageUpload, className: "hidden" }), _jsxs("button", { onClick: () => fileInputRef.current?.click(), className: "flex items-center gap-2 px-3 py-1 border border-border rounded-md hover:bg-muted/50", children: [_jsx(Upload, { size: 16 }), "Upload Image"] })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Excerpt" }), _jsx("textarea", { value: excerpt, onChange: (e) => setExcerpt(e.target.value), rows: 3, className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "Brief description of the post" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Author" }), _jsx("input", { type: "text", value: author, onChange: (e) => setAuthor(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Status" }), _jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", children: [_jsx("option", { value: "draft", children: "Draft" }), _jsx("option", { value: "published", children: "Published" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Publishing Date" }), _jsx("input", { type: "datetime-local", value: createdAt, onChange: (e) => setCreatedAt(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Tags (comma-separated)" }), _jsx("input", { type: "text", value: tags, onChange: (e) => setTags(e.target.value), className: "w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "react, javascript, tutorial" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Content *" }), showPreview ? (_jsx("div", { className: "border border-border rounded-md p-4 bg-background min-h-96", children: _jsx("div", { className: "prose prose-sm max-w-none", children: _jsx(MDEditor.Markdown, { source: content }) }) })) : (_jsx(MDEditor, { value: content, onChange: (val) => setContent(val || ''), height: 400 }))] })] })] }));
}
