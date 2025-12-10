import React, { useState, useEffect } from 'react';
import { SiteSettings } from '../types';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';
import { scrollToSection } from '../utils/scroll';

interface HeroProps {
  settings: SiteSettings;
}

const SLIDER_IMAGES = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/68/aa/61/68aa613db13accf414562a2ec1fd72d7.jpg",
    alt: "Cybersecurity & Code"
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/d1/eb/8f/d1eb8f3e2355f0483a50618f571b37c8.jpg",
    alt: "Data Analytics"
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/d7/12/01/d71201eb2cd5be2a26a1ea0a1c703b8a.jpg",
    alt: "Global Network"
  }
];

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary-950">
      
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        {SLIDER_IMAGES.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className={`w-full h-full object-cover ${index === currentSlide ? 'animate-ken-burns' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-900/80 to-primary-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-transparent to-secondary-950/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center lg:text-right pt-20">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <Reveal>
            <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/5 backdrop-blur-md border border-primary-500/30 text-primary-300 text-xs md:text-sm font-bold mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              مستقبل الحلول الرقمية يبدأ هنا
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
              {settings.hero_title_ar.split(" ").slice(0, -1).join(" ")} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200 neon-text-glow">
                 {settings.hero_title_ar.split(" ").slice(-1)}
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={400}>
            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90 font-light">
              {settings.hero_subtitle_ar}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 sm:mb-20">
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className="group relative px-6 py-3.5 bg-primary-600 text-white font-bold rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95 text-center"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative flex items-center justify-center gap-2">
                  ابدأ مشروعك الآن
                  <svg className="w-5 h-5 rtl:rotate-180 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => scrollToSection(e, 'portfolio')}
                className="px-6 py-3.5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                 <span>شاهد أعمالنا</span>
                 <svg className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </a>
            </div>
          </Reveal>

          {/* Glass Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-6 mt-4 backdrop-blur-sm bg-white/5 rounded-2xl p-4 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:rounded-none">
             <div className="text-center lg:text-right">
                <strong className="block text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1">
                  <CountUp end={settings.projects_count} prefix="+" />
                </strong>
                <span className="text-[10px] sm:text-xs font-medium text-primary-300/80 uppercase tracking-wider">مشروع ناجح</span>
             </div>
             <div className="text-center lg:text-right border-x border-white/10 lg:border-none">
                <strong className="block text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1">
                   <CountUp end={settings.years_experience} prefix="+" />
                </strong>
                <span className="text-[10px] sm:text-xs font-medium text-primary-300/80 uppercase tracking-wider">سنوات خبرة</span>
             </div>
             <div className="text-center lg:text-right">
                <strong className="block text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-400 mb-1 neon-text-glow">
                   <CountUp end={settings.satisfaction_rate} suffix="%" />
                </strong>
                <span className="text-[10px] sm:text-xs font-medium text-primary-300/80 uppercase tracking-wider">رضا العملاء</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};