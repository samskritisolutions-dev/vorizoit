"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingTop } from "./floating-top";
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about-section";
import { ServicesSection, type ServiceDoc } from "./sections/services-section";
import { ExpertiseSection } from "./sections/expertise-section";
import { IndustriesSection, type IndustryDoc } from "./sections/industries-section";
import { DifferenceSection } from "./sections/difference-section";
import { CareersSection, type JobItem } from "./sections/careers-section";
import { TestimonialSection, type TestimonialItem } from "./sections/testimonial-section";
import { FaqSection, type FaqDoc } from "./sections/faq-section";
import { ContactSection, type ContactSettings } from "./sections/contact-section";

export interface SiteSettingsDoc extends ContactSettings {
  announcementText?: string | null;
  announcementRight?: string | null;
  announcement?: string | null;
  heroHeadline?: string | null;
  heroHeadlineAccent?: string | null;
  heroIntro?: string | null;
  aboutLead?: string | null;
  aboutBody1?: string | null;
  aboutBody2?: string | null;
  aboutImage?: string | null;
}

export interface VorizoSiteProps {
  initialTestimonials?: TestimonialItem[];
  initialJobs?: JobItem[];
  initialServices?: ServiceDoc[];
  initialIndustries?: IndustryDoc[];
  initialFaqs?: FaqDoc[];
  initialSettings?: SiteSettingsDoc | null;
}

export default function VorizoSite({
  initialTestimonials,
  initialJobs,
  initialServices,
  initialIndustries,
  initialFaqs,
  initialSettings,
}: VorizoSiteProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const announcement =
    initialSettings?.announcementText || initialSettings?.announcement;

  return (
    <>
      <Header announcement={announcement} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection items={initialServices} />
        <ExpertiseSection />
        <IndustriesSection items={initialIndustries} />
        <DifferenceSection />
        <CareersSection items={initialJobs} />
        <TestimonialSection items={initialTestimonials} />
        <FaqSection items={initialFaqs} />
        <ContactSection settings={initialSettings} />
      </main>
      <Footer />
      <FloatingTop />
    </>
  );
}
