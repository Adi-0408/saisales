import { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out at 2.4 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2400);

    // Completely remove splash screen at 3.0 seconds
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-600 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Soft Ambient Light Glows */}
      <div className="absolute w-[500px] h-[500px] bg-blue-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] bg-indigo-100/60 rounded-full blur-3xl -bottom-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Logo Container with Soft Shadow & Elevation */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 rounded-3xl blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative p-2.5 bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-blue-500/10 overflow-hidden">
            <img
              src="/logo.jpeg"
              alt="Sai Sales Logo"
              className="h-28 md:h-36 w-auto object-contain rounded-2xl animate-scale-in"
            />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Sai Sales
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium tracking-wide max-w-md">
          Electronics • Mobiles • Daikin AC Distributor
        </p>

        {/* Dotted Circle Loading Spinner */}
        <div className="mt-8 relative flex items-center justify-center">
          {/* Outer Rotating Dotted Circle */}
          <svg className="w-11 h-11 animate-spin text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="1 9"
            />
          </svg>

          {/* Central Pulsing Glowing Core Dot */}
          <div className="absolute w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-75"></div>
          <div className="absolute w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb]"></div>
        </div>

      </div>
    </div>
  );
}
