import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
export function AnimateOnScroll({ children, threshold = 0.1, delay = 0, direction = 'up', className = '', distance = 50, duration = 0.6, once = true }) {
    const controls = useAnimation();
    const ref = useRef(null);
    const variants = {
        hidden: {
            opacity: 0,
            ...(direction === 'up' && { y: distance }),
            ...(direction === 'down' && { y: -distance }),
            ...(direction === 'left' && { x: distance }),
            ...(direction === 'right' && { x: -distance })
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay
            }
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controls.start('visible');
                if (once) {
                    observer.disconnect();
                }
            }
            else if (!once) {
                controls.start('hidden');
            }
        }, { threshold });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls, threshold, once]);
    return (_jsx(motion.div, { ref: ref, initial: "hidden", animate: controls, variants: variants, className: className, children: children }));
}
export function AnimateChildren({ children, staggerDelay = 0.1, ...props }) {
    const controls = useAnimation();
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controls.start((i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: i * staggerDelay,
                        duration: props.duration || 0.6
                    }
                }));
            }
        }, { threshold: props.threshold || 0.1 });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls, props.threshold, staggerDelay, props.duration]);
    return (_jsx("div", { ref: ref, className: props.className, children: Array.isArray(children) ? children.map((child, i) => (_jsx(motion.div, { custom: i, initial: { opacity: 0, y: props.distance || 30 }, animate: controls, children: child }, i))) : children }));
}
