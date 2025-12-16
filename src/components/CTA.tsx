import { ShoppingCart, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-green-600 p-1">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 sm:p-16">
            <div className="text-center fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Posture?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the SpineTech revolution. Pre-order now and be among the first to experience the future of posture correction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 pulse-glow">
                  <span className="relative z-10 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Pre-order Now - NPR 4,000
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
                    30 Days
                  </div>
                  <div className="text-sm text-gray-400">Money-back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
                    Free Shipping
                  </div>
                  <div className="text-sm text-gray-400">Across Nepal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
                    1 Year
                  </div>
                  <div className="text-sm text-gray-400">Warranty Included</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
