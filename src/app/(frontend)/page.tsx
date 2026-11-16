import configPromise from '@/payload.config';
import { getPayload } from 'payload';
import VorizoSite, { type SiteSettingsDoc } from '@/components/vorizo-site';
import { seedInitialContent } from '@/lib/seed';
import type { TestimonialItem } from '@/components/sections/testimonial-section';
import type { JobItem } from '@/components/sections/careers-section';
import type { ServiceDoc } from '@/components/sections/services-section';
import type { IndustryDoc } from '@/components/sections/industries-section';
import type { FaqDoc } from '@/components/sections/faq-section';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let initialTestimonials: TestimonialItem[] = [];
  let initialJobs: JobItem[] = [];
  let initialServices: ServiceDoc[] = [];
  let initialIndustries: IndustryDoc[] = [];
  let initialFaqs: FaqDoc[] = [];
  let initialSettings: SiteSettingsDoc | null = null;

  try {
    const payload = await getPayload({ config: configPromise });

    // Ensure default items are seeded into the database on first run
    await seedInitialContent(payload);

    const [testimonialsRes, jobsRes, servicesRes, industriesRes, faqsRes, settings] =
      await Promise.all([
        payload.find({ collection: 'testimonials', sort: 'order', limit: 100 }),
        payload.find({ collection: 'jobs', sort: 'order', limit: 100 }),
        payload.find({ collection: 'services', sort: 'order', limit: 100 }),
        payload.find({ collection: 'industries', sort: 'order', limit: 100 }),
        payload.find({ collection: 'faqs', sort: 'order', limit: 100 }),
        payload.findGlobal({ slug: 'site-settings' }).catch(() => null),
      ]);

    initialTestimonials = testimonialsRes.docs as unknown as TestimonialItem[];
    initialJobs = jobsRes.docs as unknown as JobItem[];
    initialServices = servicesRes.docs as unknown as ServiceDoc[];
    initialIndustries = industriesRes.docs as unknown as IndustryDoc[];
    initialFaqs = faqsRes.docs as unknown as FaqDoc[];
    initialSettings = settings as unknown as SiteSettingsDoc | null;
  } catch (error) {
    console.error(
      'Error connecting to Payload CMS database. Falling back to default static content:',
      error
    );
  }

  return (
    <VorizoSite
      initialTestimonials={initialTestimonials}
      initialJobs={initialJobs}
      initialServices={initialServices}
      initialIndustries={initialIndustries}
      initialFaqs={initialFaqs}
      initialSettings={initialSettings}
    />
  );
}
