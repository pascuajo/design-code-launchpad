import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-28 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">About Me</h2>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row">
          <AnimateOnScroll direction="right" className="md:w-1/3 mb-12 md:mb-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden mx-auto md:mx-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Consultant portrait" 
                className="w-full h-full object-cover" 
              />
            </div>
          </AnimateOnScroll>

          <div className="md:w-2/3 md:pl-16">
            <AnimateOnScroll direction="left" delay={0.2}>
              <h3 className="text-2xl font-semibold mb-6">Joe Pascual</h3>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.3}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over 15 years experience leading strategic product and digital transformation across various industries and platforms  - I've seen first-hand what it takes to transform operations, develop innovative products, and build high-performing teams.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.4}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                My approach combines deep business acumen with a human-centered
                design mindset, allowing me to create solutions that work for
                both the business and the people involved.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.5}>
              <p className="text-gray-600 text-lg leading-relaxed">
                I believe that the most successful organizations are those that
                align their business goals with a meaningful purpose, creating
                value for all stakeholders while making a positive impact on the
                world.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}