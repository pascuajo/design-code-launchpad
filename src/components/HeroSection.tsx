import { Link } from 'react-router-dom';
import { AnimateOnScroll } from './AnimateOnScroll';

export function HeroSection() {
  return (
    <section className="w-full bg-white py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <AnimateOnScroll direction="right" className="md:w-1/3 mb-12 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto md:mx-0">
            <img 
              src="/newphoto.jpg" 
              alt="Consultant portrait" 
              className="w-full h-full object-cover" 
            />
          </div>
        </AnimateOnScroll>

        <div className="md:w-2/3 md:pl-16">
          <AnimateOnScroll delay={0.2} direction="left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building What{' '}
              <span className="bg-yellow-300 px-1">Truly Matters,</span>
              Faster.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4} direction="left">
            <p className="text-gray-600 mb-10 text-xl max-w-2xl">
              Strategic product consulting for purpose-driven organizations and
              leaders who want to create meaningful impact while building
              sustainable businesses.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.6} direction="up">
            <Link to="/contact">
              <button className="bg--yellow-300 hover:bg-accent/90 text-accent-foreground font-medium py-3 px-8 rounded-full transition duration-300 text-lg">
                Let's Talk →
              </button>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
