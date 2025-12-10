
import React from 'react';
import { SiteSettings } from '../types';
import { Reveal } from './Reveal';

interface ContactProps {
  settings: SiteSettings;
}

export const Contact: React.FC<ContactProps> = ({ settings }) => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <Reveal width="100%">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-md bg-secondary-50 text-secondary-600 font-bold text-xs tracking-[0.2em] uppercase mb-4 border border-secondary-100">
              تواصل معنا
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary-900 mb-6 leading-tight">
               نحن هنا <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-secondary-500">لخدمتك</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              سواء كانت لديك فكرة مشروع جديد أو استفسار، فريقنا جاهز للرد على جميع استفساراتك وتقديم الدعم اللازم.
            </p>
          </div>
        </Reveal>

        <Reveal width="100%" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Phone Card */}
            <div className="group bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-100 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">اتصل بنا</h3>
              <p className="text-gray-500 mb-6">نحن متاحون للرد على اتصالاتكم</p>
              <a href={`tel:${settings.phone}`} dir="ltr" className="text-lg font-bold text-primary-600 hover:text-primary-700 transition-colors">{settings.phone}</a>
            </div>

            {/* Address Card */}
            <div className="group bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-100 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">زيارة مقرنا</h3>
              <p className="text-gray-500 mb-6">يسعدنا استقبالكم في مقر الشركة</p>
              <p className="text-lg font-bold text-secondary-800">{settings.address_ar}</p>
            </div>

            {/* Email Card */}
            <div className="group bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-100 transition-all duration-300 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-500 mb-6">للطلبات والاستفسارات الرسمية</p>
              <a href={`mailto:${settings.email}`} className="text-lg font-bold text-primary-600 hover:text-primary-700 transition-colors">{settings.email}</a>
            </div>

          </div>
        </Reveal>

        <Reveal width="100%" delay={400}>
           <div className="mt-16 text-center">
              <a 
                href={settings.whatsapp_url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[#25D366]/40 transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>تواصل عبر واتساب مباشرة</span>
              </a>
           </div>
        </Reveal>

      </div>
    </section>
  );
};
