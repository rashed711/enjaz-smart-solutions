import React from 'react';
import { Service } from '../types';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { scrollToSection } from '../utils/scroll';
import { Language } from '../App';

interface ServicesProps {
  services: Service[];
  onNavigate: (path: string, hash?: string) => void;
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ services, onNavigate, lang }) => {
  const labels = {
    tag: lang === 'ar' ? 'حلول استثنائية' : 'Exceptional Solutions',
    title: lang === 'ar' ? 'خدماتنا' : 'Our',
    titleHighlight: lang === 'ar' ? 'المتميزة' : 'Services',
    desc: lang === 'ar' 
      ? 'نجمع بين الإبداع الفني والتميز التقني لنقدم حلولاً رقمية تفوق التوقعات وتدفع أعمالك نحو المستقبل.'
      : 'We combine artistic creativity with technical excellence to deliver digital solutions that exceed expectations.',
    readMore: lang === 'ar' ? 'أعرف أكثر' : 'Read More',
    viewPlans: lang === 'ar' ? 'عرض الباقات' : 'View Plans'
  };

  return (
    <section id="services" className="py-16 lg:py-32 bg-secondary-950 relative overflow-hidden">
      
      {/* Abstract Background Elements - Reduced opacity on mobile via CSS */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-secondary-900 to-secondary-950"></div>
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-800/20 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 lg:mb-24">
          <Reveal width="100%">
            <span className="inline-block py-1 px-3 rounded-md bg-primary-500/10 text-primary-400 font-bold text-xs tracking-[0.2em] uppercase mb-4 border border-primary-500/20">
              {labels.tag}
            </span>
            <h2 className="text-3xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              {labels.title} <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-300">{labels.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              {labels.desc}
            </p>
          </Reveal>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} className="h-full">
              <div className="group h-full relative rounded-2xl lg:rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-primary-500/50 hover:to-primary-900/50 transition-all duration-500">
                
                {/* The Card Inner - Simplified blur on mobile via Global CSS */}
                <div className="relative h-full bg-secondary-900/60 backdrop-blur-xl rounded-[15px] lg:rounded-[23px] p-6 lg:p-8 overflow-hidden transition-all duration-500 group-hover:bg-secondary-900/80 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]">
                  
                  {/* Neon Glow Blob inside card - hidden on mobile to save performance */}
                  <div className="hidden sm:block absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl transition-all duration-700 group-hover:scale-[2.5] group-hover:opacity-40"></div>
                  
                  {/* Icon */}
                  <div className="relative w-12 h-12 lg:w-14 lg:h-14 mb-6 lg:mb-8">
                    <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
                    <div className="relative w-full h-full bg-secondary-800 rounded-2xl border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:text-white group-hover:bg-primary-600 group-hover:border-primary-400 transition-all duration-300">
                       <Icon name={service.icon_name} className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {lang === 'ar' ? service.title_ar : service.title_en}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 lg:mb-8 text-sm group-hover:text-gray-300 transition-colors">
                    {lang === 'ar' ? service.description_ar : service.description_en}
                  </p>

                  {/* Animated Link */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (service.id === 1) {
                          onNavigate('/email-hosting');
                        } else {
                          scrollToSection(e as any, 'contact');
                        }
                      }}
                      className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors bg-transparent border-none cursor-pointer p-0"
                    >
                      {service.id === 1 ? labels.viewPlans : labels.readMore}
                    </button>
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary-500 group-hover:rotate-45 transition-all duration-300">
                       <svg className={`w-3 h-3 ${lang === 'ar' ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};