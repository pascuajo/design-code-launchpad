import React from 'react';

export function ImageLibrary() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/strategy.jpg" 
              alt="Strategy Consulting" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Strategy Consulting</h3>
              <p className="text-gray-600">Strategic guidance for complex business challenges and transformation.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/app_design.jpg" 
              alt="Product Development" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Product Development</h3>
              <p className="text-gray-600">Building products that solve real problems and drive meaningful impact.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/digtal_transformation.jpg" 
              alt="Digital Transformation" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-gray-600">Modernizing operations and processes for the digital age.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}