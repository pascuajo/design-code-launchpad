import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ContactModal } from './ContactModal';
import { useFonts } from '../hooks/useFonts';
export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const h2Font = useFonts('contact', 'h2');
    const pFont = useFonts('contact', 'p');
    const buttonFont = useFonts('contact', 'button');
    const highlightedFont = useFonts('contact', 'highlighted');
    return (_jsx("section", { className: "w-full bg-gray-900 text-white py-16 px-4 contact-section", id: "contact", "data-component": "contact", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx(AnimateOnScroll, { children: _jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-8", children: [_jsxs("div", { className: "lg:w-2/3", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 contact text-left", style: h2Font.getFontStyle(), children: ["Ready to turn your ", _jsx("span", { className: "handdrawn-highlight", style: highlightedFont.getFontStyle(), children: "ideas into impact" }), "?"] }), _jsx("p", { className: "text-gray-300 text-xl contact text-left", style: pFont.getFontStyle(), children: "Let's connect and explore how we can work together to achieve your goals and create meaningful change." })] }), _jsx("div", { className: "lg:w-1/3 flex justify-end", children: _jsx("button", { onClick: () => setIsModalOpen(true), className: "bg-yellow-300 hover:bg-yellow-600 text-accent-foreground font-medium py-4 px-10 rounded-full transition duration-300 text-lg whitespace-nowrap", style: buttonFont.getFontStyle(), children: "Contact Me" }) })] }) }), _jsx(ContactModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })] }) }));
}
