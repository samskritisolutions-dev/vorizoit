import VorizoSite from '@/components/vorizo-site';
import { getCMSData } from '@/lib/cms-client';

export const revalidate = 60;

export default async function HomePage() {
  const {
    initialTestimonials,
    initialJobs,
    initialServices,
    initialIndustries,
    initialFaqs,
    initialSettings,
  } = await getCMSData();

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
