import { useEffect, useState } from 'react';

export function TubeMapTransition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/tubemap.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating elements for extra visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/30 rounded-full"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)`,
          }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary/20 rounded-full"
          style={{
            transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.12}px)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent/20 rounded-full"
          style={{
            transform: `translate(${scrollY * 0.12}px, ${scrollY * -0.1}px)`,
          }}
        ></div>
      </div>
    </section>
  );
}
