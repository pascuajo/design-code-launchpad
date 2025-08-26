import { useState, useEffect } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

const testimonials = [
  {
    id: 1,
    image: "/BenProctor.jpeg",
    quote: "Joe is one of the few professionals I have worked with who is able to fundamentally rethink how we operate - a real asset to any team looking to digitize their function.",
    name: "Ben Procter",
    title: "CFO, Cavendish Plc"
  },
  {
    id: 2,
    image: "/patrickoconnor.jpg",
    quote: "Exceptional product strategist who transformed our AI vision into reality and pivotal in developing our agentic AI platform. His ability to translate complex AI concepts into market-winning products is unmatched",
    name: "Patrick O'Connor",
    title: "CEO, Gatekeeper"
  },
  {
    id: 4,
    image: "/anthea_king.jpg",
    quote: "Joe launched our startup 0 to 1 in 6 months and exceeded all projections...$1Mn in ARR in our first 12 months, 95% CSAT score, 25% conversion rate was all down to his vision and impeccable attention to the customer experience",
    name: "Anthea King",
    title: "CMO, Homepaired"
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);


  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <AnimateOnScroll direction="right" className="md:w-1/4 mb-8 md:mb-0">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
              <img 
                src={currentTestimonial.image}
                alt={`${currentTestimonial.name}, ${currentTestimonial.title}`}
                className="w-full h-full object-cover" 
              />
            </div>
          </AnimateOnScroll>

          <div className="md:w-3/4">
            <AnimateOnScroll direction="left" delay={0.3}>
              <p className="italic text-gray-600 mb-6 text-xl">
                "{currentTestimonial.quote}"
              </p>
              <p className="font-semibold text-lg">{currentTestimonial.name}</p>
              <p className="text-gray-500">{currentTestimonial.title}</p>
            </AnimateOnScroll>
          </div>
        </div>

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
            />
          ))}
        </div>
      </div>

    </section>
  );
}
