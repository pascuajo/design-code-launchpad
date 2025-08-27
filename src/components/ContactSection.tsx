import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ContactModal } from './ContactModal';

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full bg-gray-900 text-white py-28 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to turn your <span className="handdrawn-highlight">ideas into impact</span>?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="text-gray-300 mb-12 text-xl max-w-2xl mx-auto">
            Let's connect and explore how we can work together to achieve your
            goals and create meaningful change.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.6} direction="up">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 hover:bg-yellow-600 text-accent-foreground font-medium py-4 px-10 rounded-full transition duration-300 text-lg"
          >
            Contact Me
          </button>
        </AnimateOnScroll>

        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}
