
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
    features_ar: ["مساحة 1 GB", "إيميلات لا محدودة", "حماية فيروسات"],
    features_en: ["1 GB Storage", "Unlimited Emails", "Virus Protection"]
  },
  {
    id: 2,
    name_ar: "الباقة الشاملة",
    name_en: "Comprehensive Plan",
    storage: "5 GB",
    price: "2000",
    popular: true,
    features_ar: ["مساحة 5 GB", "إيميلات لا محدودة", "Spam Filter", "دعم أولوية"],
    features_en: ["5 GB Storage", "Unlimited Emails", "Spam Filter", "Priority Support"]
  },
  {
    id: 3,
    name_ar: "باقة الشركات",
    name_en: "Business Plan",
    storage: "10 GB",
    price: "4000",
    popular: false,
    features_ar: ["مساحة 10 GB", "إيميلات لا محدودة", "لوحة تحكم", "ضمان 99.9%"],
    features_en: ["10 GB Storage", "Unlimited Emails", "Control Panel", "99.9% Uptime"]
  },
  {
    id: 4,
    name_ar: "باقة الترا",
    name_en: "Ultra Plan",
    storage: "20 GB",
    price: "5000",
    popular: false,
    features_ar: ["مساحة 20 GB", "إيميلات لا محدودة", "أداء عالي", "نقل مجاني"],
    features_en: ["20 GB Storage", "Unlimited Emails", "High Performance", "Free Migration"]
  },
  {
    id: 5,
    name_ar: "باقة برو",
    name_en: "Pro Plan",
    storage: "50 GB",
    price: "12000",
    popular: false,
    features_ar: ["مساحة 50 GB", "إيميلات لا محدودة", "سيرفر خاص", "مدير حساب"],
    features_en: ["50 GB Storage", "Unlimited Emails", "Private Server", "Account Manager"]
  }
];

export const EmailHosting: React.FC<EmailHostingProps> = ({ onNavigate, onOrder, lang }) => {
  const labels = {
    back: lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home',
    title: lang === 'ar' ? 'باقات' : 'Email',
    titleHighlight: lang === 'ar' ? 'البريد الإلكتروني' : 'Hosting Plans',
    desc: lang === 'ar' ? 'حلول بريد إلكتروني احترافية باسم شركتك، تمنحك المصداقية والأمان.' : 'Professional business email solutions that give you credibility and security.',
    popular: lang === 'ar' ? 'الأكثر طلباً' : 'Most Popular',
    currency: lang === 'ar' ? 'ج.م/سنة' : 'EGP/Year',
    order: lang === 'ar' ? 'اطلب الآن' : 'Order Now',
    noteDomain: lang === 'ar' ? 'الباقات لا تشمل الدومين' : 'Plans exclude domain',
    noteEmails: lang === 'ar' ? 'عدد لا نهائي من الإيميلات' : 'Unlimited Emails'
  };

  return (
    <div className="min-h-screen bg-secondary-950 pt-24 pb-20 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-secondary-900 to-secondary-950 z-0"></div>
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[100px] animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <button 
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors group text-sm sm:text-base py-2 px-4 rounded-full bg-white/5"
          >
            <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${lang === 'ar' ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>{labels.back}</span>
          </button>
          
          <Reveal width="100%">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-2 sm:mb-6">
              {labels.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">{labels.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-lg px-4">
              {labels.desc}
            </p>
          </Reveal>
        </div>

        {/* Pricing Grid - Optimized for Mobile (2 Cols) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-6 mb-12 sm:mb-16">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 50} className="h-full">
              <div className={`relative h-full flex flex-col rounded-xl sm:rounded-2xl p-2.5 sm:p-6 border transition-all duration-300 group hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-secondary-900/90 border-primary-500 shadow-xl shadow-primary-500/10 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-primary-500/30'
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg whitespace-nowrap z-20">
                    {labels.popular}
                  </div>
                )}

                <div className="mb-2 sm:mb-6 text-center mt-2">
                  <h3 className={`text-[11px] sm:text-lg font-bold mb-1 truncate ${plan.popular ? 'text-primary-400' : 'text-white'}`}>
                    {lang === 'ar' ? plan.name_ar : plan.name_en}
                  </h3>
                  <div className="text-base sm:text-3xl font-black text-white mb-1 dir-ltr">{plan.storage}</div>
                  <div className="text-primary-500 font-bold text-xs sm:text-xl flex flex-col sm:block">
                    {plan.price} 
                    <span className="text-[9px] sm:text-xs text-gray-500 font-normal sm:mx-1">{labels.currency}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 sm:space-y-3 mb-3 sm:mb-8 flex-grow border-t border-white/5 pt-2 sm:pt-4">
                  {(lang === 'ar' ? plan.features_ar : plan.features_en).map((feature, i) => (
                    <li key={i} className="flex items-start gap-1 sm:gap-2 text-[9px] sm:text-xs text-gray-300 leading-tight">
                      <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onOrder(lang === 'ar' ? plan.name_ar : plan.name_en)}
                  className={`w-full py-1.5 sm:py-3 rounded-lg font-bold text-[10px] sm:text-sm transition-all ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-500' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {labels.order}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Notes */}
        <div className="bg-secondary-900/50 border border-white/5 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4 text-center">
             <div className="flex items-center gap-3 justify-center">
                 <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                 </div>
                 <p className="text-gray-400 text-xs sm:text-sm"> <span className="text-red-400 font-bold">{labels.noteDomain}</span>.</p>
             </div>
             <div className="flex items-center gap-3 justify-center">
                 <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <Icon name="check" className="w-4 h-4" />
                 </div>
                 <p className="text-gray-400 text-xs sm:text-sm"><span className="text-primary-400 font-bold">{labels.noteEmails}</span>.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
