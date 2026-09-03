import { useState, useEffect } from 'react';

const showrooms = [
  {
    id: 'sangli',
    city: 'Sangli',
    subtitle: 'Head Office & Showroom',
    image: '/sangli/sangli-1.jpg',
    address: 'Sai Sales, Below Rajratna Lodging, Kesari Galli, Behind Hotel Vihar, Station Chowk, Sangli 416416',
    phone: '8370818181',
    mapLink: 'https://maps.google.com/?q=Sai+Sales+Below+Rajratna+Lodging+Kesari+Galli+Behind+Hotel+Vihar+Station+Chowk+Sangli+416416',
    timing: '10:00 AM – 9:00 PM (All Days)'
  },
  {
    id: 'tasgaon',
    city: 'Tasgaon',
    subtitle: 'Flagship Store',
    image: '/tasgaon/WhatsApp Image 2026-07-02 at 13.16.07 (1).jpeg',
    address: 'Sai Sales, Main Road, Tasgaon, Sangli District, Maharashtra',
    phone: '8370818181',
    mapLink: 'https://maps.app.goo.gl/1bv4LVZh4N4QwccT6?g_st=ac',
    timing: '10:00 AM – 9:00 PM (All Days)'
  },
  {
    id: 'ishwarpur',
    city: 'Ishwarpur',
    subtitle: 'Islampur Showroom',
    image: '/Ishwarpur/WhatsApp Image 2026-07-02 at 13.17.31.jpeg',
    address: 'Sai Sales, Islampur City (Ishwarpur), Sangli District, Maharashtra',
    phone: '8370818181',
    mapLink: 'https://maps.app.goo.gl/421gTwVx8ebpapeFA?g_st=ac',
    timing: '10:00 AM – 9:00 PM (All Days)'
  },
  {
    id: 'jath',
    city: 'Jath',
    subtitle: 'Main Market Showroom',
    image: '/jath/WhatsApp Image 2026-07-02 at 13.17.05.jpeg',
    address: 'Sai Sales, Main Market Area, Jath, Sangli District, Maharashtra',
    phone: '8370818181',
    mapLink: 'https://maps.app.goo.gl/ethZmLNGGF3NDgP4A?g_st=ac',
    timing: '10:00 AM – 9:00 PM (All Days)'
  }
];

export default function Stores() {
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

  return (
    <section id="stores" className="py-24 px-6 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase mb-4 border border-blue-200/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
            Sangli District Network
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our 4 Showroom Locations
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
            Visit your nearest Sai Sales showroom across Sangli District for live product experiences, Daikin AC demos, and best prices.
          </p>
        </div>

        {/* 4 Showroom Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showrooms.map((store) => (
            <div 
              key={store.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-500 flex flex-col group hover:-translate-y-2"
            >
              {/* Showroom Image with Dynamic Beacon (Red when Closed, Green when Open) */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={`${store.city} Showroom`} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                {/* City Name Only Badge with Dynamic Red/Green Status Animation */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md text-white text-xs font-black tracking-wide px-3 py-1.5 rounded-xl border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                      isOpen ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}></span>
                  </span>
                  <span>{store.city}</span>
                </div>
              </div>

              {/* Showroom Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {store.city}
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold">
                    {store.subtitle}
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 leading-relaxed flex-grow mb-4">
                  {store.address}
                </p>

                <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span className="text-slate-600">{store.timing}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isOpen 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {isOpen ? 'Open Now' : 'Closed'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <span>📞</span>
                    <a href={`tel:${store.phone}`} className="text-blue-600 hover:underline">
                      {store.phone}
                    </a>
                  </div>
                </div>

                {/* Google Maps Link */}
                <a 
                  href={store.mapLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm group-hover:shadow-md hover:gap-3"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Get Directions</span>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
