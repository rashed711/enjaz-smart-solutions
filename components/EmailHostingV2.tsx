
import React from 'react';
import { Reveal } from './Reveal';
import { Icon } from './Icon';
import { Language } from '../App';
import { SiteSettings } from '../types';

interface EmailHostingProps {
  onNavigate: (path: string, hash?: string) => void;
  lang: Language;
  settings: SiteSettings;
}

const PLANS = [
  {
    id: 1,
    name_ar: "الباقة الأساسية",
    name_en: "Basic Plan",
    storage: "1 GB",
    price: "800",
    popular: false,
    features_ar: ["مساحة 1 GB", "إيميلات لا محدودة", "حماية فيروسات", "دعم فني"],
    features_en: ["1 GB Storage", "Unlimited Emails", "Virus Protection", "Tech Support"]
  },
  {
    id: 2,
    name_ar: "الباقة الشاملة",
    name_en: "Comprehensive",
    storage: "5 GB",
    price: "2000",
    popular: true,
    features_ar: ["مساحة 5 GB", "إيميلات لا محدودة", "Spam Filter متطور", "دعم أولوية"],
    features_en: ["5 GB Storage", "Unlimited Emails", "Adv. Spam Filter", "Priority Support"]
  },
  {
    id: 3,
    name_ar: "باقة الشركات",
    name_en: "Business Plan",
    storage: "10 GB",
    price: "4000",
    popular: false,
    features_ar: ["مساحة 10 GB", "إيميلات لا محدودة", "لوحة تحكم كاملة", "ضمان 99.9%"],
    features_en: ["10 GB Storage", "Unlimited Emails", "Control Panel", "99.9% Uptime"]
  },
  {
    id: 4,
    name_ar: "باقة الترا",
    name_en: "Ultra Plan",
    storage: "20 GB",
    price: "5000",
    popular: false,
    features_ar: ["مساحة 20 GB", "إيميلات لا محدودة", "أداء عالي السرعة", "نقل مجاني"],
    features_en: ["20 GB Storage", "Unlimited Emails", "High Speed", "Free Migration"]
  },
  {
    id: 5,
    name_ar: "باقة برو",
    name_en: "Pro Plan",
    storage: "50 GB",
    price: "12000",
    popular: false,
    features_ar: ["مساحة 50 GB", "إيميلات لا محدودة", "سيرفر خاص VP", "مدير حساب"],
    features_en: ["50 GB Storage", "Unlimited Emails", "Private Server", "Account Manager"]
  }
];

