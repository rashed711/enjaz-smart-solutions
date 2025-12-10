
export interface SiteSettings {
  company_name_ar: string;
  company_name_en: string;
  hero_title_ar: string;
  hero_title_en: string; // Added
  hero_subtitle_ar: string;
  hero_subtitle_en: string; // Added
  phone: string;
  email: string;
  address_ar: string;
  address_en: string; // Added
  whatsapp_url: string;
  projects_count: number;
  years_experience: number;
  satisfaction_rate: number;
  support_hours: string;
}

export interface Service {
  id: number;
  title_ar: string;
  title_en: string; // Added
  description_ar: string;
  description_en: string; // Added
  icon_name: string;
}

export interface Project {
  id: number;
  title_ar: string;
  title_en: string; // Added
  category: string; // Usually kept simple, or can be duplicated if strict translation needed
  image_url: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string;
}

export interface TeamMember {
  id: number;
  name_ar: string;
  name_en: string;
  role_ar: string;
  role_en: string;
  image_url: string;
}
