import Hero from './components/Hero';
import Model3D from './components/Model3D';
import Features from './components/Features';
import MarketUSP from './components/MarketUSP';
import Technology from './components/Technology';
import MVPEconomics from './components/MVPEconomics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Hero />
      <Model3D />
      <Features />
      <MarketUSP />
      <Technology />
      <MVPEconomics />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
