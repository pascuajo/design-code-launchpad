import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
export function TubeMapTransition() {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                const windowHeight = window.innerHeight;
                // Calculate scroll progress within this section
                const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
                setScrollY(scrollProgress);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("section", { ref: sectionRef, className: "relative h-[58.5vh] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 tube-map tube-map-transition", "data-component": "tubeMap", children: [_jsx("div", { className: "absolute inset-0 w-full h-full transition-transform duration-300 ease-out", style: {
                    backgroundImage: 'url(/tubemap.png)',
                    backgroundSize: '100%',
                    backgroundPosition: 'center 60%',
                    backgroundRepeat: 'no-repeat',
                    transform: `scale(${1 + scrollY * 0.2}) translateY(${scrollY * -50}px)`,
                } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", style: { zIndex: 2 }, children: _jsx("img", { src: "/Clearmont_mountain_only.png", alt: "Clearmont", className: "w-32 h-32 object-contain opacity-75" }) }), _jsxs("svg", { className: "absolute inset-0 w-full h-full", style: { zIndex: 1 }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "lineGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", stopColor: "#3B82F6", stopOpacity: "0.6" }), _jsx("stop", { offset: "100%", stopColor: "#8B5CF6", stopOpacity: "0.6" })] }) }), _jsx("path", { d: "M 25% 25% Q 50% 50% 75% 33%", stroke: "url(#lineGradient)", strokeWidth: "2", fill: "none", strokeDasharray: "5,5", style: {
                            strokeDashoffset: scrollY * 50,
                        } }), _jsx("path", { d: "M 75% 33% Q 50% 50% 67% 75%", stroke: "url(#lineGradient)", strokeWidth: "2", fill: "none", strokeDasharray: "5,5", style: {
                            strokeDashoffset: scrollY * -30,
                        } })] }), _jsx("div", { className: "absolute inset-0 pointer-events-none", children: [...Array(8)].map((_, i) => (_jsx("div", { className: "absolute w-2 h-2 bg-yellow-300/40 rounded-full animate-pulse", style: {
                        top: `${20 + (i * 10)}%`,
                        left: `${15 + (i * 8)}%`,
                        animationDelay: `${i * 0.2}s`,
                        transform: `translate(${scrollY * (20 - i * 2)}px, ${scrollY * (15 - i * 3)}px)`,
                    } }, i))) })] }));
}
