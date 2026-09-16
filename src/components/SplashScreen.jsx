import { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out at 3.8 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3800);

    // Completely unmount splash screen at 4.5 seconds
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden transition-all duration-700 ease-out select-none ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. ARCHITECTURAL VECTOR BLUEPRINT GRID BACKDROP */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)`,
            backgroundSize: `40px 40px, 80px 80px, 80px 80px`
          }}
        />
      </div>

      {/* 2. MATHEMATICAL ORBITAL RADAR / COMPASS RINGS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none">
        {/* Outer Fine Blueprint Ring */}
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-orbital-slow">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"></span>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
        </div>
        
        {/* Concentric Dashed Radar Ring */}
        <div className="absolute inset-12 rounded-full border border-dashed border-cyan-400/15 animate-orbital-reverse" />

        {/* Inner Precision Target Ring */}
        <div className="absolute inset-28 rounded-full border border-indigo-500/15" />
      </div>

      {/* 3. VOLUMETRIC STUDIO CORE LIGHTING */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[110px] pointer-events-none -top-20 -right-20"></div>

      {/* 4. ARCHITECTURAL CORNER TELEMETRY BRACKETS (Swiss Corporate Design) */}
      <div className="absolute inset-6 sm:inset-10 pointer-events-none flex flex-col justify-between text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-500">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">┌</span>
            <span className="uppercase">SPEC // SANGLI DIST. 2009-2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="uppercase">COORD: 16.85°N 74.58°E</span>
            <span className="text-cyan-400 font-bold">┐</span>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">└</span>
            <span className="uppercase">DAIKIN AUTHORIZED HUB • 4 SHOWROOMS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="uppercase">ENGINEERED INTEGRITY // SAI SALES</span>
            <span className="text-cyan-400 font-bold">┘</span>
          </div>
        </div>
      </div>

      {/* 5. MAIN CHOREOGRAPHED STAGE */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">

        {/* A. APPLE GLASS CHAMBER SPECULAR LOGO */}
        <div className="relative mb-7 animate-apple-elevation group">
          <div className="animate-float">
            
            {/* Specular Light Flare Glow behind Chamfer */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/35 via-cyan-400/25 to-indigo-600/35 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-90 transition duration-700"></div>

            {/* Precision Chamfered Glass Chamber */}
            <div className="relative p-3.5 bg-slate-900/70 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(37,99,235,0.25)] overflow-hidden">
              
              {/* Apple Angled Specular Light Glare Sweep */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="w-[90px] h-[350px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-specular-shimmer -top-24"></div>
              </div>

              {/* 4 Corner Blueprint Anchor Crosshairs */}
              <span className="absolute top-1.5 left-1.5 text-[9px] text-cyan-400/70 font-mono leading-none">+</span>
              <span className="absolute top-1.5 right-1.5 text-[9px] text-cyan-400/70 font-mono leading-none">+</span>
              <span className="absolute bottom-1.5 left-1.5 text-[9px] text-cyan-400/70 font-mono leading-none">+</span>
              <span className="absolute bottom-1.5 right-1.5 text-[9px] text-cyan-400/70 font-mono leading-none">+</span>

              {/* High-Resolution Brandmark */}
              <div className="relative bg-white rounded-2xl p-1.5 shadow-inner">
                <img
                  src="/logo.jpeg"
                  alt="Sai Sales Brandmark"
                  className="h-24 sm:h-28 w-auto object-contain rounded-xl"
                />
              </div>

            </div>

          </div>
        </div>

        {/* B. SWISS TYPOGRAPHY TITLING (High-Kerning Mathematical Precision) */}
        <div className="flex flex-col items-center mb-6">
          
          {/* Primary Brandmark */}
          <div className="animate-swiss-title mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-[0.35em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SAI SALES
            </h1>
          </div>

          {/* Laser Expansion Precision Divider */}
          <div className="w-48 sm:w-64 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-laser-expand mb-3 shadow-[0_0_12px_#22d3ee]"></div>

          {/* Secondary Swiss Monospaced Descriptor */}
          <div className="animate-swiss-sub">
            <p className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.22em] text-slate-300 uppercase">
              DISTRICT ELECTRONICS • DAIKIN DISTRIBUTION
            </p>
          </div>

          {/* System Telemetry Live Beacon Badge */}
          <div className="mt-3.5 animate-status-badge">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/35 backdrop-blur-md text-[9px] font-mono tracking-wider text-cyan-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>4 SHOWROOM HUBS • ONLINE</span>
            </div>
          </div>

        </div>

        {/* C. 8-BAR MATHEMATICAL HARMONIC SOUNDWAVE SPECTRUM */}
        <div className="flex items-center justify-center gap-1.5 h-10 animate-harmonic-bars">
          <span className="w-1 h-5 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_8px_#38bdf8] animate-hw-1"></span>
          <span className="w-1 h-8 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_10px_#38bdf8] animate-hw-2"></span>
          <span className="w-1 h-6 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_8px_#38bdf8] animate-hw-3"></span>
          <span className="w-1 h-10 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_12px_#38bdf8] animate-hw-4"></span>
          <span className="w-1 h-7 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_9px_#38bdf8] animate-hw-5"></span>
          <span className="w-1 h-9 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_11px_#38bdf8] animate-hw-6"></span>
          <span className="w-1 h-5 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_8px_#38bdf8] animate-hw-7"></span>
          <span className="w-1 h-7 bg-gradient-to-t from-blue-600 via-cyan-400 to-white rounded-full shadow-[0_0_9px_#38bdf8] animate-hw-8"></span>
        </div>

      </div>
    </div>
  );
}
