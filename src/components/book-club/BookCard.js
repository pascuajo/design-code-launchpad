import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useFonts } from '../../hooks/useFonts';
export function BookCard({ book, onClick }) {
    const [imageError, setImageError] = useState(false);
    const h3Font = useFonts('bookClub', 'h3');
    const pFont = useFonts('bookClub', 'p');
    const handleImageError = () => {
        setImageError(true);
    };
    const coverSrc = book.cover;
    return (_jsxs("div", { onClick: onClick, className: "group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl book-card", "data-component": "bookClub", children: [_jsxs("div", { className: "relative", children: [imageError ? (_jsx("div", { className: "w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-md flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl mb-2", children: "\uD83D\uDCDA" }), _jsx("div", { className: "text-gray-600 text-sm font-medium book-club", style: h3Font.getFontStyle(), children: book.title })] }) })) : (_jsx("img", { src: coverSrc, alt: book.title, className: "w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300", onError: handleImageError })), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: "Read More" }) })] }), _jsxs("div", { className: "mt-3 text-center", children: [_jsx("h3", { className: "font-medium text-sm line-clamp-2 book-club", style: h3Font.getFontStyle(), children: book.title }), _jsx("p", { className: "text-xs text-gray-600 mt-1 book-club", style: pFont.getFontStyle(), children: book.author })] })] }));
}
