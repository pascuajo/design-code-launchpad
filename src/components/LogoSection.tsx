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
    <section className="w-full bg-yellow-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-row justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
            {logos.map(logo => (
              <div key={logo.id} className="flex-shrink-0">
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
      <div className="max-w-6xl mx-auto mt-12 border-b border-gray-300"></div>
    </section>
  );
}