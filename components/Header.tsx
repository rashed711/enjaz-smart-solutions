
import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';

interface HeaderProps {
  onNavigateHome: () => void;
  isHomePage: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, isHomePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // The IDs here must match the ID attributes in the section components
  const navLinks = [
    { name: 'الرئيسية', id: 'home' },
    { name: 'من نحن', id: 'about' },
    { name: 'خدماتنا', id: 'services' },
    { name: 'أعمالنا', id: 'portfolio' },
    { name: 'اتصل بنا', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false); // Close mobile menu
    
    if (!isHomePage) {
      // If we are on a sub-page, go home first
      e.preventDefault();
      onNavigateHome();
      // We can't scroll immediately because the elements don't exist yet. 
      // App.tsx handles the pending scroll in this case.
    } else {
      scrollToSection(e, id); // Smooth scroll if already on home
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
          scrolled || mobileMenuOpen || !isHomePage
            ? 'glass-dark border-white/5 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-4 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[101]">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform">
              E
            </div>
            <div className={`text-xl lg:text-2xl font-extrabold tracking-tighter transition-colors ${scrolled || mobileMenuOpen || !isHomePage ? 'text-white' : 'text-white'}`}>
              إنجاز<span className="text-primary-500">تك</span>.
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 space-x-reverse items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="font-medium text-sm lg:text-base text-gray-300 hover:text-primary-400 transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Lang - Desktop */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button className="text-sm font-bold text-gray-300 hover:text-white transition-colors">EN</button>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-6 py-2.5 rounded-full font-bold text-sm bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/20 transition-all transform hover:-translate-y-0.5 hover:shadow-primary-500/40"
              >
                اطلب استشارة
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-secondary-950/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
            mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
            <div className="flex flex-col items-center space-y-6 w-full px-8">
              {navLinks.map((link, idx) => (
                  <a 
                    key={link.name} 
                    href={`#${link.id}`} 
                    onClick={(e) => handleNavClick(e, link.id)} 
                    className="text-2xl font-bold text-white hover:text-primary-500 transition-colors w-full text-center py-2 border-b border-white/5"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {link.name}
                  </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className="w-full bg-primary-600 text-center text-white px-5 py-4 rounded-xl font-bold shadow-lg shadow-primary-500/30 text-lg mt-4 active:scale-95 transition-transform"
              >
                اطلب استشارة مجانية
              </a>
            </div>
        </div>
      </header>
    </>
  );
};
