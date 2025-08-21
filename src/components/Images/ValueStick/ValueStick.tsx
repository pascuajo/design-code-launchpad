import React from 'react';

interface ValueStickProps {
  'data-id'?: string;
}

export function ValueStick({ 'data-id': dataId }: ValueStickProps) {
  return (
    <section className="w-full bg-yellow-100 py-16 px-4" data-id={dataId}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Let's work together to create solutions that drive real impact and sustainable growth.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}