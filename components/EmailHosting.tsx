
import React from 'react';
import { Reveal } from './Reveal';
import { Icon } from './Icon';

interface EmailHostingProps {
  onBack: () => void;
  onOrder: (planName: string) => void;
}

const PLANS = [
  {
    id: 1,
    name: "الباقة الأساسية",
    storage: "1 جيجا",
    price: "800",
    popular: false,
    features: ["مساحة تخزينية 1 GB", "عدد غير محدود من الإيميلات", "حماية من الفيروسات", "نسخ احتياطي يومي"]
  },
  {
    id: 2,
    name: "الباقة الشاملة",
    storage: "5 جيجا",
    price: "2000",
    popular: true,
    features: ["مساحة تخزينية 5 GB", "عدد غير محدود من الإيميلات", "حماية متقدمة (Spam Filter)", "دعم فني ذو أولوية"]
  },
  {
    id: 3,
    name: "باقة الشركات",
    storage: "10 جيجا",
    price: "4000",
    popular: false,
    features: ["مساحة تخزينية 10 GB", "عدد غير محدود من الإيميلات", "لوحة تحكم كاملة", "ضمان تواجد 99.9%"]
  },
  {
    id: 4,
    name: "باقة الترا",
    storage: "20 جيجا",
    price: "5000",
    popular: false,
    features: ["مساحة تخزينية 20 GB", "عدد غير محدود من الإيميلات", "أداء عالي السرعة", "نقل مجاني للإيميلات القديمة"]
  },
  {
    id: 5,
    name: "باقة برو",
    storage: "50 جيجا",
    price: "12000",
    popular: false,
    features: ["مساحة تخزينية 50 GB", "عدد غير محدود من الإيميلات", "سيرفر خاص (Dedicated IP)", "مدير حساب مخصص"]
  }
];

export const EmailHosting: React.FC<EmailHostingProps> = ({ onBack, onOrder }) => {
  return (
    <div className="min-h-screen bg-secondary-950 pt-24 pb-20 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-secondary-900 to-secondary-950 z-0"></div>
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[100px] animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>العودة للرئيسية</span>
          </button>
          
          <Reveal width="100%">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
              باقات <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">البريد الإلكتروني</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              حلول بريد إلكتروني احترافية باسم شركتك، تمنحك المصداقية والأمان الذي تستحقه أعمالك.
            </p>
          </Reveal>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100} className="h-full">
              <div className={`relative h-full flex flex-col rounded-2xl p-6 border transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 ${
                plan.popular 
                  ? 'bg-secondary-900/80 border-primary-500 shadow-xl shadow-primary-500/10 scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-primary-500/30'
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    الأكثر طلباً
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-primary-400' : 'text-white'}`}>{plan.name}</h3>
                  <div className="text-3xl font-black text-white mb-1">{plan.storage}</div>
                  <div className="text-primary-500 font-bold text-xl">{plan.price} <span className="text-xs text-gray-500 font-normal">ج.م / سنوياً</span></div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onOrder(plan.name)}
                  className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/30' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  اطلب الآن
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Notes */}
        <div className="bg-secondary-900/50 border border-white/5 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-right">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">تنبيه هام</h4>
                <p className="text-gray-400 text-sm">جميع الباقات المذكورة أعلاه <span className="text-red-400 font-bold">لا تشمل تكلفة الدومين</span> (اسم النطاق).</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>

            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                <Icon name="check" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">ميزة حصرية</h4>
                <p className="text-gray-400 text-sm">يمكنك إنشاء <span className="text-primary-400 font-bold">أي عدد من حسابات الإيميل</span> داخل المساحة المتاحة.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
