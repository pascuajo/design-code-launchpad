import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  bgColor?: string;
}

interface SplitFlapDigitProps {
  digit: string;
  isAnimating: boolean;
}

function SplitFlapDigit({ digit, isAnimating }: SplitFlapDigitProps) {
  return (
    <div className="relative w-8 h-12 bg-gray-900 rounded-sm mx-0.5 overflow-hidden border border-gray-700">
      {/* Top half */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-800 border-b border-gray-600">
        <div className="flex items-center justify-center h-full text-white font-mono font-bold text-lg">
          {digit}
        </div>
      </div>
      
      {/* Bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-900">
        <div className="flex items-center justify-center h-full text-white font-mono font-bold text-lg">
          {digit}
        </div>
      </div>
      
      {/* Flip animation overlay */}
      {isAnimating && (
        <div className="absolute inset-0 bg-yellow-400 opacity-20 animate-pulse"></div>
      )}
      
      {/* Center line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-0.5"></div>
    </div>
  );
}

export function AnimatedCounter({ targetValue, suffix = '', prefix = '', duration = 2500, label, bgColor = 'bg-blue-50' }: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const counterRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsAnimating(true);

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
        setCurrentValue(targetValue);
        setIsAnimating(false);
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

  // Format the display value and break it into characters
  const displayValue = `${prefix}${currentValue.toLocaleString()}${suffix}`;
  const characters = displayValue.split('');

  return (
    <div ref={counterRef} className={`${bgColor} rounded-2xl p-8 h-full flex flex-col justify-center items-center shadow-sm border border-gray-100`}>
      {/* Split-flap display */}
      <div className="bg-gray-800 rounded-xl p-4 mb-4 shadow-lg border-2 border-gray-700">
        <div className="flex items-center justify-center min-h-[48px]">
          {characters.map((char, index) => (
            char === ',' ? (
              <div key={index} className="w-2 flex items-end justify-center pb-2">
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
              </div>
            ) : (
              <SplitFlapDigit 
                key={index} 
                digit={char} 
                isAnimating={isAnimating}
              />
            )
          ))}
        </div>
      </div>
      
      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
}