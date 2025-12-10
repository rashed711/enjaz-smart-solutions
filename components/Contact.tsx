import React, { useState } from 'react';
import { ApiService } from '../services/api';
import { SiteSettings } from '../types';
import { Reveal } from './Reveal';

interface ContactProps {
  settings: SiteSettings;
}

export const Contact: React.FC<ContactProps> = ({ settings }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service_type: 'General', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const res = await ApiService.sendContact(formData);
    if (res.success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service_type: 'General', message: '' });
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-5 py-4 bg-gray-50 rounded-xl border-2 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-300 text-secondary-900 placeholder-gray-400 font-medium text-right";

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-6">
        <Reveal width="100%">
          <div className="bg-secondary-950 rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Info Side */}
            <div className="lg:w-5/12 p-8 lg:p-16 bg-gradient-to-br from-secondary-900 to-secondary-950 text-white flex flex-col justify-between relative overflow-hidden order-1 lg:order-1">
              {/* Animated Blobs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-4xl font-extrabold mb-4 lg:mb-6 leading-tight">ابدأ رحلة تحولك الرقمي معنا</h2>
                <p className="text-gray-300 mb-8 lg:mb-12 text-base lg:text-lg font-light">
                  سواء كانت لديك فكرة تطبيق، موقع شركة، أو تحتاج لاستشارة تقنية، فريقنا جاهز لتحويل أفكارك لواقع.
                </p>
                
                <div className="space-y-6 lg:space-y-8">
                  <div className="flex items-start gap-4 lg:gap-5 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm lg:text-base">اتصل بنا</h4>
                      <p className="text-base lg:text-lg dir-ltr text-right text-gray-300 group-hover:text-primary-300 transition-colors font-sans">{settings.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 lg:gap-5 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shrink-0">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 text-sm lg:text-base">راسلنا</h4>
                      <p className="text-base lg:text-lg text-gray-300 group-hover:text-primary-300 transition-colors break-all">{settings.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-12 relative z-10 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400">نحن متواجدون لخدمتكم: <span className="text-white font-bold">{settings.support_hours}</span></p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-7/12 p-8 lg:p-16 bg-white relative order-2 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-secondary-900 mb-6 lg:mb-8">املأ النموذج وسنتواصل معك</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" className={inputClasses} placeholder="الاسم الكامل" />
                  </div>
                  <div>
                    <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className={inputClasses} placeholder="رقم الهاتف" />
                  </div>
                </div>

                <div>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className={inputClasses} placeholder="البريد الإلكتروني" />
                </div>

                <div>
                  <select name="service_type" value={formData.service_type} onChange={handleChange} className={inputClasses}>
                    <option value="General">استفسار عام</option>
                    <option value="Development">تطوير برمجي (Web/App)</option>
                    <option value="Marketing">تسويق رقمي & SEO</option>
                    <option value="Design">تصميم هوية و UI/UX</option>
                    <option value="Hosting">استضافة وسيرفرات</option>
                  </select>
                </div>

                <div>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClasses} placeholder="تفاصيل المشروع..."></textarea>
                </div>

                <button 
                  disabled={status === 'loading' || status === 'success'} 
                  type="submit" 
                  className={`w-full py-4 lg:py-5 rounded-xl font-bold text-lg text-white transition-all transform hover:-translate-y-1 hover:shadow-2xl 
                    ${status === 'success' 
                      ? 'bg-green-500 shadow-green-500/40' 
                      : 'bg-primary-600 hover:bg-primary-700 shadow-primary-600/30'}`}
                >
                  {status === 'loading' ? 'جاري الإرسال...' : status === 'success' ? 'تم استلام طلبك بنجاح' : 'إرسال الاستشارة مجاناً'}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};