import { AnimateOnScroll } from './AnimateOnScroll';
import { AnimatedCounter } from './AnimatedCounter';

export function MetricCounter() {
  return (
    <section className="w-full bg-gray-800 py-20 px-4 relative overflow-hidden">
      {/* Train station board grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: '36px 52px', // Card width (32px) + spacing (4px) = 36px, Card height (48px) + spacing (4px) = 52px
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-transparent to-gray-800/50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedCounter 
              targetValue={50} 
              suffix="+" 
              label="Products Launched" 
              bgColor="bg-purple-50"
            />
            <AnimatedCounter 
              targetValue={3} 
              prefix="$" 
              suffix="Bn+" 
              label="Value Created" 
              bgColor="bg-green-50"
            />
            <AnimatedCounter 
              targetValue={1000} 
              suffix="+" 
              label="Staff Managed" 
              bgColor="bg-blue-50"
            />
            <AnimatedCounter 
              targetValue={1} 
              suffix="Mn+" 
              label="Customers Served" 
              bgColor="bg-orange-50"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}