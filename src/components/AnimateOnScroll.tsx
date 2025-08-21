import React, { useEffect, useState, useRef, Children, isValidElement } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
  const [isVisible, setIsVisible] = useState(false);

  // Set up the initial animation states based on direction
  const getDirectionalVariants = () => {
    const variants = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: 'easeOut'
        }
      }
    };

    switch (direction) {
      case 'up':
        variants.hidden = { ...variants.hidden, y: distance };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'down':
        variants.hidden = { ...variants.hidden, y: -distance };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case 'left':
        variants.hidden = { ...variants.hidden, x: distance };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case 'right':
        variants.hidden = { ...variants.hidden, x: -distance };
        variants.visible = { ...variants.visible, x: 0 };
        break;
    }
    return variants;
  };

  const variants = getDirectionalVariants();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
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
              duration: props.duration || 0.6,
              ease: 'easeOut'
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
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div
            custom={i}
            initial={{ opacity: 0, y: props.distance || 30 }}
            animate={controls}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}