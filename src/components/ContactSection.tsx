import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ContactModal } from './ContactModal';
import { useFonts } from '../hooks/useFonts';

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const h2Font = useFonts('contact', 'h2');
  const pFont = useFonts('contact', 'p');
  const buttonFont = useFonts('contact', 'button');
  const highlightedFont = useFonts('contact', 'highlighted');
  
  return (
    <section className="w-full bg-gray-900 text-white py-16 px-4 contact-section" id="contact" data-component="contact">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side - Header and Strapline */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 contact text-left" style={h2Font.getFontStyle()}>
                Ready to turn your <span className="handdrawn-highlight" style={highlightedFont.getFontStyle()}>ideas into impact</span>?
              </h2>
              
              <p className="text-gray-300 text-xl contact text-left" style={pFont.getFontStyle()}>
                Let's connect and explore how we can work together to achieve your
                goals and create meaningful change.
              </p>
            </div>

            {/* Right side - Contact Button */}
            <div className="lg:w-1/3 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 hover:bg-yellow-600 text-accent-foreground font-medium py-4 px-10 rounded-full transition duration-300 text-lg whitespace-nowrap"
                style={buttonFont.getFontStyle()}
              >
                Contact Me
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}
