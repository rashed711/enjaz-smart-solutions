import { SiteSettings, Service, Project, TeamMember } from '../types';

export const MOCK_SETTINGS: SiteSettings = {
  company_name_ar: "إنجاز تك",
  company_name_en: "Enjaz Tech",
  hero_title_ar: "نحول أفكارك إلى واقع رقمي متكامل",
  hero_subtitle_ar: "شريكك الاستراتيجي في تطوير البرمجيات، تصميم واجهات المستخدم، والتسويق الرقمي. نبتكر حلولاً تقنية تضمن نمو أعمالك.",
  phone: "+966 50 000 0000",
  email: "info@enjaztech.com",
  whatsapp_url: "https://wa.me/966500000000",
  projects_count: 150,
  years_experience: 12,
  satisfaction_rate: 98,
  support_hours: "24/7"
};

export const MOCK_SERVICES: Service[] = [

  {
    id: 1,
    title_ar: "الاستضافة والخدمات السحابية",
    description_ar: "حلول استضافة آمنة وسريعة مع خدمات البريد الإلكتروني للشركات.",
    icon_name: "server"
  },
  {
    id: 2,
    title_ar: "تطوير المواقع والتطبيقات",
    description_ar: "بناء مواقع وتطبيقات ويب حديثة باستخدام أحدث التقنيات لضمان الأداء العالي والأمان.",
    icon_name: "code"
  },
  {
    id: 3,
    title_ar: "تصميم واجهة وتجربة المستخدم",
    description_ar: "تصاميم عصرية تركز على سهولة الاستخدام وجاذبية المظهر لتعزيز تفاعل العملاء.",
    icon_name: "palette"
  },
  {
    id: 4,
    title_ar: "التسويق الرقمي و SEO",
    description_ar: "تحسين ظهور موقعك في محركات البحث وإدارة حملات إعلانية تحقق أعلى عائد استثمار.",
    icon_name: "trending-up"
  },
  
];

export const MOCK_PROJECTS: Project[] = [
  { id: 1, title_ar: "منصة تعليمية ذكية", category: "Web App", image_url: "https://picsum.photos/600/400?random=1" },
  { id: 2, title_ar: "متجر إلكتروني متكامل", category: "E-commerce", image_url: "https://picsum.photos/600/400?random=2" },
  { id: 3, title_ar: "تطبيق حجوزات طبية", category: "Mobile App", image_url: "https://picsum.photos/600/400?random=3" },
  { id: 4, title_ar: "موقع شركة عقارية", category: "Corporate", image_url: "https://picsum.photos/600/400?random=4" },
];

export const MOCK_TEAM: TeamMember[] = [
  { id: 1, name_ar: "أحمد محمد", role_ar: "مدير تقني", image_url: "https://picsum.photos/200/200?random=10" },
  { id: 2, name_ar: "سارة علي", role_ar: "مصممة UI/UX", image_url: "https://picsum.photos/200/200?random=11" },
  { id: 3, name_ar: "خالد عمر", role_ar: "مطور واجهات", image_url: "https://picsum.photos/200/200?random=12" },
];