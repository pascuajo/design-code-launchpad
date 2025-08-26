import { useEffect, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  className = '',
  distance = 50,
  duration = 0.6,
  once = true
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const variants: Variants = {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          controls.start('hidden');
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimateChildren({
  children,
  staggerDelay = 0.1,
  ...props
}: AnimateOnScrollProps & { staggerDelay?: number }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: props.threshold || 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, props.threshold, staggerDelay, props.duration]);

  return (
    <div ref={ref} className={props.className}>
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ opacity: 0, y: props.distance || 30 }}
          animate={controls}
        >
          {child}
        </motion.div>
      )) : children}
    </div>
  );
}