export const EmailHostingV2: React.FC<EmailHostingProps> = ({ onNavigate, lang, settings }) => {
  const labels = {
    back: lang === 'ar' ? 'الرئيسية' : 'Home',
    title: lang === 'ar' ? 'باقات' : 'Email',
    titleHighlight: lang === 'ar' ? 'البريد الإلكتروني' : 'Hosting Plans',
    desc: lang === 'ar' ? 'اختر الباقة المناسبة لأعمالك وابدأ في بناء هوية رقمية احترافية.' : 'Choose the right plan for your business and build a professional digital identity.',
    popular: lang === 'ar' ? 'الأكثر طلباً' : 'Best Value',
    currency: lang === 'ar' ? 'ج.م' : 'EGP',
    perYear: lang === 'ar' ? 'سنوياً' : '/year',
    order: lang === 'ar' ? 'اشترك الآن' : 'Subscribe Now',
    featuresTitle: lang === 'ar' ? 'المميزات:' : 'Features:',
  };

  const handleSubscribe = (plan: typeof PLANS[0]) => {
    const planName = lang === 'ar' ? plan.name_ar : plan.name_en;
    const price = plan.price;
    const currency = labels.currency;
    
    const message = lang === 'ar' 
      ? `مرحباً، أود الاشتراك في *${planName}* بسعر *${price} ${currency}* سنوياً.`
      : `Hello, I would like to subscribe to the *${planName}* for *${price} ${currency}* per year.`;
      
    // Check if whatsapp_url already has query params
    const separator = settings.whatsapp_url.includes('?') ? '&' : '?';
    const finalUrl = `${settings.whatsapp_url}${separator}text=${encodeURIComponent(message)}`;
    
    window.open(finalUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-secondary-950 pt-20 md:pt-24 pb-20 relative overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-800/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Reduced Container Padding on Mobile for Max Width */}
      <div className="w-full md:container md:mx-auto px-1.5 md:px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <button 
            onClick={() => onNavigate('/')}
            className="group flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all mb-4 md:mb-6 backdrop-blur-md"
          >
            <svg className={`w-3 h-3 md:w-4 md:h-4 ${lang === 'ar' ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="text-xs md:text-sm font-medium">{labels.back}</span>
          </button>
          
          <Reveal width="100%">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4 tracking-tight">
              {labels.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">{labels.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-lg leading-relaxed px-4">
              {labels.desc}
            </p>
          </Reveal>
        </div>

        {/* 
            GRID LAYOUT (Fixed for Mobile 2-Cols)
            Mobile: grid-cols-2 gap-2
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-6 lg:gap-8 w-full">
          {PLANS.map((plan, index) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col rounded-xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-secondary-900 to-secondary-950 border-primary-500 shadow-[0_5px_20px_-5px_rgba(18,161,107,0.3)] z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {/* Popular Glow */}
              {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 md:h-1.5 bg-primary-500"></div>
              )}
              
              <div className="p-3 md:p-8 flex flex-col h-full relative z-10">
                
                {/* Card Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-6 gap-2">
                   <div className="w-full">
                      <h3 className={`text-[11px] md:text-lg font-bold mb-1 truncate ${plan.popular ? 'text-primary-400' : 'text-gray-200'}`}>
                        {lang === 'ar' ? plan.name_ar : plan.name_en}
                      </h3>
                      {plan.popular && (
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] md:text-[10px] font-bold bg-primary-500 text-white uppercase tracking-wider">
                           {labels.popular}
                        </span>
                      )}
                   </div>
                   
                   {/* Storage Icon/Badge */}
                   <div className={`hidden md:flex w-12 h-12 rounded-2xl items-center justify-center text-xl font-bold ${plan.popular ? 'bg-primary-500/20 text-primary-400' : 'bg-white/5 text-gray-500'}`}>
                      {plan.storage.split(' ')[0]}
                      <span className="text-[10px] ml-0.5 mt-1 opacity-70">GB</span>
                   </div>
                </div>

                {/* Price */}
                <div className="mb-4 md:mb-8 text-center md:text-start">
                   <div className="flex items-baseline justify-center md:justify-start gap-0.5 md:gap-1">
                      <span className="text-xl md:text-4xl font-black text-white tracking-tight">{plan.price}</span>
                      <span className="text-[10px] md:text-sm text-gray-400 font-medium">{labels.currency}</span>
                   </div>
                   <div className="text-[9px] md:text-xs text-gray-500 mt-0.5 md:mt-1">{labels.perYear}</div>
                </div>

                {/* Features */}
                <div className="mb-4 md:mb-8 flex-grow">
                   <p className="text-[9px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-4 hidden md:block">{labels.featuresTitle}</p>
                   <ul className="space-y-1.5 md:space-y-3">
                      {(lang === 'ar' ? plan.features_ar : plan.features_en).map((feature, i) => (
                        <li key={i} className="flex items-start gap-1.5 md:gap-3 text-[10px] md:text-sm text-gray-300 leading-tight">
                           <span className={`w-3 h-3 md:w-5 md:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-primary-500 text-white' : 'bg-white/10 text-gray-400'}`}>
                              <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                           </span>
                           {feature}
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Action */}
                <button 
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-2.5 md:py-4 rounded-lg md:rounded-xl font-bold text-[10px] md:text-sm transition-all transform active:scale-95 flex items-center justify-center gap-1.5 md:gap-2 ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/25' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                  }`}
                >
                  {labels.order}
                  <svg className={`hidden md:block w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
