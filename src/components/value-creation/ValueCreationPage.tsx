import { ValueStick } from './ValueStick';

export function ValueCreationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Value Creation Framework
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how value is created and distributed across the ecosystem is fundamental to building successful products and sustainable businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Value Stick Model
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Value Stick is a powerful framework for understanding value creation and capture in any business ecosystem. It helps visualize how value flows between customers, companies, and suppliers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Customer Value</h4>
                      <p className="text-sm">The difference between what customers are willing to pay (WTP) and the actual price they pay.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Company Margin</h4>
                      <p className="text-sm">The difference between the price received and the cost paid to suppliers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Supplier Value</h4>
                      <p className="text-sm">The difference between what suppliers receive and their willingness to sell (WTS).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Applications
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Product Strategy</h4>
                  <p className="text-sm">Identify opportunities to increase customer willingness to pay through better features and positioning.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Pricing Strategy</h4>
                  <p className="text-sm">Optimize pricing to maximize value capture while maintaining competitive advantage.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Partnership Strategy</h4>
                  <p className="text-sm">Design supplier relationships that create win-win value distribution scenarios.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ValueStick />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use This Model
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Map Current State</h4>
              <p className="text-gray-600 text-sm">Start by understanding your current value distribution across all stakeholders.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Identify Opportunities</h4>
              <p className="text-gray-600 text-sm">Look for ways to expand the total value pie or redistribute value more effectively.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Test & Iterate</h4>
              <p className="text-gray-600 text-sm">Use the interactive model to test different scenarios and their impact on all stakeholders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}