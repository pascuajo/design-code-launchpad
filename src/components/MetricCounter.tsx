import { AnimateOnScroll } from './AnimateOnScroll';
import { useEffect, useRef, useState } from 'react';

interface FlipCardProps {
  targetChar: string;
  duration: number;
  delay?: number;
  isLetter?: boolean;
}

function FlipCard({ targetChar, duration, delay = 0, isLetter = false }: FlipCardProps) {
  const [currentChar, setCurrentChar] = useState(isLetter ? 'A' : '0');
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
      } else if (isLetter) {
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
          } else {
            const randomChar = letters[Math.floor(Math.random() * letters.length)];
            setCurrentChar(randomChar);
            flipCount++;
          }
        }, flipSpeed);
      } else {
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
          } else {
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
  }, [targetChar, duration, delay, isLetter]);

  return (
    <div className="relative w-8 h-12 perspective-1000">
      <div 
        className={`w-full h-full bg-white rounded-sm border-2 border-gray-600 flex items-center justify-center transform-gpu transition-transform duration-75 ${
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

export function MetricCounter() {
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
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

  return (
    <section ref={counterRef} className="w-full bg-gray-800 py-20 px-4 relative overflow-hidden">
      {/* Train station board grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: '36px 52px',
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-transparent to-gray-800/50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimateOnScroll>
          <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            {/* Products Launched - Column 1 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Metric: 50+ */}
              <div className="flex items-center">
                {hasStarted && (
                  <>
                    <FlipCard targetChar="5" duration={2500} delay={0} />
                    <FlipCard targetChar="0" duration={2500} delay={100} />
                    <FlipCard targetChar="+" duration={2500} delay={200} />
                  </>
                )}
              </div>
              {/* Title: PRODUCTS LAUNCHED */}
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1">
                  {hasStarted && 'PRODUCTS'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={300 + i * 50} isLetter />
                  ))}
                </div>
                <div className="flex items-center space-x-1">
                  {hasStarted && 'LAUNCHED'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={600 + i * 50} isLetter />
                  ))}
                </div>
              </div>
            </div>

            {/* Value Created - Column 2 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Metric: $3Bn+ */}
              <div className="flex items-center">
                {hasStarted && (
                  <>
                    <FlipCard targetChar="$" duration={2500} delay={0} />
                    <FlipCard targetChar="3" duration={2500} delay={100} />
                    <FlipCard targetChar="B" duration={2500} delay={200} isLetter />
                    <FlipCard targetChar="n" duration={2500} delay={300} isLetter />
                    <FlipCard targetChar="+" duration={2500} delay={400} />
                  </>
                )}
              </div>
              {/* Title: VALUE CREATED */}
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1">
                  {hasStarted && 'VALUE'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={500 + i * 50} isLetter />
                  ))}
                </div>
                <div className="flex items-center space-x-1">
                  {hasStarted && 'CREATED'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={750 + i * 50} isLetter />
                  ))}
                </div>
              </div>
            </div>

            {/* Staff Managed - Column 3 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Metric: 1000+ */}
              <div className="flex items-center">
                {hasStarted && (
                  <>
                    <FlipCard targetChar="1" duration={2500} delay={0} />
                    <FlipCard targetChar="0" duration={2500} delay={100} />
                    <FlipCard targetChar="0" duration={2500} delay={200} />
                    <FlipCard targetChar="0" duration={2500} delay={300} />
                    <FlipCard targetChar="+" duration={2500} delay={400} />
                  </>
                )}
              </div>
              {/* Title: STAFF MANAGED */}
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1">
                  {hasStarted && 'STAFF'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={500 + i * 50} isLetter />
                  ))}
                </div>
                <div className="flex items-center space-x-1">
                  {hasStarted && 'MANAGED'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={700 + i * 50} isLetter />
                  ))}
                </div>
              </div>
            </div>

            {/* Customers Served - Column 4 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Metric: 1Mn+ */}
              <div className="flex items-center">
                {hasStarted && (
                  <>
                    <FlipCard targetChar="1" duration={2500} delay={0} />
                    <FlipCard targetChar="M" duration={2500} delay={100} isLetter />
                    <FlipCard targetChar="n" duration={2500} delay={200} isLetter />
                    <FlipCard targetChar="+" duration={2500} delay={300} />
                  </>
                )}
              </div>
              {/* Title: CUSTOMERS SERVED */}
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1">
                  {hasStarted && 'CUSTOMERS'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={400 + i * 50} isLetter />
                  ))}
                </div>
                <div className="flex items-center space-x-1">
                  {hasStarted && 'SERVED'.split('').map((char, i) => (
                    <FlipCard key={i} targetChar={char} duration={2500} delay={800 + i * 50} isLetter />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}