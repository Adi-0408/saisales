import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stores from './components/Stores';
import TrustProof from './components/TrustProof';
import AboutUs from './components/AboutUs';
import EnquiryForm from './components/EnquiryForm';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-blue-600 selection:text-white relative">
      {/* 3-4 Second Logo Splash Launch Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <Navbar />
      <Hero />
      <Stores />
      <TrustProof />
      <AboutUs />
      <EnquiryForm />
      

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="Sai Sales Logo" 
                className="h-10 w-auto object-contain rounded-lg" 
              />
              <div>
                <span className="font-black text-lg text-white tracking-tight block">
                  Sai Sales
                </span>
                <span className="text-xs text-slate-400">
                  Sangli • Tasgaon • Ishwarpur • Jath
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-300">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#stores" className="hover:text-blue-400 transition-colors">Locations</a>
              <a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Franchise</a>
            </div>

            <div>
              <a href="tel:8370818181" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-4 rounded-xl transition-all text-xs">
                <span>📞</span> 8370818181
              </a>
            </div>
          </div>

          <div className="pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Sai Sales. All rights reserved.</p>
            <p>Electronics • Mobiles • Daikin AC Distribution</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
