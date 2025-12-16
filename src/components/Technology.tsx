import { Cpu, Radio, Battery, Layers } from 'lucide-react';
import { useState } from 'react';

const techSpecs = [
  {
    icon: Cpu,
    title: 'IMU Sensor',
    description: '6-axis gyroscope + accelerometer',
    details: 'Tracks spine angle with 0.1° precision. Samples at 100Hz for real-time monitoring.'
  },
  {
    icon: Radio,
    title: 'Bluetooth 5.0',
    description: 'Low-energy wireless connectivity',
    details: 'Seamless pairing with iOS and Android. Range up to 10 meters with minimal power consumption.'
  },
  {
    icon: Battery,
    title: 'Vibration Motor',
    description: 'Haptic feedback system',
    details: 'Customizable intensity levels. Silent operation with 3 vibration patterns.'
  },
  {
    icon: Layers,
    title: 'Smart Fabric',
    description: 'Breathable, adjustable layers',
    details: 'Moisture-wicking inner layer, elastic support band, and durable outer shell.'
  }
];

export default function Technology() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Advanced Technology
          </h2>
          <p className="text-lg text-gray-400">
            Engineering excellence in every component
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techSpecs.map((spec, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-green-500 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <spec.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-gray-400 mb-3">
                    {spec.description}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-3 border-t border-gray-700">
                      <p className="text-sm text-green-400">
                        {spec.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Belt Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-lg mb-4 flex items-center justify-center border border-cyan-500/30">
                <Layers className="w-12 h-12 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Outer Layer</h4>
              <p className="text-sm text-gray-400">Durable, water-resistant fabric</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-b from-green-500/20 to-transparent rounded-lg mb-4 flex items-center justify-center border border-green-500/30">
                <Cpu className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Sensor Layer</h4>
              <p className="text-sm text-gray-400">IMU sensors + Bluetooth module</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-lg mb-4 flex items-center justify-center border border-cyan-500/30">
                <Battery className="w-12 h-12 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Inner Layer</h4>
              <p className="text-sm text-gray-400">Breathable, moisture-wicking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
