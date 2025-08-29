import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimateOnScroll } from './AnimateOnScroll';
export function LogoSection() {
    // Array of client logos
    const logos = [
        {
            id: 1,
            name: 'Amherst',
            imageUrl: "/amherst-logo2x.webp",
            className: 'h-10 md:h-12'
        },
        {
            id: 2,
            name: 'Vista',
            imageUrl: "/VistaLogo_White_Vertical.webp",
            className: 'h-10 md:h-14'
        },
        {
            id: 3,
            name: 'Gatekeeper',
            imageUrl: "/Gatekeeper_Logo_all_white.png",
            className: 'h-8 md:h-10'
        },
        {
            id: 4,
            name: 'UBS Bank',
            imageUrl: "/UBS_AG_White.png",
            className: 'h-8 md:h-10'
        },
        {
            id: 5,
            name: 'Bungalo',
            imageUrl: "/bungalo.png",
            className: 'h-8 md:h-10'
        },
        {
            id: 6,
            name: 'MSR',
            imageUrl: "/MSRLogo_White.webp",
            className: 'h-8 md:h-10'
        },
        {
            id: 7,
            name: 'Homepaired',
            imageUrl: "/Homepaired_logo.png",
            className: 'h-8 md:h-12'
        }
    ];
    return (_jsx("section", { className: "w-full bg-gray-900 py-16 px-4 logo-section", "data-component": "logo", children: _jsx("div", { className: "max-w-full mx-auto overflow-hidden", children: _jsx(AnimateOnScroll, { children: _jsxs("div", { className: "flex animate-scroll whitespace-nowrap", children: [logos.map(logo => (_jsx("div", { className: "flex-shrink-0 mx-12 inline-block", children: _jsx("img", { src: logo.imageUrl, alt: `${logo.name} logo`, className: `${logo.className} w-auto object-contain` }) }, logo.id))), logos.map(logo => (_jsx("div", { className: "flex-shrink-0 mx-12 inline-block", children: _jsx("img", { src: logo.imageUrl, alt: `${logo.name} logo`, className: `${logo.className} w-auto object-contain` }) }, `${logo.id}-duplicate`)))] }) }) }) }));
}
