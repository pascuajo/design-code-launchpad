import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useFonts } from '../../hooks/useFonts';
export function BlogCard({ post }) {
    const h3Font = useFonts('blog', 'h3');
    const pFont = useFonts('blog', 'p');
    const spanFont = useFonts('blog', 'span');
    return _jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-[500px] flex flex-col blog-card", "data-component": "blog", children: _jsxs(Link, { to: `/blog/${post.slug}`, className: "flex flex-col h-full", children: [_jsx("div", { className: "h-56 overflow-hidden flex-shrink-0", children: _jsx("img", { src: post.imageUrl, alt: post.title, className: "w-full h-full object-cover transition-transform duration-300 hover:scale-105" }) }), _jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-sm text-gray-500 blog", style: spanFont.getFontStyle(), children: post.date }), _jsxs("span", { className: "text-sm text-gray-500 blog", style: spanFont.getFontStyle(), children: ["By ", post.author] })] }), _jsx("h3", { className: "text-xl font-bold mb-3 text-foreground blog", style: h3Font.getFontStyle(), children: post.title }), _jsx("p", { className: "text-muted-foreground mb-4 flex-grow blog", style: pFont.getFontStyle(), children: post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt })] })] }) });
}
