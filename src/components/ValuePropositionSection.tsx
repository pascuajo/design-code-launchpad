import { AnimateOnScroll, AnimateChildren } from './AnimateOnScroll';

export function ValuePropositionSection() {
  return (
    <section className="w-full bg-white py-32 px-4" id="value-proposition">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            I Believe in <span className="text-yellow-500">Purpose</span> AND{' '}
            <span className="text-yellow-500">Profit</span>
          </h2>
        </AnimateOnScroll>

        <AnimateChildren staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">
              How I Can Help {' '}
              <span className="bg-yellow-300 px-1">Decision-Makers</span> Get Results
            </h3>
            <p className="text-gray-600 text-lg">
              Strategic guidance for executives and leaders facing complex
              challenges who need clarity and actionable solutions.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">
              Creating {' '}
              <span className="bg-yellow-300 px-1"> Purpose-Driven</span> Products People Actually Want
            </h3>
            <p className="text-gray-600 text-lg">
              Helping teams develop products that solve real problems while
              delivering meaningful impact and business results.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">
              <span className="bg-yellow-300 px-1"> Building Teams </span> That Deliver Exceptional Results
            </h3>
            <p className="text-gray-600 text-lg">
              Cultivating high-performing teams with the right culture,
              processes and leadership to consistently execute.
            </p>
          </div>
        </AnimateChildren>
      </div>
    </section>
  );
}