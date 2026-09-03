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
      
      {/* Floating Instant Store Helpline Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="tel:8370818181"
          className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 sm:px-5 rounded-full shadow-2xl shadow-blue-600/30 backdrop-blur-md border border-blue-400/30 transition-all duration-300 hover:scale-105 group"
          aria-label="Call Sai Sales Helpline"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm tracking-wide">
            📞 <span className="hidden sm:inline">Store Helpline:</span> 8370818181
          </span>
        </a>
      </div>

      {/* Footer with Location Cards */}
      <footer className="bg-slate-100 text-slate-700 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-14">
            <div className="text-center md:text-left mb-8">
              <span className="text-blue-600 text-xs font-black uppercase tracking-widest block mb-1">
                District Network
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Our 4 Showroom Locations</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* Sangli HQ */}
              <div className="bg-white p-6 rounded-2xl border-2 border-blue-500/40 ring-4 ring-blue-50 shadow-lg shadow-blue-900/5 flex flex-col relative hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-50 text-blue-700 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border border-blue-200">
                    Head Office
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 text-lg">🏢</span> Sangli Showroom
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed flex-grow">
                  Below Rajratna Lodging, Kesari Galli, Behind Hotel Vihar, Station Chowk, Sangli 416416.<br/>
                  <span className="text-slate-800 font-semibold mt-2 inline-block">📞 <a href="tel:8370818181" className="hover:text-blue-600 transition-colors">8370818181</a></span>
                </p>
                <a href="https://maps.google.com/?q=Sai+Sales+Below+Rajratna+Lodging+Kesari+Galli+Behind+Hotel+Vihar+Station+Chowk+Sangli+416416" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 border border-blue-200 shadow-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  View on Google Maps
                </a>
              </div>

              {/* Tasgaon */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-900/5 flex flex-col hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 text-lg">📍</span> Tasgaon Branch
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed flex-grow">
                  Sai Sales,<br/>
                  Main Road, Tasgaon,<br/>
                  Sangli District, Maharashtra.<br/>
                  <span className="text-slate-800 font-semibold mt-2 inline-block">📞 <a href="tel:8370818181" className="hover:text-blue-600 transition-colors">8370818181</a></span>
                </p>
                <a href="https://maps.app.goo.gl/1bv4LVZh4N4QwccT6?g_st=ac" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-200 shadow-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  View on Google Maps
                </a>
              </div>

              {/* Ishwarpur */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-900/5 flex flex-col hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 text-lg">📍</span> Ishwarpur Branch
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed flex-grow">
                  Sai Sales,<br/>
                  Islampur City (Ishwarpur),<br/>
                  Sangli District, Maharashtra.<br/>
                  <span className="text-slate-800 font-semibold mt-2 inline-block">📞 <a href="tel:8370818181" className="hover:text-blue-600 transition-colors">8370818181</a></span>
                </p>
                <a href="https://maps.app.goo.gl/421gTwVx8ebpapeFA?g_st=ac" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-200 shadow-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  View on Google Maps
                </a>
              </div>

              {/* Jath */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-900/5 flex flex-col hover:-translate-y-1 hover:border-slate-300 transition-all duration-300">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 text-lg">📍</span> Jath Branch
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed flex-grow">
                  Sai Sales,<br/>
                  Main Market Area, Jath,<br/>
                  Sangli District, Maharashtra.<br/>
                  <span className="text-slate-800 font-semibold mt-2 inline-block">📞 <a href="tel:8370818181" className="hover:text-blue-600 transition-colors">8370818181</a></span>
                </p>
                <a href="https://maps.app.goo.gl/ethZmLNGGF3NDgP4A?g_st=ac" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-200 shadow-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  View on Google Maps
                </a>
              </div>

            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Sai Sales. All rights reserved.</p>
            <p className="text-slate-500">Electronics • Mobiles • Daikin AC Distribution</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
