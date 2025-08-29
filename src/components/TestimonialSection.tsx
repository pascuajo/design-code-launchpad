import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFonts } from '../hooks/useFonts';

const testimonials = [
  {
    id: 1,
    image: "/BenProctor.jpeg",
    quote: "Joe is one of the few professionals I have worked with who is able to fundamentally rethink how we operate - a real asset to any team looking to digitize their function.",
    name: "Ben Procter",
    title: "CFO, Cavendish plc"
  },
  {
    id: 2,
    image: "/patrickoconnor.jpg",
    quote: "Exceptional product strategist who transformed our AI vision into reality developing our agentic AI platform, his ability to translate complex AI concepts into market-winning products is unmatched",
    name: "Patrick O'Connor",
    title: "CEO, Gatekeeper"
  },
  {
    id: 4,
    image: "/anthea_king.jpg",
    quote: "Joe launched our startup 0 to 1 in 6 months...$1Mn in ARR, 95% CSAT score, and 25% conversion in year one demonstrates his impeccable vision and intuition for Product-Market fit",
    name: "Anthea King",
    title: "CMO, Homepaired"
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const h2Font = useFonts('testimonials', 'h2');
  const pFont = useFonts('testimonials', 'p');
  const buttonFont = useFonts('testimonials', 'button');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);


  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-16 px-4 testimonial-section" data-component="testimonials">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/4 mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <img 
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.name}, ${currentTestimonial.title}`}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <div className="md:w-3/4">
              <p className="italic text-gray-600 mb-6 text-xl testimonials" style={pFont.getFontStyle()}>
                "{currentTestimonial.quote}"
              </p>
              <p className="font-semibold text-lg testimonials" style={pFont.getFontStyle()}>{currentTestimonial.name}</p>
              <p className="text-gray-500 testimonials" style={pFont.getFontStyle()}>{currentTestimonial.title}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              style={buttonFont.getFontStyle()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
