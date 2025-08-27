import { useEffect, useState, useRef } from 'react';

export function TubeMapTransition() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within this section
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        ));
        
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[80vh] overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Main tube map with parallax and zoom effect */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
        style={{
          backgroundImage: 'url(/tubemap.png)',
          backgroundSize: '120%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `scale(${1 + scrollY * 0.2}) translateY(${scrollY * -100}px)`,
        }}
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M 25% 25% Q 50% 50% 75% 33%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          style={{
            strokeDashoffset: scrollY * 50,
          }}
        />
        <path
          d="M 75% 33% Q 50% 50% 67% 75%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          style={{
            strokeDashoffset: scrollY * -30,
          }}
        />
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300/40 rounded-full animate-pulse"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${15 + (i * 8)}%`,
              animationDelay: `${i * 0.2}s`,
              transform: `translate(${scrollY * (20 - i * 2)}px, ${scrollY * (15 - i * 3)}px)`,
            }}
          />
        ))}
      </div>

      {/* Content overlay with improved visibility */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-center z-10 px-6 py-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl"
          style={{
            transform: `translateY(${scrollY * 30}px) scale(${1 + scrollY * 0.1})`,
            opacity: 0.9 + scrollY * 0.1,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
            From strategy to launch, <span className="handdrawn-highlight">every stop covered</span>.
          </h3>
          <p className="text-lg md:text-xl text-gray-700 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] max-w-md mx-auto leading-relaxed">
            Your trusted guide to achieving product and leadership success.
          </p>
        </div>
      </div>
    </section>
  );
}
