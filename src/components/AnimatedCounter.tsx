import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  bgColor?: string;
}

export function AnimatedCounter({ targetValue, suffix = '', prefix = '', duration = 2500, label, bgColor = 'bg-blue-50' }: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number>();
  const counterRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      setCurrentValue(newValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue); // Ensure exact final value
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={counterRef} className={`${bgColor} rounded-2xl p-8 h-full flex flex-col justify-center items-center shadow-sm border border-gray-100`}>
      <div className="bg-white rounded-xl p-6 mb-4 shadow-sm w-full text-center">
        <div className="text-3xl md:text-4xl font-bold text-gray-900">
          {prefix}{currentValue.toLocaleString()}{suffix}
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
}