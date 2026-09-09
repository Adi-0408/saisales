import { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out at 4.0 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 4000);

    // Completely remove splash screen at 4.6 seconds
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Soft Ambient Light Glows */}
      <div className="absolute w-[500px] h-[500px] bg-blue-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] bg-indigo-100/60 rounded-full blur-3xl -bottom-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* 1. Logo (Comes First) */}
        <div className="relative mb-8 group animate-logo-in">
          <div className="animate-float">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 rounded-3xl blur-xl opacity-35 animate-pulse group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-2.5 bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-blue-500/15 overflow-hidden">
                <img
                  src="/logo.jpeg"
                  alt="Sai Sales Logo"
                  className="h-28 md:h-36 w-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Text (Comes Slower & Staggered After Logo) */}
        <div className="flex flex-col items-center">
          <div className="animate-title-in">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 animate-float">
              Sai Sales
            </h1>
          </div>
          <div className="animate-tagline-in">
            <p className="text-sm md:text-base text-slate-500 font-medium tracking-wide max-w-md animate-float-slow">
              Electronics • Mobiles • Daikin AC Distributor
            </p>
          </div>
        </div>

        {/* 3. Vertical Equalizer / Sound Wave Loading Animation */}
        <div className="mt-8 flex items-center justify-center gap-1.5 h-16 animate-bars-in">
          <span className="w-1.5 h-7 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.5)] animate-sound-wave-1"></span>
          <span className="w-1.5 h-14 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.65)] animate-sound-wave-2"></span>
          <span className="w-1.5 h-11 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_9px_rgba(37,99,235,0.55)] animate-sound-wave-3"></span>
          <span className="w-1.5 h-16 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_14px_rgba(37,99,235,0.75)] animate-sound-wave-4"></span>
          <span className="w-1.5 h-12 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)] animate-sound-wave-5"></span>
          <span className="w-1.5 h-9 bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.5)] animate-sound-wave-6"></span>
        </div>

      </div>
    </div>
  );
}
