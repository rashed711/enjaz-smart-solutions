
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { EmailHosting } from './components/EmailHosting';
import { ApiService } from './services/api';
import { SiteSettings, Service, Project } from './types';
import { MOCK_SETTINGS } from './services/mockData';
import { scrollToSection } from './utils/scroll';

type ViewState = 'home' | 'email-hosting';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<ViewState>('home');
  const [settings, setSettings] = useState<SiteSettings>(MOCK_SETTINGS);
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // Used to scroll to contact when coming from pricing page
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [settingsData, servicesData, projectsData] = await Promise.all([
          ApiService.getSettings(),
          ApiService.getServices(),
          ApiService.getProjects()
        ]);
        setSettings(settingsData);
        setServices(servicesData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to load initial data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle pending scrolls after view change
  useEffect(() => {
    if (view === 'home' && pendingScroll) {
      setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScroll(null);
      }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [view, pendingScroll]);

  const handleNavigateHome = () => {
    setView('home');
  };

  const handleOpenHosting = () => {
    setView('email-hosting');
  };

  const handleOrderPlan = (planName: string) => {
    setView('home');
    setPendingScroll('contact');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-950">
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-primary-900 border-t-primary-500 rounded-full animate-spin mb-4"></div>
            <p className="text-primary-400 font-medium">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="antialiased text-gray-800 bg-secondary-950">
      {/* Floating WhatsApp Button */}
      <a 
        href={settings.whatsapp_url} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-[999] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/40 flex items-center justify-center hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>

      {/* Pass view state to Header to control behavior/visibility if needed */}
      <Header onNavigateHome={handleNavigateHome} isHomePage={view === 'home'} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero settings={settings} />
            <About />
            <Services services={services} onOpenHosting={handleOpenHosting} />
            <Portfolio projects={projects} />
            <Contact settings={settings} />
          </>
        ) : (
          <EmailHosting onBack={handleNavigateHome} onOrder={handleOrderPlan} />
        )}
      </main>
      
      <footer className="bg-secondary-950 text-white pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="md:col-span-1">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-lg">E</div>
                <span className="text-2xl font-bold">إنجاز<span className="text-primary-500">تك</span>.</span>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 نحن نصنع المستقبل الرقمي من خلال حلول برمجية مبتكرة وتصاميم إبداعية تضعك في المقدمة.
               </p>
               <div className="flex gap-4">
                 <a href={settings.whatsapp_url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                 </a>
               </div>
            </div>

            {/* Column 2: Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={handleNavigateHome} className="hover:text-primary-400 transition-colors">الرئيسية</button></li>
                <li><button onClick={handleOpenHosting} className="hover:text-primary-400 transition-colors">باقات الاستضافة</button></li>
              </ul>
            </div>

             {/* Column 3: Contact */}
             <div>
              <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">📍</span>
                  <span>{settings.address_ar}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500">📞</span>
                  <span dir="ltr">{settings.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-500">✉️</span>
                  <span>{settings.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center md:flex md:justify-between md:text-right items-center">
             <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {settings.company_name_ar}. جميع الحقوق محفوظة.</p>
             <div className="flex justify-center md:justify-end gap-6 mt-4 md:mt-0 text-sm text-gray-500">
                <a href="#" className="hover:text-primary-400">سياسة الخصوصية</a>
                <a href="#" className="hover:text-primary-400">شروط الاستخدام</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
