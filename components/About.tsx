
import React from 'react';
import { Reveal } from './Reveal';
import { Language } from '../App';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const content = {
    ar: {
      tag: "قصتنا",
      tagMain: "من نحن",
      imageTitle: "شغف بالابتكار منذ 2012",
      floatingTitle: "أمان عالي",
      floatingSub: "حماية متقدمة لبياناتك",
      heading: <>نحن لسنا مجرد شركة برمجيات، نحن <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-secondary-500">شركاء نجاحك.</span></>,
      desc: "تأسست إنجاز تك برؤية واضحة: تمكين الشركات والمؤسسات من الاستفادة القصوى من التكنولوجيا. نحن نؤمن بأن التحول الرقمي ليس مجرد أدوات، بل هو ثقافة واستراتيجية متكاملة.",
      feat1Title: "فريق محترف",
      feat1Desc: "نخبة من المطورين والمصممين ذوي الخبرة العالمية.",
      feat2Title: "سرعة في التنفيذ",
      feat2Desc: "نلتزم بالجداول الزمنية ونسلم مشاريعنا في وقت قياسي.",
      quote: '"الجودة هي الأساس الذي نبني عليه كل سطر برمجي وكل بكسل في التصميم."',
      role: "الرئيس التنفيذي",
      name: "أحمد راشد"
    },
    en: {
      tag: "Our Story",
      tagMain: "About Us",
      imageTitle: "Passion for Innovation since 2012",
      floatingTitle: "High Security",
      floatingSub: "Advanced protection",
      heading: <>We are not just a software company, we are <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-secondary-500">your success partners.</span></>,
      desc: "Enjaz Tech was founded with a clear vision: empowering companies to make the most of technology. We believe digital transformation is not just tools, but a complete culture and strategy.",
      feat1Title: "Professional Team",
      feat1Desc: "Elite developers and designers with global experience.",
      feat2Title: "Fast Execution",
      feat2Desc: "We stick to schedules and deliver projects in record time.",
      quote: '"Quality is the foundation upon which we build every line of code and every pixel of design."',
      role: "CEO",
      name: "Ahmed Rashed"
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image / Visual Side */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt={t.tagMain} 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 to-transparent"></div>
                  
                  <div className={`absolute bottom-8 ${lang === 'ar' ? 'right-8' : 'left-8'} text-white`}>
                    <p className="text-sm font-bold uppercase tracking-wider mb-1 text-primary-400">{t.tag}</p>
                    <h3 className="text-2xl font-bold">{t.imageTitle}</h3>
                  </div>
                </div>
                
                {/* Floating Experience Card */}
                <div className={`absolute -bottom-10 ${lang === 'ar' ? '-right-6 lg:-right-10' : '-left-6 lg:-left-10'} bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] hidden md:block`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary-900 font-bold text-lg">{t.floatingTitle}</p>
                      <p className="text-gray-500 text-xs">{t.floatingSub}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={200}>
              <span className="inline-block py-1 px-3 rounded-md bg-secondary-50 text-secondary-600 font-bold text-xs tracking-[0.2em] uppercase mb-4 border border-secondary-100">
                {t.tagMain}
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-secondary-900 mb-6 leading-tight">
                {t.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">{t.feat1Title}</h4>
                    <p className="text-sm text-gray-500">{t.feat1Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">{t.feat2Title}</h4>
                    <p className="text-sm text-gray-500">{t.feat2Desc}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                 <p className="text-gray-500 italic font-light">{t.quote}</p>
                 <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="CEO" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-secondary-900">{t.name}</p>
                       <p className="text-xs text-primary-600">{t.role}</p>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
