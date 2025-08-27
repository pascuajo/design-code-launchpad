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
  targetChar: string;
  duration: number;
  delay?: number;
}

function FlipDigit({ targetChar, duration, delay = 0 }: FlipDigitProps) {
  const [currentChar, setCurrentChar] = useState('0');
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

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
          } else {
            current++;
            setCurrentChar(current.toString());
          }
        }, duration / (target || 1) / 3);
      } else {
        // Handle symbols and letters - random characters then target
        const symbols = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '?'];
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const randomChars = targetChar === '$' ? symbols : 
                           targetChar.match(/[A-Z]/i) ? letters : 
                           ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        // Random duration between 1-5 seconds
        const randomDuration = Math.random() * 4000 + 1000;
        const flipSpeed = 50; // Very fast flipping
        
        let flipCount = 0;
        const maxFlips = randomDuration / flipSpeed;
        
        intervalRef.current = setInterval(() => {
          if (flipCount >= maxFlips) {
            setCurrentChar(targetChar);
            setIsFlipping(false);
            clearInterval(intervalRef.current);
          } else {
            const randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
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
  }, [targetChar, duration, delay]);

  return (
    <div className="relative w-8 h-12 mx-0.5 perspective-1000">
      <div 
        className={`w-full h-full bg-white rounded-sm border-2 border-gray-800 flex items-center justify-center transform-gpu transition-transform duration-75 ${
          isFlipping ? 'animate-[flipDigit_0.15s_ease-in-out_infinite]' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="text-gray-900 font-din-condensed font-bold text-2xl">
          {currentChar}
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

  // Format the target value and break it into characters (remove decimals)
  const displayValue = `${prefix}${Math.floor(targetValue).toLocaleString('en-US', { maximumFractionDigits: 0 })}${suffix}`;
  const characters = displayValue.split('');

  return (
    <div ref={counterRef} className={`${bgColor} rounded-2xl p-8 h-full flex flex-col justify-center items-center shadow-sm border border-gray-100`}>
      {/* Flip digit display */}
      <div className="bg-gray-800 rounded-xl p-1 mb-4 shadow-lg border-2 border-gray-700">
        <div className="flex items-center justify-center min-h-[48px]">
          {characters.map((char, index) => (
            char === ',' ? null : hasStarted ? (
              <FlipDigit 
                key={index} 
                targetChar={char} 
                duration={duration}
                delay={index * 100}
              />
            ) : (
              <div key={index} className="w-8 h-12 mx-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-sm border-2 border-gray-800 flex items-center justify-center">
                  <div className="text-gray-900 font-din-condensed font-bold text-2xl">0</div>
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