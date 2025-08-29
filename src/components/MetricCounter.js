import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { AnimateOnScroll } from './AnimateOnScroll';
import { useEffect, useRef, useState } from 'react';
import { useFonts } from '../hooks/useFonts';
function FlipCard({ targetChar, duration, delay = 0, isLetter = false, isMetricLetter = false, bgColor = 'bg-white', textColor }) {
    const [currentChar, setCurrentChar] = useState(isLetter ? 'A' : '0');
    const [isFlipping, setIsFlipping] = useState(false);
    const intervalRef = useRef();
    const spanFont = useFonts('metrics', 'span');
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFlipping(true);
            if (targetChar.match(/\d/)) {
                // Handle digits - count up from 0
                let current = 0;
                const target = parseInt(targetChar);
                intervalRef.current = setInterval(() => {
                    if (current >= target) {
                        setCurrentChar(targetChar);
                        setIsFlipping(false);
                        clearInterval(intervalRef.current);
                    }
                    else {
                        current++;
                        setCurrentChar(current.toString());
                    }
                }, duration / (target || 1) / 3);
            }
            else if (isLetter) {
                // Handle letters - cycle through alphabet
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                const randomDuration = Math.random() * 2000 + 1000;
                const flipSpeed = 100;
                let flipCount = 0;
                const maxFlips = randomDuration / flipSpeed;
                intervalRef.current = setInterval(() => {
                    if (flipCount >= maxFlips) {
                        setCurrentChar(targetChar);
                        setIsFlipping(false);
                        clearInterval(intervalRef.current);
                    }
                    else {
                        const randomChar = letters[Math.floor(Math.random() * letters.length)];
                        setCurrentChar(randomChar);
                        flipCount++;
                    }
                }, flipSpeed);
            }
            else {
                // Handle symbols
                const symbols = ['$', '+', '-'];
                const randomDuration = Math.random() * 1500 + 500;
                const flipSpeed = 75;
                let flipCount = 0;
                const maxFlips = randomDuration / flipSpeed;
                intervalRef.current = setInterval(() => {
                    if (flipCount >= maxFlips) {
                        setCurrentChar(targetChar);
                        setIsFlipping(false);
                        clearInterval(intervalRef.current);
                    }
                    else {
                        const randomChar = symbols[Math.floor(Math.random() * symbols.length)];
                        setCurrentChar(randomChar);
                        flipCount++;
                    }
                }, flipSpeed);
            }
        }, delay);
        return () => {
            clearTimeout(timer);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [targetChar, duration, delay, isLetter, isMetricLetter]);
    return (_jsxs("div", { className: "relative w-6 h-10 perspective-1000", children: [" ", _jsx("div", { className: `w-full h-full ${bgColor} rounded-sm ${bgColor === 'bg-gray-900' ? 'border border-white' : 'border-2 border-gray-600'} flex items-center justify-center transform-gpu transition-transform duration-75 ${isFlipping ? 'animate-[flipDigit_0.15s_ease-out_infinite]' : ''}`, style: {
                    transformStyle: 'preserve-3d'
                }, children: _jsxs("div", { className: `font-din-condensed font-bold flip-digit ${textColor || (isMetricLetter || !isLetter ? 'text-gray-900 text-3xl' : 'text-red-500 text-lg')}`, style: spanFont.getFontStyle(), children: [" ", currentChar] }) })] }));
}
export function MetricCounter() {
    const counterRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [positions] = useState([
        { x: 0, y: 0 }, // Column 1: Products Launched
        { x: 0, y: 0 }, // Column 2: Value Created  
        { x: 0, y: 0 }, // Column 3: Staff Managed
        { x: 0, y: 0 } // Column 4: Customers Served
    ]);
    const h2Font = useFonts('metrics', 'h2');
    // DRAG FUNCTIONALITY - DISABLED BUT PRESERVED FOR FUTURE USE
    // Drag positions for each metric column
    // const [positions] = useState([
    //   { x: 5, y: 2 }, // Products Launched - LOCKED POSITION (nudged right 5px, down 2px)
    //   { x: 5, y: 2 }, // Value Created - LOCKED POSITION (nudged right 5px, down 2px)
    //   { x: 5, y: 2 }, // Staff Managed - LOCKED POSITION (nudged right 5px, down 2px)
    //   { x: 5, y: 2 }, // Customers Served - LOCKED POSITION (nudged right 5px, down 2px)
    // ]);
    // const [dragIndex, setDragIndex] = useState<number | null>(null);
    // const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    // const handleMouseDown = (index: number, e: React.MouseEvent) => {
    //   setDragIndex(index);
    //   setDragStart({
    //     x: e.clientX - positions[index].x,
    //     y: e.clientY - positions[index].y,
    //   });
    // };
    // const handleMouseMove = (e: React.MouseEvent) => {
    //   if (dragIndex !== null) {
    //     const newPositions = [...positions];
    //     newPositions[dragIndex] = {
    //       x: e.clientX - dragStart.x,
    //       y: e.clientY - dragStart.y,
    //     };
    //     setPositions(newPositions);
    //   }
    // };
    // const handleMouseUp = () => {
    //   setDragIndex(null);
    // };
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setHasStarted(true);
            }
        }, { threshold: 0.5 });
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    return (_jsxs("section", { ref: counterRef, className: "w-full bg-gray-900 py-8 px-4 relative overflow-hidden metric-counter metrics", "data-component": "metrics", children: [_jsx("div", { className: "absolute inset-0 opacity-20", style: {
                    backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
                    backgroundSize: '26px 42px', // Matches card + gap: 24px card width + 2px gap = 26px, 40px card height + 2px gap = 42px
                    backgroundPosition: '4px 1px', // Nudge right 4px, down 1px to align with cards
                } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50" }), _jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [_jsx("div", { className: "text-center mb-8", children: _jsxs("h3", { className: "text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] metrics", style: h2Font.getFontStyle(), children: ["From strategy to launch, ", _jsx("span", { className: "handdrawn-highlight", children: "every stop covered" }), "."] }) }), _jsx(AnimateOnScroll, { children: _jsxs("div", { className: "grid grid-cols-4 gap-4 max-w-5xl mx-auto", style: { gridTemplateColumns: 'repeat(4, 1fr)', transform: 'translate(5px, 2px)' }, children: [_jsxs("div", { className: "flex flex-col items-end space-y-1", style: {
                                        transform: `translate(${positions[0].x}px, ${positions[0].y}px)`
                                    }, children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && (_jsxs(_Fragment, { children: [_jsx(FlipCard, { targetChar: "5", duration: 2500, delay: 0, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "0", duration: 2500, delay: 100, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "+", duration: 2500, delay: 200, bgColor: "bg-white", textColor: "text-black text-3xl" })] })) }), _jsxs("div", { className: "flex flex-col items-end space-y-0.5", children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'PRODUCTS'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 300 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) }), _jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'LAUNCHED'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 600 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) })] })] }), _jsxs("div", { className: "flex flex-col items-end space-y-1", style: {
                                        transform: `translate(${positions[1].x}px, ${positions[1].y}px)`
                                    }, children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && (_jsxs(_Fragment, { children: [_jsx(FlipCard, { targetChar: "$", duration: 2500, delay: 0, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "3", duration: 2500, delay: 100, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "B", duration: 2500, delay: 200, isLetter: true, isMetricLetter: true, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "n", duration: 2500, delay: 300, isLetter: true, isMetricLetter: true, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "+", duration: 2500, delay: 400, bgColor: "bg-white", textColor: "text-black text-3xl" })] })) }), _jsxs("div", { className: "flex flex-col items-end space-y-0.5", children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'VALUE'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 500 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) }), _jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'CREATED'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 750 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) })] })] }), _jsxs("div", { className: "flex flex-col items-end space-y-1", style: {
                                        transform: `translate(${positions[2].x}px, ${positions[2].y}px)`
                                    }, children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && (_jsxs(_Fragment, { children: [_jsx(FlipCard, { targetChar: "1", duration: 2500, delay: 0, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "0", duration: 2500, delay: 100, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "0", duration: 2500, delay: 200, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "0", duration: 2500, delay: 300, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "+", duration: 2500, delay: 400, bgColor: "bg-white", textColor: "text-black text-3xl" })] })) }), _jsxs("div", { className: "flex flex-col items-end space-y-0.5", children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'STAFF'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 500 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) }), _jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'MANAGED'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 700 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) })] })] }), _jsxs("div", { className: "flex flex-col items-end space-y-1", style: {
                                        transform: `translate(${positions[3].x}px, ${positions[3].y}px)`
                                    }, children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && (_jsxs(_Fragment, { children: [_jsx(FlipCard, { targetChar: "1", duration: 2500, delay: 0, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "M", duration: 2500, delay: 100, isLetter: true, isMetricLetter: true, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "n", duration: 2500, delay: 200, isLetter: true, isMetricLetter: true, bgColor: "bg-white", textColor: "text-black text-3xl" }), _jsx(FlipCard, { targetChar: "+", duration: 2500, delay: 300, bgColor: "bg-white", textColor: "text-black text-3xl" })] })) }), _jsxs("div", { className: "flex flex-col items-end space-y-0.5", children: [_jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'CUSTOMERS'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 400 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) }), _jsx("div", { className: "flex items-center space-x-0.5", children: hasStarted && 'SERVED'.split('').map((char, i) => (_jsx(FlipCard, { targetChar: char, duration: 2500, delay: 800 + i * 50, isLetter: true, bgColor: "bg-gray-900", textColor: "text-white text-lg" }, i))) })] })] })] }) })] })] }));
}
