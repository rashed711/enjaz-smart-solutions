
import React from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { Language } from '../App';

interface PortfolioProps {
  projects: Project[];
  lang: Language;
  onNavigate?: (path: string, hash?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects, lang, onNavigate }) => {
  const labels = {
    tag: lang === 'ar' ? 'معرض الأعمال' : 'Our Portfolio',
    title: lang === 'ar' ? 'قصص نجاح صنعناها' : 'Success Stories',
    desc: lang === 'ar' ? 'نفتخر بمشاركة أحدث المشاريع التي قمنا بتنفيذها لشركاء النجاح.' : 'We are proud to share our latest projects delivered to our partners.',
    viewAll: lang === 'ar' ? 'مشاهدة كل المشاريع' : 'View All Projects'
  };

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/portfolio');
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <Reveal width="100%">
              <div className="mb-6 md:mb-0">
                  <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-2 block">{labels.tag}</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-4">{labels.title}</h2>
                  <p className="text-gray-500 max-w-lg text-sm md:text-base">{labels.desc}</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <a 
                href="/portfolio" 
                onClick={handleViewAll}
                className="group inline-flex items-center gap-2 text-primary-700 font-bold hover:text-primary-500 transition-colors"
              >
                <span>{labels.viewAll}</span>
                <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rtl:rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl cursor-pointer h-64 md:h-80 isolate">
                <img 
                  src={project.image_url} 
                  alt={lang === 'ar' ? project.title_ar : project.title_en} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110 will-change-transform"
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-secondary-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content Slide-up */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-300 text-xs font-bold mb-3 w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-100 transition-colors">
                    {lang === 'ar' ? project.title_ar : project.title_en}
                  </h3>
                  <div className="h-1 w-12 bg-primary-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
