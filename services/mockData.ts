
import { SiteSettings, Service, Project, TeamMember } from '../types';

export const MOCK_SETTINGS: SiteSettings = {
  company_name_ar: "انجاز للحلول الذكية",
  company_name_en: "Enjaz Smart Solutions",
  hero_title_ar: "نحول أفكارك إلى واقع رقمي متكامل",
  hero_title_en: "Turning Your Ideas into a Digital Reality",
  hero_subtitle_ar: "شريكك الاستراتيجي في تطوير البرمجيات، تصميم واجهات المستخدم، والتسويق الرقمي. نبتكر حلولاً تقنية تضمن نمو أعمالك.",
  hero_subtitle_en: "Your strategic partner in software development, UI/UX design, and digital marketing. We innovate technical solutions to ensure your business growth.",
  phone: "+20 12 25251888",
  email: "info@enjaz.app",
  address_ar: "مكرم عبيد، مدينة نصر، القاهرة",
  address_en: "Makram Ebeid, Nasr City, Cairo",
  whatsapp_url: "https://wa.me/201225251888",
  projects_count: 150,
  years_experience: 12,
  satisfaction_rate: 98,
  support_hours: "24/7"
};

export const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    title_ar: "الاستضافة والخدمات السحابية",
    title_en: "Hosting & Cloud Services",
    description_ar: "حلول استضافة آمنة وسريعة مع خدمات البريد الإلكتروني للشركات.",
    description_en: "Secure and fast hosting solutions with business email services.",
    icon_name: "server"
  },
  {
    id: 2,
    title_ar: "تطوير المواقع والتطبيقات",
    title_en: "Web & App Development",
    description_ar: "بناء مواقع وتطبيقات ويب حديثة باستخدام أحدث التقنيات لضمان الأداء العالي والأمان.",
    description_en: "Building modern websites and web apps using the latest technologies for high performance.",
    icon_name: "code"
  },
  {
    id: 3,
    title_ar: "تصميم واجهة وتجربة المستخدم",
    title_en: "UI/UX Design",
    description_ar: "تصاميم عصرية تركز على سهولة الاستخدام وجاذبية المظهر لتعزيز تفاعل العملاء.",
    description_en: "Modern designs focused on usability and aesthetics to enhance customer engagement.",
    icon_name: "palette"
  },
  {
    id: 4,
    title_ar: "التسويق الرقمي و SEO",
    title_en: "Digital Marketing & SEO",
    description_ar: "تحسين ظهور موقعك في محركات البحث وإدارة حملات إعلانية تحقق أعلى عائد استثمار.",
    description_en: "Improving search engine visibility and managing ad campaigns for high ROI.",
    icon_name: "trending-up"
  },
];

export const MOCK_PROJECTS: Project[] = [
  { id: 1, title_ar: "منصة تعليمية ذكية", title_en: "Smart LMS Platform", category: "Web App", image_url: "https://picsum.photos/600/400?random=1" },
  { id: 2, title_ar: "متجر إلكتروني متكامل", title_en: "E-commerce Store", category: "E-commerce", image_url: "https://picsum.photos/600/400?random=2" },
  { id: 3, title_ar: "تطبيق حجوزات طبية", title_en: "Medical Booking App", category: "Mobile App", image_url: "https://picsum.photos/600/400?random=3" },
  { id: 4, title_ar: "موقع شركة عقارية", title_en: "Real Estate Website", category: "Corporate", image_url: "https://picsum.photos/600/400?random=4" },
];

export const MOCK_TEAM: TeamMember[] = [
  { id: 1, name_ar: "أحمد محمد", name_en: "Ahmed Mohamed", role_ar: "مدير تقني", role_en: "CTO", image_url: "https://picsum.photos/200/200?random=10" },
  { id: 2, name_ar: "سارة علي", name_en: "Sara Ali", role_ar: "مصممة UI/UX", role_en: "UI/UX Designer", image_url: "https://picsum.photos/200/200?random=11" },
  { id: 3, name_ar: "خالد عمر", name_en: "Khaled Omar", role_ar: "مطور واجهات", role_en: "Frontend Dev", image_url: "https://picsum.photos/200/200?random=12" },
];
