import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Language } from '../App';
import { Project } from '../types';

interface PortfolioPageProps {
  onNavigate: (path: string, hash?: string) => void;
  lang: Language;
  projects: Project[];
}

// Extended Category List for Filtering
const CATEGORIES = [
  { id: 'all', name_ar: 'الكل', name_en: 'All' },
  { id: 'web', name_ar: 'مواقع ويب', name_en: 'Websites' },
  { id: 'app', name_ar: 'تطبيقات', name_en: 'Apps' },
  { id: 'branding', name_ar: 'هوية بصرية', name_en: 'Branding' },
  { id: 'marketing', name_ar: 'تسويق', name_en: 'Marketing' },
];

// Mocking more projects for the full page view to look populated
const EXTRA_PROJECTS: Project[] = [
  { id: 101, title_ar: "تطبيق توصيل طلبات", title_en: "Delivery App", category: "Mobile App", image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
  { id: 102, title_ar: "لوحة تحكم إدارية", title_en: "Admin Dashboard", category: "Web App", image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
  { id: 103, title_ar: "هوية شركة مقاولات", title_en: "Construction Branding", category: "Branding", image_url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
  { id: 104, title_ar: "حملة تسويق عقاري", title_en: "Real Estate Ads", category: "Marketing", image_url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, lang, projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Combine props projects with extra mock projects for display
  const allProjectsDisplay = [...projects, ...EXTRA_PROJECTS];

  // Filter Logic (Simple generic matching for demo)
  const filteredProjects = activeFilter === 'all' 
    ? allProjectsDisplay 
    : allProjectsDisplay.filter(p => {
        if (activeFilter === 'web') return p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('ecommerce');
        if (activeFilter === 'app') return p.category.toLowerCase().includes('app') || p.category.toLowerCase().includes('mobile');
        if (activeFilter === 'branding') return p.category.toLowerCase().includes('branding') || p.category.toLowerCase().includes('corporate');
        if (activeFilter === 'marketing') return p.category.toLowerCase().includes('marketing');
        return true;
    });

  const labels = {
    back: lang === 'ar' ? 'الرئيسية' : 'Home',
    title: lang === 'ar' ? 'أعمالنا' : 'Our',
    titleHighlight: lang === 'ar' ? 'المتميزة' : 'Portfolio',
    desc: lang === 'ar' ? 'اكتشف كيف ساعدنا شركائنا في تحقيق أهدافهم الرقمية من خلال حلول مبتكرة وتصاميم عصرية.' : 'Discover how we helped our partners achieve their digital goals through innovative solutions.',
    viewDetails: lang === 'ar' ? 'عرض التفاصيل' : 'View Details'
  };

  return (
    <div className="min-h-screen bg-secondary-950 pt-20 md:pt-24 pb-20 relative overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-800/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <button 
            onClick={() => onNavigate('/')}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all mb-8 backdrop-blur-md"
          >
            <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="text-sm font-medium">{labels.back}</span>
          </button>
          
          <Reveal width="100%">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              {labels.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">{labels.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">
              {labels.desc}
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {CATEGORIES.map((cat, index) => (
             <Reveal key={cat.id} delay={index * 50}>
                <button
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeFilter === cat.id 
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 transform scale-105' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {lang === 'ar' ? cat.name_ar : cat.name_en}
                </button>
             </Reveal>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="animate-fade-in-up group relative rounded-2xl md:rounded-3xl overflow-hidden bg-secondary-900 border border-white/5 shadow-2xl h-[300px] md:h-[400px]"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
                {/* Image */}
                <img 
                  src={project.image_url} 
                  alt={lang === 'ar' ? project.title_ar : project.title_en}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 mb-auto self-end">
                    <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </div>

                  <span className="inline-block py-1 px-3 rounded-md bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {lang === 'ar' ? project.title_ar : project.title_en}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
             <p className="text-gray-500 text-lg">{lang === 'ar' ? 'لا توجد مشاريع في هذا القسم حالياً' : 'No projects in this category yet'}</p>
          </div>
        )}

      </div>
    </div>
  );
};