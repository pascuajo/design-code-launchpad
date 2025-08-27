import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  bgColor?: string;
}

interface FlipDigitProps {
  targetDigit: string;
  duration: number;
  delay?: number;
}

function FlipDigit({ targetDigit, duration, delay = 0 }: FlipDigitProps) {
  const [currentDigit, setCurrentDigit] = useState('0');
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (targetDigit === '0' || !targetDigit.match(/\d/)) {
        setCurrentDigit(targetDigit);
        return;
      }

      setIsFlipping(true);
      let current = 0;
      const target = parseInt(targetDigit);
      
      intervalRef.current = setInterval(() => {
        if (current >= target) {
          setCurrentDigit(targetDigit);
          setIsFlipping(false);
          clearInterval(intervalRef.current);
        } else {
          current++;
          setCurrentDigit(current.toString());
        }
      }, duration / (target || 1) / 2);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetDigit, duration, delay]);

  if (!targetDigit.match(/\d/)) {
    return (
      <div className="w-8 h-12 mx-0.5 flex items-center justify-center">
        <div className="text-gray-900 font-mono font-bold text-lg">
          {targetDigit}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-8 h-12 mx-0.5 perspective-1000">
      <div 
        className={`w-full h-full bg-white rounded-sm border-2 border-gray-800 flex items-center justify-center transform-gpu transition-transform duration-150 ${
          isFlipping ? 'animate-[flipDigit_0.3s_ease-in-out_infinite]' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="text-gray-900 font-mono font-bold text-lg">
          {currentDigit}
        </div>
      </div>
    </div>
  );
}

export function AnimatedCounter({ targetValue, suffix = '', prefix = '', duration = 2500, label, bgColor = 'bg-blue-50' }: AnimatedCounterProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
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
      observer.disconnect();
    };
  }, []);

  // Format the target value and break it into characters
  const displayValue = `${prefix}${targetValue.toLocaleString()}${suffix}`;
  const characters = displayValue.split('');

  return (
    <div ref={counterRef} className={`${bgColor} rounded-2xl p-8 h-full flex flex-col justify-center items-center shadow-sm border border-gray-100`}>
      {/* Flip digit display */}
      <div className="bg-gray-800 rounded-xl p-4 mb-4 shadow-lg border-2 border-gray-700">
        <div className="flex items-center justify-center min-h-[48px]">
          {characters.map((char, index) => (
            char === ',' ? (
              <div key={index} className="w-2 flex items-end justify-center pb-2">
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
              </div>
            ) : hasStarted ? (
              <FlipDigit 
                key={index} 
                targetDigit={char} 
                duration={duration}
                delay={index * 100}
              />
            ) : (
              <div key={index} className="w-8 h-12 mx-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-sm border-2 border-gray-800 flex items-center justify-center">
                  <div className="text-gray-900 font-mono font-bold text-lg">0</div>
                </div>
              </div>
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