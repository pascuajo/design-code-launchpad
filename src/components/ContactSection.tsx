import React from 'react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from './AnimateOnScroll';

export function ContactSection() {
  return (
    <section className="w-full bg-gray-900 text-white py-28 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to turn your ideas into impact?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="text-gray-300 mb-12 text-xl max-w-2xl mx-auto">
            Let's connect and explore how we can work together to achieve your
            goals and create meaningful change.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.6} direction="up">
          <Link to="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-4 px-10 rounded-full transition duration-300 text-lg">
              Contact Me
            </button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}