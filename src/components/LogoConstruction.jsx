import React, { useState, useEffect } from 'react';

export default function LogoConstruction({ onComplete }) {
  const [phase, setPhase] = useState('grid'); // 'grid' | 'vectors' | 'solidify' | 'complete'
  const [telemetry, setTelemetry] = useState('INITIALIZING CAD GRID...');

  useEffect(() => {
    // Phase 1: Grid & Compass circles (0ms - 800ms)
    const t1 = setTimeout(() => {
      setPhase('vectors');
      setTelemetry('TRACING VECTOR PATHS & BEZIER NODES...');
    }, 800);

    // Phase 2: Solidification & Laser Scan (2400ms)
    const t2 = setTimeout(() => {
      setPhase('solidify');
      setTelemetry('CALIBRATING COLOR MESH & GEOMETRY...');
    }, 2400);

    // Phase 3: Final Brand Mark Locked (3400ms)
    const t3 = setTimeout(() => {
      setPhase('complete');
      setTelemetry('BRAND IDENTITY SYSTEM: 100% LOCKED');
      if (onComplete) onComplete();
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-square select-none flex items-center justify-center">
      
      {/* 1. Ambient Blueprint Glow */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-1000"></div>

      {/* 2. Technical Engineering HUD Telemetry Header */}
      <div className="absolute -top-7 left-0 right-0 flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-widest text-blue-600/80 px-2 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
          <span className="font-bold">CAD://SAI_SALES.VECTOR</span>
        </div>
        <div className="font-semibold">{telemetry}</div>
        <div className="hidden sm:block text-slate-400">500x500 ISO_DRAFT</div>
      </div>

      {/* 3. Main Construction Canvas (SVG Precision Engine) */}
      <div className="relative w-full h-full rounded-2xl bg-slate-950/2 border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-900/5 backdrop-blur-xs flex items-center justify-center">
        
        {/* Subtle Isometric Background Grid Lines */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            phase === 'complete' ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37, 99, 235, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37, 99, 235, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>

        {/* Master SVG Vector Blueprint Layer */}
        <svg 
          viewBox="0 0 500 500" 
          className="w-full h-full absolute inset-0 z-10 overflow-visible pointer-events-none"
        >
          <defs>
            {/* Blueprint Grid Pattern */}
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(37, 99, 235, 0.05)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="laserGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="redVector" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="blueVector" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>

          {/* ========================================================
              PHASE 1: TECHNICAL GRID, AXIS & COMPASS GUIDES
          ======================================================== */}
          <g className={`transition-opacity duration-700 ${phase === 'complete' ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Center Axis Crosshairs */}
            <line x1="250" y1="10" x2="250" y2="490" stroke="#3b82f6" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
            <line x1="10" y1="250" x2="490" y2="250" stroke="#3b82f6" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />

            {/* Corner Alignment Ticks */}
            <path d="M 15 25 L 15 15 L 25 15 M 485 25 L 485 15 L 475 15 M 15 475 L 15 485 L 25 485 M 485 475 L 485 485 L 475 485" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.6" />

            {/* Coordinate Labels */}
            <text x="25" y="30" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.6">P1 [0,0]</text>
            <text x="430" y="30" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.6">P2 [500,0]</text>
            <text x="25" y="475" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.6">P3 [0,500]</text>
            <text x="415" y="475" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.6">P4 [500,500]</text>

            {/* Precision Compass Construction Circles */}
            {/* 1. Orbit Arc Guide Circle */}
            <circle cx="255" cy="275" r="145" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5 5" opacity="0.45" className="animate-spin-slow origin-[255px_275px]" />
            <line x1="255" y1="275" x2="385" y2="210" stroke="#06b6d4" strokeWidth="0.75" opacity="0.5" />
            <text x="310" y="235" fill="#06b6d4" fontSize="8" fontFamily="monospace" opacity="0.8">R:145.0 DEG:38</text>

            {/* 2. Hexagon Badge Tangent Circle */}
            <circle cx="430" cy="240" r="32" fill="none" stroke="#ef4444" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
            <text x="408" y="200" fill="#ef4444" fontSize="7" fontFamily="monospace" opacity="0.8">DIA 64.0mm</text>

            {/* 3. Smartphone Corner Radius Circles */}
            <circle cx="162" cy="118" r="28" fill="none" stroke="#ef4444" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.4" />
            <circle cx="268" cy="118" r="28" fill="none" stroke="#ef4444" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.4" />

            {/* Caliper Dimension Guides */}
            {/* Top Phone Width Dimension: 160px */}
            <line x1="135" y1="70" x2="295" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
            <path d="M 135 66 L 135 74 M 295 66 L 295 74 M 135 70 L 142 67 M 135 70 L 142 73 M 295 70 L 288 67 M 295 70 L 288 73" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.8" />
            <text x="185" y="65" fill="#3b82f6" fontSize="8" fontFamily="monospace" fontWeight="bold">W: 160.00mm</text>

            {/* Baseline Guide for Devanagari Shirorekha */}
            <line x1="50" y1="216" x2="450" y2="216" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="8 4" opacity="0.6" />
            <text x="55" y="212" fill="#2563eb" fontSize="7" fontFamily="monospace" fontWeight="bold">ALIGN://SHIROREKHA_BASE_Y216</text>
          </g>

          {/* ========================================================
              PHASE 2: VECTOR PATH DRAWING (BEZIER CONTOURS)
          ======================================================== */}
          <g className={`transition-all duration-700 ${phase === 'grid' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            
            {/* 1. Outer Orbiting Cosmic Swoosh Line */}
            <path 
              d="M 175 190 C 235 145, 335 145, 360 205 C 375 240, 330 330, 200 365 C 100 380, 45 330, 52 270 C 58 215, 125 195, 175 190 Z" 
              fill="none" 
              stroke="#282A7C" 
              strokeWidth="2.5" 
              strokeDasharray="1200"
              strokeDashoffset={phase === 'grid' ? '1200' : '0'}
              className="transition-all duration-1000 ease-out"
            />
            {/* Swoosh Origin Hollow Ring */}
            <circle cx="170" cy="190" r="14" fill="none" stroke="#282A7C" strokeWidth="2.5" />

            {/* 2. Left Red Smartphone Body Contours */}
            <rect 
              x="135" 
              y="90" 
              width="160" 
              height="245" 
              rx="28" 
              fill="none" 
              stroke="#E31E24" 
              strokeWidth="2.5"
              strokeDasharray="900"
              strokeDashoffset={phase === 'grid' ? '900' : '0'}
              className="transition-all duration-1000 ease-out delay-150"
            />
            {/* Phone Screen Inner Boundary */}
            <rect x="148" y="138" width="134" height="190" rx="10" fill="none" stroke="#E31E24" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
            {/* Earpiece Slot */}
            <rect x="195" y="112" width="40" height="6" rx="3" fill="none" stroke="#E31E24" strokeWidth="1.5" />

            {/* 3. 4 Pixel Data Cubes (Left) */}
            <rect x="70" y="142" width="18" height="18" rx="3" fill={phase === 'solidify' ? '#282A7C' : 'none'} stroke="#282A7C" strokeWidth="2" />
            <rect x="96" y="138" width="22" height="22" rx="3" fill={phase === 'solidify' ? '#E31E24' : 'none'} stroke="#E31E24" strokeWidth="2" />
            <rect x="72" y="168" width="20" height="20" rx="3" fill={phase === 'solidify' ? '#E31E24' : 'none'} stroke="#E31E24" strokeWidth="2" />
            <rect x="104" y="172" width="24" height="24" rx="4" fill={phase === 'solidify' ? '#282A7C' : 'none'} stroke="#282A7C" strokeWidth="2" />

            {/* 4. Right Laptop Vector Outline */}
            <rect x="335" y="228" width="105" height="70" rx="6" fill="none" stroke="#282A7C" strokeWidth="2.5" strokeDasharray="400" strokeDashoffset={phase === 'grid' ? '400' : '0'} className="transition-all duration-1000 delay-300" />
            <path d="M 328 304 L 446 304 C 446 308, 442 314, 434 314 L 340 314 C 332 314, 328 308, 328 304 Z" fill="none" stroke="#282A7C" strokeWidth="2" />
            {/* Diagonal Repair Screwdriver */}
            <line x1="365" y1="255" x2="408" y2="280" stroke="#282A7C" strokeWidth="3" strokeLinecap="round" />

            {/* 5. Hexagonal Service Gear Badge */}
            <polygon points="430,215 455,228 455,255 430,268 405,255 405,228" fill="none" stroke="#E31E24" strokeWidth="2.5" strokeDasharray="200" strokeDashoffset={phase === 'grid' ? '200' : '0'} className="transition-all duration-1000 delay-400" />
            <circle cx="430" cy="241.5" r="7" fill="none" stroke="#E31E24" strokeWidth="2" strokeDasharray="3 3" />

            {/* 6. Central Devanagari Typography Geometry Tracing Lines */}
            {/* Shirorekha Top Bar */}
            <rect x="165" y="216" width="162" height="14" rx="2" fill="none" stroke="#E31E24" strokeWidth="2" />
            {/* Character 'Sa' Stem Vector */}
            <path d="M 180 230 L 180 340 L 235 340 L 235 320" fill="none" stroke="#E31E24" strokeWidth="2" strokeDasharray="300" strokeDashoffset={phase === 'grid' ? '300' : '0'} />
            {/* Character 'I' Stem Vector */}
            <path d="M 270 230 C 295 245, 315 265, 305 295 C 295 325, 275 335, 315 350" fill="none" stroke="#E31E24" strokeWidth="2" strokeDasharray="300" strokeDashoffset={phase === 'grid' ? '300' : '0'} />
            {/* Top Rafar Curve */}
            <path d="M 305 180 C 325 180, 320 215, 300 216" fill="none" stroke="#E31E24" strokeWidth="2" />
          </g>

          {/* ========================================================
              VECTOR ANCHOR NODES (BEZIER EDITING POINTS)
          ======================================================== */}
          <g className={`transition-opacity duration-500 ${phase === 'solidify' || phase === 'vectors' ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { x: 135, y: 90 }, { x: 295, y: 90 }, { x: 295, y: 335 }, { x: 135, y: 335 },
              { x: 170, y: 190 }, { x: 360, y: 205 }, { x: 52, y: 270 }, { x: 200, y: 365 },
              { x: 335, y: 228 }, { x: 440, y: 228 }, { x: 430, y: 215 }, { x: 455, y: 255 },
              { x: 165, y: 216 }, { x: 327, y: 216 }, { x: 180, y: 340 }, { x: 235, y: 340 }
            ].map((pt, i) => (
              <g key={i} className="animate-pulse">
                {/* Square Anchor Point */}
                <rect x={pt.x - 3} y={pt.y - 3} width="6" height="6" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                {/* Tangent Circle Handle */}
                <circle cx={pt.x + 8} cy={pt.y} r="2" fill="#06b6d4" />
                <line x1={pt.x} y1={pt.y} x2={pt.x + 8} y2={pt.y} stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="1 1" />
              </g>
            ))}
          </g>

          {/* ========================================================
              PHASE 3: LASER SCANNER SOLIDIFICATION BEAM
          ======================================================== */}
          {phase === 'solidify' && (
            <g className="animate-laser-scan">
              <line x1="0" y1="0" x2="500" y2="0" stroke="url(#laserGrad)" strokeWidth="4" />
              <line x1="0" y1="0" x2="500" y2="0" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
            </g>
          )}

        </svg>

        {/* ========================================================
            PHASE 4: 100% PIXEL-PERFECT FINAL LOGO (SOURCE OF TRUTH)
        ======================================================== */}
        <div 
          className={`absolute inset-0 p-3 flex items-center justify-center transition-all duration-1000 ease-out z-20 ${
            phase === 'solidify'
              ? 'opacity-85 scale-[0.98]'
              : phase === 'complete'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <img 
            src="/logo.jpeg" 
            alt="Sai Sales Brand Mark" 
            className="w-full h-full object-contain rounded-xl drop-shadow-md"
          />
        </div>

        {/* Optical Finish Flash Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-white/50 to-transparent pointer-events-none transition-opacity duration-1000 ${
            phase === 'solidify' ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>

      </div>

      {/* 4. Bottom Engineering Alignment Status */}
      <div className="absolute -bottom-6 left-0 right-0 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-slate-400 px-2 select-none">
        <span className="text-emerald-600 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          SCALE: 1:1.000
        </span>
        <span className="text-slate-500">
          RGB://#E31E24 | #282A7C
        </span>
        <span className="text-blue-600 font-semibold">
          GEOMETRY CONSTRUCTED
        </span>
      </div>

    </div>
  );
}
