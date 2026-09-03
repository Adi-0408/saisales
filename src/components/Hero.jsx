import { useState, useEffect } from 'react';

const showrooms = [
  {
    id: 'sangli',
    city: 'Sangli',
    tag: 'Head Office',
    name: 'Sangli Head Office & Showroom',
    location: 'Below Rajratna Lodging, Station Chowk, Sangli 416416',
    src: '/sangli/sangli-1.jpg',
    phone: '8370818181',
    mapLink: 'https://maps.google.com/?q=Sai+Sales+Below+Rajratna+Lodging+Kesari+Galli+Behind+Hotel+Vihar+Station+Chowk+Sangli+416416'
  },
  {
    id: 'tasgaon',
    city: 'Tasgaon',
    tag: 'Est. 2009',
    name: 'Tasgaon Showroom',
    location: 'Main Road, Tasgaon, Sangli District',
    src: '/tasgaon/WhatsApp Image 2026-07-02 at 13.16.07 (1).jpeg',
    phone: '8370818181',
    mapLink: 'https://maps.app.goo.gl/1bv4LVZh4N4QwccT6?g_st=ac'
  },
  {
    id: 'ishwarpur',
    city: 'Ishwarpur',
    tag: 'Islampur City',
    name: 'Ishwarpur Showroom',
    location: 'Islampur City (Ishwarpur), Sangli District',
    src: '/Ishwarpur/WhatsApp Image 2026-07-02 at 13.17.31.jpeg',
    phone: '8370818181',
    mapLink: 'https://maps.app.goo.gl/421gTwVx8ebpapeFA?g_st=ac'
  },
  {
    id: 'jath',
    city: 'Jath',
    tag: 'Main Market',
    name: 'Jath Showroom',
    location: 'Main Market Area, Jath, Sangli District',
    src: '/jath/WhatsApp Image 2026-07-02 at 13.17.05.jpeg',
    phone: '8370818181',
    mapLink: 'https://maps.app.goo.gl/ethZmLNGGF3NDgP4A?g_st=ac'
  }
];

const highlights = [
  { icon: '❄️', title: 'Official Daikin Hub', desc: 'Authorized AC Distributor in Sangli District' },
  { icon: '📱', title: '100% Genuine Stock', desc: 'Direct Brand Billing & Sealed Warranties' },
  { icon: '💳', title: '0% Downpayment EMI', desc: 'Bajaj Finserv, HDFC & TVS Instant Approval' },
  { icon: '🏢', title: '4 Flagship Stores', desc: 'Sangli • Tasgaon • Ishwarpur • Jath' }
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isOpen, setIsOpen] = useState(() => {
    const hours = new Date().getHours();
    return hours >= 10 && hours < 21;
  });

  useEffect(() => {
    const checkStatus = () => {
      const hours = new Date().getHours();
      setIsOpen(hours >= 10 && hours < 21);
    };
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showrooms.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeStore = showrooms[activeIdx];

  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-16 overflow-hidden bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      
      {/* Subtle Radial Mesh Lighting Background */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-14">
          
          {/* Left Column: Typography & Segmented Location Control (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Softened Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300 mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                }`}></span>
              </span>
              <span className="tracking-wide text-slate-300">
                Official Daikin AC Hub • Mobiles • Electronics
              </span>
            </div>

            {/* Crisp Geometric Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white">
              Sangli District's <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                Premier Electronics & Daikin Hub
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 font-normal leading-relaxed">
              Welcome to <strong className="font-semibold text-white">Sai Sales</strong>. Serving 25,000+ families with 100% genuine electronics, flagship smartphones, and certified Daikin Inverter AC distribution across 4 locations in Sangli District.
            </p>

            {/* Unified Segmented Location Selector Tabs */}
            <div className="w-full max-w-xl mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Featured Showroom Location:
              </span>
              
              <div className="bg-slate-900/70 border border-white/10 p-1 sm:p-1.5 rounded-2xl grid grid-cols-4 gap-1 sm:gap-1.5 backdrop-blur-md shadow-inner">
                {showrooms.map((store, index) => {
                  const isSelected = activeIdx === index;
                  return (
                    <button
                      key={store.id}
                      type="button"
                      onClick={() => {
                        setActiveIdx(index);
                        setIsAutoPlaying(false);
                      }}
                      title={store.city}
                      className={`w-full py-2 px-1 sm:px-3.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 text-center touch-manipulation select-none truncate ${
                        isSelected
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 ring-1 ring-blue-400/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {store.city}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clean Action CTA Row */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <a
                href="#stores"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all text-sm"
              >
                <span>📍 Explore 4 Showrooms</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 px-8 rounded-xl border border-white/15 backdrop-blur-md hover:-translate-y-0.5 transition-all text-sm"
              >
                <span>🤝 Franchise Enquiry</span>
              </a>
            </div>

          </div>

          {/* Right Column: Elevated Storefront Media Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Radial Backdrop Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/25 rounded-[3rem] blur-2xl opacity-70 pointer-events-none"></div>

            {/* Storefront Image Container with Enhanced Glow & Depth */}
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/15 bg-slate-900 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.3)] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
              
              {/* Showroom Photos with Smooth Transition & Warmth Treatment */}
              {showrooms.map((store, index) => (
                <div
                  key={store.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === activeIdx
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                >
                  <img
                    src={store.src}
                    alt={store.name}
                    className="w-full h-full object-cover contrast-[1.06] brightness-[1.02] saturate-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Floating Top Header Badges with Refined Backdrop Blur */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 backdrop-blur-md bg-black/45 border border-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}></span>
                  </span>
                  <span>{activeStore.city}</span>
                </div>

                <div className="backdrop-blur-md bg-black/45 border border-white/15 text-white/90 text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1">
                  <span className="text-amber-400">★</span>
                  <span>4.8 Google Rated</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Feature Trust Pillars Bar */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:bg-white/10 transition-colors flex items-start gap-3.5"
            >
              <span className="text-2xl p-2 bg-white/10 rounded-xl shrink-0">{item.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-slate-400 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
