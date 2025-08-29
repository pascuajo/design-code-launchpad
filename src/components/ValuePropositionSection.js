import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimateOnScroll } from './AnimateOnScroll';
import { useFonts } from '../hooks/useFonts';
import { CheckCircle } from 'lucide-react';
export function ValuePropositionSection() {
    const h3Font = useFonts('valueProp', 'h3');
    const pFont = useFonts('valueProp', 'p');
    const pillars = [
        {
            title: "Strategic Leadership",
            subtitle: "Executive-level product leadership and strategic guidance when you need decisive direction and proven expertise at the helm.",
            image: "/strategy.jpg",
            benefits: [
                { bold: "Interim C-suite to VP leadership", rest: " for startups and scale-ups without long-term commitment" },
                { bold: "Strategic counsel", rest: " that cuts through complexity to define clear competitive advantage" },
                { bold: "North Star definition", rest: " that aligns stakeholders and accelerates decision-making" },
                { bold: "New business model development", rest: " for breakthrough growth opportunities" }
            ],
            color: "blue"
        },
        {
            title: "Design & Innovation",
            subtitle: "Transform concepts into market-ready solutions while modernizing the technology foundation that powers sustainable growth.",
            image: "/app_design.jpg",
            benefits: [
                { bold: "Rapid concept validation", rest: " without disrupting current product roadmaps" },
                { bold: "ROI-focused prototyping", rest: " that proves business cases before major investment" },
                { bold: "Workflow automation", rest: " that unlocks hidden operational value across your organization" },
                { bold: "Platform innovation", rest: " that creates competitive moats and operational efficiency" }
            ],
            color: "green"
        },
        {
            title: "Operational Excellence",
            subtitle: "Elevate your entire product organization's capability through AI-powered operations and comprehensive talent development.",
            image: "/digtal_transformation.jpg",
            benefits: [
                { bold: "AI-assisted productivity engines", rest: " that multiply team output and operational excellence" },
                { bold: "World-class team transformation", rest: " optimized for modern product development practices" },
                { bold: "Leadership development", rest: " for product professionals at every career stage" },
                { bold: "Performance optimization", rest: " through improved processes, dynamics, and individual growth" }
            ],
            color: "purple"
        }
    ];
    return (_jsx("section", { className: "w-full bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 md:px-8 value-prop-section", "data-component": "valueProp", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("div", { className: "mb-32", children: _jsx(AnimateOnScroll, { children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-[37.3%] top-[-80px] w-px h-64 bg-gradient-to-b from-transparent via-gray-900 to-transparent" }), _jsxs("div", { className: "flex items-center justify-center", children: [_jsx("div", { className: "w-16 h-16 flex-shrink-0 mr-2", children: _jsx("img", { src: "/Clearmont_mountain_only.png", alt: "Clearmont", className: "w-full h-full object-contain" }) }), _jsx("div", { className: "flex-shrink-0 ml-2", children: _jsx("p", { className: "text-lg font-semibold text-gray-600 uppercase tracking-wide value-prop", style: pFont.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", children: "Where Strategy Meets Execution..." }) }) })] })] }) }) }), _jsx("div", { className: "mb-16", children: _jsx(AnimateOnScroll, { children: _jsx("p", { className: "text-xl text-gray-600 max-w-4xl value-prop", style: pFont.getFontStyle(), children: "I help purpose-driven organizations and leaders create meaningful impact while building sustainable businesses. With over 15 years of experience, I bring strategic thinking and practical execution to every engagement." }) }) }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: pillars.map((pillar, index) => (_jsx(AnimateOnScroll, { delay: index * 0.2, children: _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col min-h-[600px]", children: [_jsx("div", { className: "mb-6", children: _jsx("img", { src: pillar.image, alt: pillar.title, className: "w-full h-32 object-cover rounded-lg" }) }), _jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-6 value-prop", style: h3Font.getFontStyle(), children: _jsx("span", { className: "handdrawn-highlight", children: pillar.title }) }), _jsx("p", { className: "text-gray-600 mb-6 leading-relaxed value-prop", style: pFont.getFontStyle(), children: pillar.subtitle }), _jsx("div", { className: "space-y-3", children: pillar.benefits.map((benefit, benefitIndex) => (_jsxs("div", { className: "flex items-start", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" }), _jsxs("span", { className: "text-gray-700 value-prop", style: pFont.getFontStyle(), children: [_jsx("strong", { children: benefit.bold }), benefit.rest] })] }, benefitIndex))) })] }) }, pillar.title))) })] }) }));
}
