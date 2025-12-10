
import React from 'react';
import { Reveal } from './Reveal';
import { Icon } from './Icon';
import { Language } from '../App';

interface EmailHostingProps {
  onNavigate: (path: string, hash?: string) => void;
  onOrder: (planName: string) => void;
  lang: Language;
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

export const EmailHosting: React.FC<EmailHostingProps> = ({ onNavigate, onOrder, lang }) => {
  const labels = {
    back: lang === 'ar' ? 'الرئيسية' : 'Home',
    title: lang === 'ar' ? 'باقات' : 'Email',
    titleHighlight: lang === 'ar' ? 'البريد الإلكتروني' : 'Hosting Plans',
    desc: lang === 'ar' ? 'حلول بريد إلكتروني احترافية تمنحك المصداقية والأمان.' : 'Professional business email solutions for credibility and security.',
    popular: lang === 'ar' ? 'الأكثر طلباً' : 'Most Popular',
    currency: lang === 'ar' ? 'ج.م' : 'EGP',
    perYear: lang === 'ar' ? 'سنوياً' : '/year',
    order: lang === 'ar' ? 'اطلب الباقة' : 'Order Now',
    noteDomain: lang === 'ar' ? 'الأسعار لا تشمل الدومين' : 'Prices exclude domain',
    noteEmails: lang === 'ar' ? 'إنشاء عدد لا نهائي من الإيميلات' : 'Create Unlimited Emails'
  };

  return (
    <div className="min-h-screen bg-secondary-950 pt-20 pb-20 relative overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-secondary-900 to-secondary-950 z-0 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
      
      <div className="container mx-auto px-2 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <button 
            onClick={() => onNavigate('/')}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all mb-8 backdrop-blur-md"
          >
            <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="text-sm font-medium">{labels.back}</span>
          </button>
          
          <Reveal width="100%">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              {labels.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">{labels.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg leading-relaxed">
              {labels.desc}
            </p>
          </Reveal>
        </div>

        {/* 
           Responsive Grid Layout 
           - Mobile: grid-cols-2 (User requirement), gap-2
           - Tablet: grid-cols-3, gap-4
           - Desktop: grid-cols-5, gap-6
           - 'items-stretch' ensures all cards in a row have the same height
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6 mb-12 items-stretch justify-center">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 50} className="h-full">
              <div 
                className={`relative h-full flex flex-col rounded-xl md:rounded-2xl border transition-all duration-300 group overflow-hidden ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-secondary-900 to-secondary-950 border-primary-500/50 shadow-lg shadow-primary-500/10 z-10 scale-[1.02] md:scale-105' 
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary-500 shadow-[0_0_10px_rgba(18,161,107,0.5)]"></div>
                )}
                {plan.popular && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary-500/20 border border-primary-500/50 text-primary-300 text-[9px] md:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide backdrop-blur-md">
                    {labels.popular}
                  </div>
                )}

                {/* Content Container */}
                <div className={`flex flex-col h-full p-3 md:p-6 ${plan.popular ? 'pt-8 md:pt-10' : 'pt-5 md:pt-8'}`}>
                  
                  {/* Title & Storage */}
                  <div className="text-center mb-4 md:mb-6">
                    <h3 className={`text-[11px] md:text-lg font-bold mb-2 truncate ${plan.popular ? 'text-primary-400' : 'text-gray-200'}`}>
                      {lang === 'ar' ? plan.name_ar : plan.name_en}
                    </h3>
                    <div className="text-xl md:text-3xl font-black text-white mb-2 tracking-tight dir-ltr">
                      {plan.storage}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                       <span className="text-primary-500 font-bold text-sm md:text-xl">{plan.price} <span className="text-[10px] md:text-xs font-normal text-gray-400">{labels.currency}</span></span>
                       <span className="text-[9px] md:text-xs text-gray-500">{labels.perYear}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/10 mb-4"></div>

                  {/* Features List (Flex Grow pushes button down) */}
                  <ul className="space-y-2 md:space-y-3 mb-6 flex-grow">
                    {(lang === 'ar' ? plan.features_ar : plan.features_en).map((feature, i) => (
                      <li key={i} className="flex items-start gap-1.5 md:gap-2 text-[10px] md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button (Always at bottom) */}
                  <button 
                    type="button"
                    onClick={() => onOrder(lang === 'ar' ? plan.name_ar : plan.name_en)}
                    className={`w-full py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-sm transition-all transform active:scale-95 shadow-lg ${
                      plan.popular 
                        ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-primary-500/20' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                    }`}
                  >
                    {labels.order}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Info Footer */}
        <div className="max-w-3xl mx-auto bg-secondary-900/40 border border-white/5 rounded-2xl p-4 md:p-6 backdrop-blur-sm text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
             <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <p className="text-gray-400 text-xs md:text-sm text-right"> {labels.noteDomain}</p>
             </div>
             <div className="hidden md:block w-px h-8 bg-white/10"></div>
             <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                    <Icon name="check" className="w-4 h-4" />
                 </div>
                 <p className="text-gray-400 text-xs md:text-sm text-right">{labels.noteEmails}</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
