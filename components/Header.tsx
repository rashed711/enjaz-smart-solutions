
import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';
import { Language } from '../App';

interface HeaderProps {
  navigate: (path: string, hash?: string) => void;
  isHomePage: boolean;
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ navigate, isHomePage, lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', id: 'home', path: '/' },
    { name: lang === 'ar' ? 'من نحن' : 'About', id: 'about', path: '/' },
    { name: lang === 'ar' ? 'خدماتنا' : 'Services', id: 'services', path: '/' },
    { name: lang === 'ar' ? 'أعمالنا' : 'Portfolio', id: 'portfolio', path: '/' },
    { name: lang === 'ar' ? 'اتصل بنا' : 'Contact', id: 'contact', path: '/' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: {id: string, path: string}) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (link.id === 'home' && link.path === '/') {
        navigate('/', 'home');
        return;
    }

    if (!isHomePage) {
      navigate('/', link.id);
    } else {
      scrollToSection(e, link.id);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
          scrolled || !isHomePage
            ? 'glass-dark border-white/5 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-4 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative z-[101]">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/', 'home'); }} className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src="https://www2.0zz0.com/2025/12/10/11/631949405.png" 
              alt="Enjaz Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
            />
            <div className={`text-base sm:text-lg lg:text-xl font-extrabold tracking-tighter transition-colors text-white`}>
              {lang === 'ar' ? 'انجاز' : 'Enjaz'} <span className="text-primary-500">{lang === 'ar' ? 'للحلول الذكية' : 'Smart Solutions'}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 space-x-reverse items-center rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.path === '/' ? `/#${link.id}` : link.path} 
                onClick={(e) => handleNavClick(e, link)}
                className={`font-medium text-sm lg:text-base text-gray-300 hover:text-primary-400 transition-colors relative group py-2 ${lang === 'en' ? 'ml-8' : ''}`}
              >
                {link.name}
                <span className={`absolute bottom-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${lang === 'ar' ? 'left-0' : 'left-0'}`}></span>
              </a>
            ))}
          </nav>

          {/* CTA & Lang - Desktop */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              <button 
                onClick={onToggleLang}
                className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase"
              >
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, {id: 'contact', path: '/'})}
                className="px-6 py-2.5 rounded-full font-bold text-sm bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/20 transition-all transform hover:-translate-y-0.5 hover:shadow-primary-500/40"
              >
                {lang === 'ar' ? 'اطلب استشارة' : 'Get Consultation'}
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white bg-white/10 rounded-lg hover:bg-primary-500 hover:text-white transition-all focus:outline-none relative z-[110]" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] transition-opacity duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 bottom-0 w-[85%] max-w-[320px] bg-secondary-950/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[9999] transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) md:hidden flex flex-col h-[100dvh] ${
          mobileMenuOpen 
             ? 'translate-x-0' 
             : (lang === 'ar' ? 'translate-x-full right-0' : '-translate-x-full left-0')
        } ${lang === 'ar' ? 'right-0 border-r-0 border-l' : 'left-0 border-l-0 border-r'}`}
      >
          {/* Drawer Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-secondary-900/50">
             <div className="flex items-center gap-2">
                <img src="https://www2.0zz0.com/2025/12/10/11/631949405.png" alt="Logo" className="h-8 w-auto" />
                <span className="text-lg font-bold text-white">{lang === 'ar' ? 'انجاز' : 'Enjaz'}</span>
             </div>
             <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-500 transition-colors"
             >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>

          {/* Links List */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.path === '/' ? `/#${link.id}` : link.path} 
                  onClick={(e) => handleNavClick(e, link)} 
                  className="flex items-center justify-between group p-4 rounded-xl hover:bg-primary-500/10 active:bg-primary-500/20 border border-transparent hover:border-primary-500/20 transition-all"
                >
                  <span className="text-lg font-medium text-gray-200 group-hover:text-primary-400 transition-colors">{link.name}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-0' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </div>
                </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-white/10 bg-secondary-900/50">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, {id: 'contact', path: '/'})} 
              className="block w-full bg-primary-600 text-center text-white px-5 py-4 rounded-xl font-bold shadow-lg shadow-primary-500/20 active:scale-95 transition-transform mb-4"
            >
              {lang === 'ar' ? 'اطلب استشارة مجانية' : 'Get Free Consultation'}
            </a>
            <div className="flex justify-center gap-6 text-sm">
               <button onClick={() => { onToggleLang(); setMobileMenuOpen(false); }} className={`font-medium ${lang === 'en' ? 'text-primary-400 font-bold' : 'text-gray-400'}`}>English</button>
               <span className="text-gray-700">|</span>
               <button onClick={() => { onToggleLang(); setMobileMenuOpen(false); }} className={`font-medium ${lang === 'ar' ? 'text-primary-400 font-bold' : 'text-gray-400'}`}>العربية</button>
            </div>
          </div>
      </div>
    </>
  );
};
