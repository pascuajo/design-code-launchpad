import { useState, useEffect } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: "/Ben Proctor.jpeg",
    quote: "Joe is one of the few professionals I have worked with who is able to fundamentally rethink how we operate - a real asset to any team looking to digitize their function.",
    name: "Ben Procter",
    title: "CFO, Cavendish Plc"
  },
  {
    id: 2,
    image: "/newphoto.jpg", // Placeholder image
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    name: "Patrick O'Connor",
    title: "CEO, Gatekeeper"
  },
  {
    id: 3,
    image: "/newphoto.jpg", // Placeholder image
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "Todd Lawrence",
    title: "CTO, Amherst"
  },
  {
    id: 4,
    image: "/newphoto.jpg", // Placeholder image
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-16">
            Don't Take My Word For It...
          </h2>
        </AnimateOnScroll>

        <div className="relative">
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

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
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
