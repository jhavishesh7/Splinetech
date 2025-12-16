import { TrendingUp, Target, Award, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '2.5B+', label: 'People with poor posture globally' },
  { icon: TrendingUp, value: '78%', label: 'Gen Z screen time increase' },
  { icon: Target, value: '$4.2B', label: 'Posture correction market by 2027' },
  { icon: Award, value: '#1', label: 'Smart wearable innovation' }
];

const usps = [
  {
    title: 'Real-Time Correction',
    description: 'Unlike traditional braces, SpineTech provides instant feedback through gentle vibrations'
  },
  {
    title: 'Data-Driven Insights',
    description: 'Track your posture patterns and receive personalized recommendations'
  },
  {
    title: 'Invisible & Comfortable',
    description: 'Wear it under any outfit without compromising style or comfort'
  },
  {
    title: 'Affordable Technology',
    description: 'Premium features at a fraction of the cost of traditional treatments'
  }
];

export default function MarketUSP() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Market Opportunity
          </h2>
          <p className="text-lg text-gray-400">
            Addressing a global health crisis affecting billions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-all duration-300 slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center bounce-in">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Competitive Edge
          </h3>
          <p className="text-lg text-gray-400">
            What makes SpineTech different
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-500 hover:bg-gray-800 transition-all duration-300 slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h4 className="text-xl font-bold text-white mb-2">
                {usp.title}
              </h4>
              <p className="text-gray-400">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
