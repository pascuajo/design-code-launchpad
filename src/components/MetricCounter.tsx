import { AnimateOnScroll } from './AnimateOnScroll';
import { AnimatedCounter } from './AnimatedCounter';

export function MetricCounter() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
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