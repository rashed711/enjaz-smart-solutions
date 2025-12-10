import React from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { scrollToSection } from '../utils/scroll';

interface PortfolioProps {
  projects: Project[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <Reveal width="100%">
              <div className="mb-6 md:mb-0">
                  <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-2 block">معرض الأعمال</span>
                  <h2 className="text-4xl font-extrabold text-secondary-900 mb-4">قصص نجاح صنعناها</h2>
                  <p className="text-gray-500 max-w-lg">نفتخر بمشاركة أحدث المشاريع التي قمنا بتنفيذها لشركاء النجاح.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group inline-flex items-center gap-2 text-primary-700 font-bold hover:text-primary-500 transition-colors"
              >
                <span>مشاهدة كل المشاريع</span>
                <svg className="w-5 h-5 rtl:rotate-180 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-[2rem] shadow-xl cursor-pointer h-80 isolate">
                <img 
                  src={project.image_url} 
                  alt={project.title_ar} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110 will-change-transform"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-secondary-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content Slide-up */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-300 text-xs font-bold mb-3 w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-100 transition-colors">{project.title_ar}</h3>
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