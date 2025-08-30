import { AnimateOnScroll } from './AnimateOnScroll';

export function LogoSection() {
  // Array of client logos
  const logos = [
    {
      id: 1,
      name: 'Amherst',
      imageUrl: "/amherst-logo2x.webp",
      className: 'h-10 md:h-12'
    },
    {
      id: 2,
      name: 'Vista',
      imageUrl: "/VistaLogo_White_Vertical.webp",
      className: 'h-10 md:h-14'
    },
    {
      id: 3,
      name: 'Gatekeeper',
      imageUrl: "/Gatekeeper_Logo_all_white.png",
      className: 'h-8 md:h-10'
    },
    {
      id: 4,
      name: 'UBS Bank',
      imageUrl: "/UBS_AG_White.png",
      className: 'h-8 md:h-10'
    },
    {
      id: 5,
      name: 'Bungalo',
      imageUrl: "/bungalo.png",
      className: 'h-8 md:h-10'
    },
    {
      id: 6,
      name: 'MSR',
      imageUrl: "/MSRLogo_White.webp",
      className: 'h-8 md:h-10'
    },
    {
      id: 7,
      name: 'Homepaired',
      imageUrl: "/Homepaired_logo.png",
      className: 'h-8 md:h-12'
    }
  ];

  return (
    <section className="w-full bg-gray-900 py-8 md:py-16 px-4 logo-section" data-component="logo">
      {/* Desktop: Animated scrolling logos - EXACTLY as before */}
      <div className="hidden md:block max-w-full mx-auto overflow-hidden">
        <AnimateOnScroll>
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            {logos.map(logo => (
              <div key={logo.id} className="flex-shrink-0 mx-12 inline-block">
                <img 
                  src={logo.imageUrl} 
                  alt={`${logo.name} logo`} 
                  className={`${logo.className} w-auto object-contain`} 
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map(logo => (
              <div key={`${logo.id}-duplicate`} className="flex-shrink-0 mx-12 inline-block">
                <img 
                  src={logo.imageUrl} 
                  alt={`${logo.name} logo`} 
                  className={`${logo.className} w-auto object-contain`} 
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Mobile: Static grid layout - custom arrangement */}
      <div className="md:hidden max-w-full mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Row 1: UBS, Amherst */}
          <div className="flex space-x-8">
            {logos.filter(logo => ['UBS Bank', 'Amherst'].includes(logo.name)).map(logo => (
              <div key={logo.id} className="flex justify-center items-center">
                <img 
                  src={logo.imageUrl} 
                  alt={`${logo.name} logo`} 
                  className="h-8 w-auto object-contain" 
                />
              </div>
            ))}
          </div>
          
          {/* Row 2: Vista, Gatekeeper, Bungalo */}
          <div className="flex space-x-6">
            {logos.filter(logo => ['Vista', 'Gatekeeper', 'Bungalo'].includes(logo.name)).map(logo => (
              <div key={logo.id} className="flex justify-center items-center">
                <img 
                  src={logo.imageUrl} 
                  alt={`${logo.name} logo`} 
                  className={logo.name === 'Vista' ? 'h-10 w-auto object-contain' : 'h-8 w-auto object-contain'} 
                />
              </div>
            ))}
          </div>
          
          {/* Row 3: MSR, Homepaired */}
          <div className="flex space-x-8">
            {logos.filter(logo => ['MSR', 'Homepaired'].includes(logo.name)).map(logo => (
              <div key={logo.id} className="flex justify-center items-center">
                <img 
                  src={logo.imageUrl} 
                  alt={`${logo.name} logo`} 
                  className="h-8 w-auto object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
