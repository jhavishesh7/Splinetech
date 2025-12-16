import { ArrowRight, Zap, Smartphone, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-8 sm:py-12 md:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icon absolute top-10 left-4 sm:top-20 sm:left-10 opacity-20">
          <Activity className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-cyan-400" />
        </div>
        <div className="floating-icon-delayed absolute top-20 right-4 sm:top-40 sm:right-20 opacity-20">
          <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400" />
        </div>
        <div className="floating-icon absolute bottom-20 left-1/4 opacity-20 hidden xs:block">
          <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-cyan-400" />
        </div>
        <div className="floating-icon-delayed absolute bottom-10 right-1/3 opacity-20 hidden sm:block">
          <Activity className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="hero-content">
          <div className="mb-4 sm:mb-6 inline-block hero-card fade-in-card" style={{ animationDelay: '0.2s' }}>
            <h1 className="crazy-text text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2 px-2">
              SpineTech
            </h1>
            <div className="h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mx-auto max-w-xs sm:max-w-md"></div>
          </div>

          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 hero-card fade-in-card leading-tight sm:leading-normal" style={{ animationDelay: '0.4s' }}>
            Revolutionizing Posture for Gen Z
          </h2>

          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 md:mb-8 px-2 hero-card fade-in-card" style={{ animationDelay: '0.6s' }}>
            Smart Posture Corrector Belt
          </p>

          <p className="text-sm xs:text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-3 hero-card fade-in-card leading-relaxed" style={{ animationDelay: '0.8s' }}>
            Real-time posture monitoring with intelligent vibration alerts.
            Stay healthy, stay connected, stay confident.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-3 hero-card fade-in-card" style={{ animationDelay: '1s' }}>
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white text-sm sm:text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Buy Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 text-sm sm:text-base font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 active:scale-95">
              See 3D Model
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hero-card fade-in-card" style={{ animationDelay: '1.2s' }}>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
