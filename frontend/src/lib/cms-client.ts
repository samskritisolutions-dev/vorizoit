import type { TestimonialItem } from '@/components/sections/testimonial-section';
import type { JobItem } from '@/components/sections/careers-section';
import type { ServiceDoc } from '@/components/sections/services-section';
import type { IndustryDoc } from '@/components/sections/industries-section';
import type { FaqDoc } from '@/components/sections/faq-section';
import type { SiteSettingsDoc } from '@/components/vorizo-site';

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL || '';

async function fetchFromCMS<T>(endpoint: string): Promise<T | null> {
  if (!CMS_URL) return null;

  try {
    const cleanUrl = CMS_URL.replace(/\/+$/, '');
    const url = `${cleanUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`CMS fetch failed for ${endpoint}: HTTP ${res.status}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.warn(`CMS fetch error for ${endpoint}:`, error);
    return null;
  }
}

export async function getCMSData() {
  const [
    testimonialsRes,
    jobsRes,
    servicesRes,
    industriesRes,
    faqsRes,
    settingsRes,
  ] = await Promise.all([
    fetchFromCMS<{ docs: TestimonialItem[] }>('/api/testimonials?sort=order&limit=100'),
    fetchFromCMS<{ docs: JobItem[] }>('/api/jobs?sort=order&limit=100'),
    fetchFromCMS<{ docs: ServiceDoc[] }>('/api/services?sort=order&limit=100'),
    fetchFromCMS<{ docs: IndustryDoc[] }>('/api/industries?sort=order&limit=100'),
    fetchFromCMS<{ docs: FaqDoc[] }>('/api/faqs?sort=order&limit=100'),
    fetchFromCMS<SiteSettingsDoc>('/api/globals/site-settings'),
  ]);

  return {
    initialTestimonials: testimonialsRes?.docs || [],
    initialJobs: jobsRes?.docs || [],
    initialServices: servicesRes?.docs || [],
    initialIndustries: industriesRes?.docs || [],
    initialFaqs: faqsRes?.docs || [],
    initialSettings: settingsRes || null,
  };
}
