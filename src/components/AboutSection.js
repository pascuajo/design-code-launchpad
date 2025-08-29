import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { useFonts } from '../hooks/useFonts';
import { DollarSign, Home, Shield, Scale, Handshake, Database, Brain, Monitor, Building2, Globe, Check } from 'lucide-react';
export function AboutSection() {
    const h2Font = useFonts('about', 'h2');
    const h3Font = useFonts('about', 'h3');
    const pFont = useFonts('about', 'p');
    const highlightedFont = useFonts('about', 'highlighted');
    const domains = [
        {
            title: "FinTech",
            description: "Core Banking Platforms • Payment Processing Systems • Treasury Management Systems • Financial Reporting Platforms",
            icon: _jsx(DollarSign, { className: "w-8 h-8 text-gray-600" }),
            color: "blue"
        },
        {
            title: "PropTech",
            description: "Property Valuation Engines • Real Estate Marketplace Platforms • Asset Management Systems • Investment Analytics Platforms",
            icon: _jsx(Home, { className: "w-8 h-8 text-green-600" }),
            color: "green"
        },
        {
            title: "RegTech",
            description: "Risk Management Platforms • Compliance Monitoring Systems • AML/KYC Workflow Engines • Regulatory Reporting Systems",
            icon: _jsx(Shield, { className: "w-8 h-8 text-purple-600" }),
            color: "purple"
        },
        {
            title: "LegalTech",
            description: "Contract Management Platforms • Document Intelligence Systems • Legal Workflow Engines • Compliance Management Systems",
            icon: _jsx(Scale, { className: "w-8 h-8 text-gray-600" }),
            color: "indigo"
        },
        {
            title: "ProcureTech",
            description: "Strategic Sourcing Platforms • Inventory Management Systems • Vendor & CRM Platforms • Spend Analytics Platforms",
            icon: _jsx(Handshake, { className: "w-8 h-8 text-gray-600" }),
            color: "red"
        },
        {
            title: "Data & Business Intelligence",
            description: "Business Intelligence Platforms • Data Integration Systems • Analytics Dashboard Systems • Real-time Reporting Platforms",
            icon: _jsx(Database, { className: "w-8 h-8 text-gray-600" }),
            color: "gray"
        },
        {
            title: "AI & Automation",
            description: "Agentic AI Platforms • Machine Learning Solutions • Orchestration Platforms • Intelligent Workflow Systems",
            icon: _jsx(Brain, { className: "w-8 h-8 text-gray-600" }),
            color: "yellow"
        },
        {
            title: "Enterprise SaaS",
            description: "B2B SaaS Platforms • Multi-Tenant Systems • Mobile Application Platforms • Digital Experience Systems",
            icon: _jsx(Monitor, { className: "w-8 h-8 text-gray-600" }),
            color: "blue"
        },
        {
            title: "Industries",
            description: "Global Financial Services • Commercial Real Estate • Enterprise SaaS • Startups & Pre-Seed",
            icon: _jsx(Building2, { className: "w-8 h-8 text-gray-600" }),
            color: "red"
        },
        {
            title: "Career",
            description: "Founder & CEO • Head of Product & Design • Executive Director, Product Management • Executive Director, Digital Transformation",
            icon: _jsx(Globe, { className: "w-8 h-8 text-red-600" }),
            color: "red"
        },
    ];
    return (_jsxs("section", { className: "w-full bg-gray-100 py-28 px-4 about-section relative overflow-hidden", id: "about", "data-component": "about", children: [_jsx("div", { className: "absolute inset-0 opacity-20 pointer-events-none", style: {
                    backgroundImage: 'url(/Clearmont_mountain_only.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scale(1.2) translateX(0%) translateY(0%)'
                } }), _jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [_jsx("div", { className: "mb-32 pt-8", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-[31.5%] top-[-80px] w-px h-64 bg-gradient-to-b from-transparent via-gray-900 to-transparent" }), _jsxs("div", { className: "flex items-center justify-center", children: [_jsx("div", { className: "w-16 h-16 flex-shrink-0 mr-2", children: _jsx("img", { src: "/Clearmont_mountain_only.png", alt: "Clearmont", className: "w-full h-full object-contain" }) }), _jsx("div", { className: "flex-shrink-0 ml-2", children: _jsx("p", { className: "text-lg font-semibold text-gray-600 uppercase tracking-wide about", style: pFont.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", children: "15 YEARS OF UNRIVALLED PRODUCT INNOVATION..." }) }) })] })] }) }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-12 mb-16", children: [_jsx("div", { className: "lg:w-2/5 relative", children: _jsx(AnimateOnScroll, { direction: "left", children: _jsxs("div", { className: "w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl relative", children: [_jsx("img", { src: "/Profile.png", alt: "Joe Pascual - Strategic Innovation Consultant", className: "w-full h-full object-cover object-top scale-110" }), _jsx("div", { className: "absolute top-6 left-6", children: _jsx("h2", { className: "text-3xl md:text-4xl font-bold about", style: h2Font.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", style: highlightedFont.getFontStyle(), children: "About me.." }) }) })] }) }) }), _jsx("div", { className: "lg:w-3/5", children: _jsx(AnimateOnScroll, { direction: "right", children: _jsx("div", { className: "bg-white rounded-2xl p-8 shadow-lg h-[600px] flex flex-col justify-center", children: _jsxs("div", { className: "space-y-6", children: [_jsx("p", { className: "text-gray-700 text-lg leading-relaxed", style: pFont.getFontStyle(), children: "Hi, I'm Joe. With over 15 years' experience leading strategic product and digital transformation across various industries and platforms - I've seen first-hand what it takes to transform operations, develop innovative products, and build high-performing teams." }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed", style: pFont.getFontStyle(), children: "My approach combines deep business acumen with a human-centered design mindset, launching solutions that have generated significant value for both the bottom line and customers." }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed", style: pFont.getFontStyle(), children: "I believe that the most successful organizations are those that align their business goals with a meaningful purpose, creating value for all stakeholders while making a positive impact on the world." }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed", style: pFont.getFontStyle(), children: "Right now, I'm all in on Generative AI to transform operations, build new customer experiences, and stay ahead of the competition." })] }) }) }) })] }), _jsx("div", { className: "mb-40 pt-16", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-[26%] top-[-80px] w-px h-64 bg-gradient-to-b from-transparent via-gray-900 to-transparent" }), _jsxs("div", { className: "flex items-center justify-center", children: [_jsx("div", { className: "w-16 h-16 flex-shrink-0 mr-2", children: _jsx("img", { src: "/Clearmont_mountain_only.png", alt: "Clearmont", className: "w-full h-full object-contain" }) }), _jsx("div", { className: "flex-shrink-0 ml-2", children: _jsx("p", { className: "text-lg font-semibold text-gray-600 uppercase tracking-wide about", style: pFont.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", children: "UNIQUE SUCCESS CROSS-PLATFORM, INDUSTRY AND DOMAIN..." }) }) })] })] }) }), _jsx("div", { className: "w-full mb-2", children: _jsx(AnimateOnScroll, { children: _jsxs("div", { className: "flex gap-8", children: [_jsx("div", { className: "flex-1", children: _jsx("div", { className: "grid grid-cols-4 grid-rows-2 gap-4", children: domains.filter(domain => !['Industries', 'Career'].includes(domain.title)).map((domain) => {
                                                return (_jsxs("div", { className: "relative group flex flex-col items-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg", children: [_jsx("div", { className: "w-8 h-8 text-gray-600", children: React.cloneElement(domain.icon, { className: "w-8 h-8 text-gray-600" }) }), _jsx("span", { className: "text-xs font-bold text-gray-600 text-center mt-2", children: domain.title }), _jsx("div", { className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[99999]", children: _jsxs("div", { className: "bg-white rounded-xl p-4 shadow-2xl border border-gray-200 w-80 relative z-[99999]", children: [_jsx("h4", { className: "text-gray-800 mb-3 about", style: h3Font.getFontStyle(), children: domain.title }), _jsx("div", { className: "text-gray-700 leading-relaxed about", style: pFont.getFontStyle(), children: domain.description.split(' • ').map((point, i) => (_jsxs("div", { className: "mb-1 flex items-start", children: [_jsx(Check, { className: "w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "about", style: pFont.getFontStyle(), children: point.trim() })] }, i))) }), _jsx("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" })] }) })] }, domain.title));
                                            }) }) }), _jsx("div", { className: "w-px bg-gray-300" }), _jsx("div", { className: "w-48", children: _jsx("div", { className: "grid grid-cols-1 gap-4", children: domains.filter(domain => ['Industries', 'Career'].includes(domain.title)).map((domain) => {
                                                return (_jsxs("div", { className: "relative group flex flex-col items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg", children: [_jsx("div", { className: "w-8 h-8 text-gray-600", children: React.cloneElement(domain.icon, { className: "w-8 h-8 text-gray-600" }) }), _jsx("span", { className: "text-xs font-bold text-gray-600 text-center mt-2", children: domain.title }), _jsx("div", { className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[99999]", children: _jsxs("div", { className: "bg-white rounded-xl p-4 shadow-2xl border border-gray-200 w-80 relative z-[99999]", children: [_jsx("h4", { className: "text-gray-800 mb-3 about", style: h3Font.getFontStyle(), children: domain.title }), _jsx("div", { className: "text-gray-700 leading-relaxed about", style: h3Font.getFontStyle(), children: domain.description.split(' • ').map((point, i) => (_jsxs("div", { className: "mb-1 flex items-start", children: [_jsx(Check, { className: "w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "about", style: pFont.getFontStyle(), children: point.trim() })] }, i))) }), _jsx("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" })] }) })] }, domain.title));
                                            }) }) })] }) }) })] })] }));
}
