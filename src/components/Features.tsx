import { Vibrate, Cpu, Smartphone, Heart } from 'lucide-react';

const features = [
  {
    icon: Vibrate,
    title: 'Real-Time Alerts',
    description: 'Gentle vibration feedback when poor posture is detected',
    details: 'Advanced haptic feedback system provides instant correction without distraction'
  },
  {
    icon: Cpu,
    title: 'IMU Sensors',
    description: 'Precision motion tracking with 6-axis sensors',
    details: 'High-accuracy gyroscope and accelerometer monitor your spine angle in real-time'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Integration',
    description: 'Track progress and customize settings via Bluetooth',
    details: 'View posture analytics, set goals, and receive personalized insights'
  },
  {
    icon: Heart,
    title: 'Comfortable Design',
    description: 'Breathable, adjustable fit for all-day wear',
    details: 'Premium materials with moisture-wicking fabric and ergonomic construction'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Revolutionary Features
          </h2>
          <p className="text-lg text-gray-400">
            Cutting-edge technology meets everyday comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {feature.description}
              </p>

              <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                <p className="text-sm text-cyan-400 pt-2 border-t border-gray-700">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
