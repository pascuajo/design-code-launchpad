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
      
      {/* Floating station markers with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central station */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * -50}px) scale(${1 + scrollY * 0.1})`,
          }}
        >
          <div className="w-6 h-6 bg-yellow-400 rounded-full shadow-lg border-4 border-white animate-pulse" />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white rounded-full shadow-md">
            <span className="text-xs font-semibold text-gray-800">Central Hub</span>
          </div>
        </div>

        {/* Station 1 */}
        <div 
          className="absolute top-1/4 left-1/4"
          style={{
            transform: `translate(${scrollY * 30}px, ${scrollY * -40}px) scale(${1 + scrollY * 0.05})`,
          }}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full shadow-md border-2 border-white" />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-white rounded shadow-sm">
            <span className="text-xs font-medium text-gray-700">Station A</span>
          </div>
        </div>

        {/* Station 2 */}
        <div 
          className="absolute top-3/4 right-1/3"
          style={{
            transform: `translate(${scrollY * -25}px, ${scrollY * 35}px) scale(${1 + scrollY * 0.05})`,
          }}
        >
          <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md border-2 border-white" />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-white rounded shadow-sm">
            <span className="text-xs font-medium text-gray-700">Station B</span>
          </div>
        </div>

        {/* Station 3 */}
        <div 
          className="absolute top-1/3 right-1/4"
          style={{
            transform: `translate(${scrollY * 40}px, ${scrollY * -30}px) scale(${1 + scrollY * 0.05})`,
          }}
        >
          <div className="w-4 h-4 bg-green-500 rounded-full shadow-md border-2 border-white" />
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-white rounded shadow-sm">
            <span className="text-xs font-medium text-gray-700">Station C</span>
          </div>
        </div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
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
      </div>

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

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-center text-white z-10"
          style={{
            transform: `translateY(${scrollY * 30}px) scale(${1 + scrollY * 0.1})`,
            opacity: 0.8 + scrollY * 0.2,
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
            Strategic Connections
          </h3>
          <p className="text-lg md:text-xl drop-shadow-md max-w-md mx-auto">
            Navigating the pathways to business success
          </p>
        </div>
      </div>
    </section>
  );
}
