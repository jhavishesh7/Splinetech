import { DollarSign, TrendingUp, Package } from 'lucide-react';

const costBreakdown = [
  { label: 'IMU Sensor', cost: 500, color: 'from-cyan-500 to-cyan-600' },
  { label: 'Bluetooth Module', cost: 300, color: 'from-green-500 to-green-600' },
  { label: 'Vibration Motor', cost: 200, color: 'from-blue-500 to-blue-600' },
  { label: 'Battery & PCB', cost: 400, color: 'from-teal-500 to-teal-600' },
  { label: 'Belt & Fabric', cost: 600, color: 'from-emerald-500 to-emerald-600' }
];

const totalCost = costBreakdown.reduce((sum, item) => sum + item.cost, 0);

const marketData = [
  { label: 'Nepal TAM', value: 200000, unit: 'users' },
  { label: 'Market Size', value: 600, unit: 'M NPR' },
  { label: 'Expected Margin', value: 50, unit: '%' },
  { label: 'Pilot Target', value: 100, unit: 'units' }
];

export default function MVPEconomics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            MVP & Economics
          </h2>
          <p className="text-lg text-gray-400">
            Strategic development and market positioning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Production Cost Breakdown</h3>
            </div>

            <div className="space-y-4 mb-6">
              {costBreakdown.map((item, index) => {
                const percentage = (item.cost / totalCost) * 100;
                return (
                  <div key={index} className="slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-white font-semibold">NPR {item.cost}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 hover:scale-x-105`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-300">Total Production Cost</span>
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  NPR {totalCost}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Market Potential</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {marketData.map((data, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-green-500 transition-all duration-300 bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-1">
                      {data.value.toLocaleString()}
                      {data.unit === '%' && '%'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {data.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Pricing Strategy</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Production Cost</span>
                  <span className="text-white font-semibold">NPR 2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Retail Price</span>
                  <span className="text-green-400 font-semibold">NPR 4,000</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                  <span className="text-gray-300 font-semibold">Profit Margin</span>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                    50%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
