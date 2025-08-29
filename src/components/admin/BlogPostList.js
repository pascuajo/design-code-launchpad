import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Edit2, Trash2, Eye } from 'lucide-react';
export function BlogPostList({ posts, onEdit, onDelete }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };
    if (posts.length === 0) {
        return (_jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "text-muted-foreground mb-4", children: "No blog posts yet" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Create your first blog post to get started" })] }));
    }
    return (_jsx("div", { className: "bg-card rounded-lg border border-border overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-muted/50", children: _jsxs("tr", { children: [_jsx("th", { className: "text-left p-4 font-medium text-foreground", children: "Title" }), _jsx("th", { className: "text-left p-4 font-medium text-foreground", children: "Status" }), _jsx("th", { className: "text-left p-4 font-medium text-foreground", children: "Author" }), _jsx("th", { className: "text-left p-4 font-medium text-foreground", children: "Created" }), _jsx("th", { className: "text-left p-4 font-medium text-foreground", children: "Actions" })] }) }), _jsx("tbody", { children: posts.map((post) => (_jsxs("tr", { className: "border-t border-border", children: [_jsx("td", { className: "p-4", children: _jsxs("div", { children: [_jsx("div", { className: "font-medium text-foreground", children: post.title }), _jsxs("div", { className: "text-sm text-muted-foreground", children: ["/", post.slug] })] }) }), _jsx("td", { className: "p-4", children: _jsx("span", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${post.status === 'published'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'}`, children: post.status }) }), _jsx("td", { className: "p-4 text-foreground", children: post.author }), _jsx("td", { className: "p-4 text-muted-foreground", children: formatDate(post.created_at) }), _jsx("td", { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [post.status === 'published' && (_jsx("a", { href: `/blog/${post.slug}`, target: "_blank", rel: "noopener noreferrer", className: "p-1 text-muted-foreground hover:text-foreground", title: "View post", children: _jsx(Eye, { size: 16 }) })), _jsx("button", { onClick: () => onEdit(post), className: "p-1 text-muted-foreground hover:text-foreground", title: "Edit post", children: _jsx(Edit2, { size: 16 }) }), _jsx("button", { onClick: () => onDelete(post.id), className: "p-1 text-muted-foreground hover:text-destructive", title: "Delete post", children: _jsx(Trash2, { size: 16 }) })] }) })] }, post.id))) })] }) }) }));
}
