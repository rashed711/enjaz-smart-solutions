
export interface SiteSettings {
  company_name_ar: string;
  company_name_en: string;
  hero_title_ar: string;
  hero_subtitle_ar: string;
  phone: string;
  email: string;
  address_ar: string; // Added address field
  whatsapp_url: string;
  projects_count: number;
  years_experience: number;
  satisfaction_rate: number;
  support_hours: string;
}

export interface Service {
  id: number;
  title_ar: string;
  description_ar: string;
  icon_name: string;
}

export interface Project {
  id: number;
  title_ar: string;
  category: string;
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
  role_ar: string;
  image_url: string;
}
