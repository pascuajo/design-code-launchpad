/**
 * Hero Section Component
 * 
 * FONT SYSTEM: This component uses the centralized font management system.
 * 
 * ✅ DO: Use useFonts hook and style={fontHook.getFontStyle()}
 * ❌ DON'T: Hardcode fonts or use Tailwind font classes
 * 
 * Pattern:
 * 1. Import useFonts hook
 * 2. Add data-component attribute to root
 * 3. Add CSS classes for targeting
 * 4. Use font hooks for each element type
 * 5. Apply styles with style={fontHook.getFontStyle()}
 */

import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ContactModal } from './ContactModal';
import { useFonts } from '../hooks/useFonts';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const h1Font = useFonts('hero', 'h1');
  const pFont = useFonts('hero', 'p');
  const buttonFont = useFonts('hero', 'button');
  const highlightedFont = useFonts('hero', 'highlighted');
  
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 hero-section" data-component="hero">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <AnimateOnScroll direction="right" className="md:w-1/3 mb-12 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto md:mx-0">
            <img 
              src="/ProfileRoto.png" 
              alt="Consultant portrait" 
              className="w-full h-full object-cover object-top scale-110" 
            />
          </div>
        </AnimateOnScroll>

        <div className="md:w-2/3 md:pl-16">
          <AnimateOnScroll delay={0.2} direction="left">
            {/* Small Logo and Hook - Right aligned */}
            <div className="mb-6 text-right">
              <div className="w-20 h-20 mb-3 ml-auto">
                <img 
                  src="/Clearmont_mountain_only.png" 
                  alt="Clearmont" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-black uppercase tracking-wide hero" style={pFont.getFontStyle()}>
                Build Better
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero text-right" style={h1Font.getFontStyle()}>
              Building What{' '}
              <span className="handdrawn-highlight hero" style={highlightedFont.getFontStyle()}>Truly Matters,</span>
              Faster.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4} direction="left">
            <p className="text-gray-600 mb-6 text-xl max-w-2xl hero text-right ml-auto" style={pFont.getFontStyle()}>
              Strategic product consulting for purpose-driven organizations and
              leaders.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.6} direction="up">
            <div className="text-right">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 hover:bg-yellow-600 text-accent-foreground font-medium py-3 px-8 rounded-full transition duration-300 text-lg"
                style={buttonFont.getFontStyle()}
              >
                Let's Talk →
              </button>
            </div>
          </AnimateOnScroll>

          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </section>
  );
}
