import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(targetId);
    if (element) {
      const navHeight = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home', icon: '🏠', badge: 'Main' },
    { label: 'Locations', href: '#stores', icon: '📍', badge: '4 Stores' },
    { label: 'Reviews', href: '#reviews', icon: '⭐', badge: '4.8★' },
    { label: 'About Us', href: '#about', icon: '🏢', badge: 'Est. 2009' },
    { label: 'Franchise', href: '#contact', icon: '🤝', badge: 'Apply' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-2 md:py-2.5' 
        : 'bg-white/80 backdrop-blur-md border-b border-slate-200/40 py-2.5 md:py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        
        {/* Sleek Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <img 
            src="/logo.jpeg" 
            alt="Sai Sales Logo" 
            className="h-10 md:h-11 w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300" 
          />
          <span className="font-black text-sm text-slate-900 tracking-tight">
            Sai Sales
          </span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-5 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] font-bold tracking-widest text-slate-700 hover:text-blue-600 transition-colors uppercase relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#stores" 
            onClick={(e) => handleNavClick(e, '#stores')}
            className="bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-1"
          >
            <span>📍</span> 4 Locations
          </a>
        </div>

        {/* 3-Lines Hamburger Button */}
        <div ref={menuRef} className="relative lg:hidden">
          <button 
            type="button"
            className="flex flex-col justify-center items-center w-10 h-10 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 shadow-sm transition-all duration-200 touch-manipulation active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`w-4 h-0.5 bg-slate-800 rounded-full transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-slate-800 rounded-full my-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-slate-800 rounded-full transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Animated Dropdown Menu Card */}
          <div 
            className={`absolute top-full right-0 mt-3 w-72 sm:w-80 bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl rounded-3xl p-3 transition-all duration-300 origin-top-right z-50 ${
              isMenuOpen 
                ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' 
                : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
            }`}
          >
            {/* Header in card */}
            <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  Quick Navigation
                </span>
                <span className="text-xs font-black text-slate-900">
                  Sai Sales
                </span>
              </div>
              <span className="text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">
                4 Stores
              </span>
            </div>

            {/* Menu Options */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold text-slate-800 hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-200 group active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base p-1 bg-slate-100 group-hover:bg-white rounded-xl border border-slate-200/60 shadow-xs transition-colors">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold text-slate-400 group-hover:text-blue-500">
                      {link.badge}
                    </span>
                    <span className="text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-transform">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Call Action in card */}
            <div className="mt-3 pt-2.5 border-t border-slate-100">
              <a 
                href="tel:8370818181" 
                className="w-full bg-slate-900 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2.5 px-3 rounded-2xl text-center text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>📞</span> Call Store: 8370818181
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
