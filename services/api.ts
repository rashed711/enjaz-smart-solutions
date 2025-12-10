import { SiteSettings, Service, Project, TeamMember, ContactForm } from '../types';
import { MOCK_SETTINGS, MOCK_SERVICES, MOCK_PROJECTS, MOCK_TEAM } from './mockData';

// Change this to your actual PHP API URL when ready
const API_BASE_URL = 'http://localhost/api'; 
const USE_MOCK = true; // Set to false to use Real PHP API

export const ApiService = {
  getSettings: async (): Promise<SiteSettings> => {
    if (USE_MOCK) return new Promise(resolve => setTimeout(() => resolve(MOCK_SETTINGS), 500));
    try {
      const res = await fetch(`${API_BASE_URL}/settings`);
      if (!res.ok) throw new Error('Network error');
      return await res.json();
    } catch (e) {
      console.warn("API Error, falling back to mock", e);
      return MOCK_SETTINGS;
    }
  },

  getServices: async (): Promise<Service[]> => {
    if (USE_MOCK) return new Promise(resolve => setTimeout(() => resolve(MOCK_SERVICES), 600));
    try {
      const res = await fetch(`${API_BASE_URL}/services`);
      return await res.json();
    } catch (e) {
      return MOCK_SERVICES;
    }
  },

  getProjects: async (): Promise<Project[]> => {
    if (USE_MOCK) return MOCK_PROJECTS;
    try {
      const res = await fetch(`${API_BASE_URL}/projects`);
      return await res.json();
    } catch (e) {
      return MOCK_PROJECTS;
    }
  },

  getTeam: async (): Promise<TeamMember[]> => {
    if (USE_MOCK) return MOCK_TEAM;
    return []; // Simple fallback
  },

  sendContact: async (data: ContactForm): Promise<{success: boolean; message: string}> => {
    if (USE_MOCK) {
      return new Promise(resolve => setTimeout(() => resolve({success: true, message: "تم الإرسال بنجاح (تجريبي)"}), 1000));
    }
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      return { success: res.ok, message: json.message || "حدث خطأ ما" };
    } catch (e) {
      return { success: false, message: "فشل الاتصال بالخادم" };
    }
  }
};