import React from 'react';
import { AnimateOnScroll, AnimateChildren } from './AnimateOnScroll';

export function TestimonialSection() {
  return (
    <section className="w-full bg-white py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-16">
            Read This By Way Of It
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center">
          <AnimateOnScroll direction="right" className="md:w-1/4 mb-8 md:mb-0">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
              <img 
                src="/Ben Proctor.jpeg" 
                alt="Ben Procter, CFO of Cavendish Plc" 
                className="w-full h-full object-cover" 
              />
            </div>
          </AnimateOnScroll>

          <div className="md:w-3/4">
            <AnimateOnScroll direction="left" delay={0.3}>
              <p className="italic text-gray-600 mb-6 text-xl">
                "Joe is one of the few professionals I have worked with who is able to fundamentally rethink how we operate - a real asset to any team looking to digitize their function."
              </p>
              <p className="font-semibold text-lg">Ben Procter</p>
              <p className="text-gray-500">CFO, Cavendish Plc</p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <AnimateChildren staggerDelay={0.1} className="max-w-6xl mx-auto mt-20 flex justify-center gap-10">
        {[1, 2, 3, 4, 5].map(logo => (
          <div key={logo} className="h-10 w-20 opacity-70">
            <div className="bg-gray-200 h-full w-full rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Logo {logo}</span>
            </div>
          </div>
        ))}
      </AnimateChildren>
    </section>
  );
}