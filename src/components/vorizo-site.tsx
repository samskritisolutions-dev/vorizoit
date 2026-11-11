"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingTop } from "./floating-top";
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about-section";
import { ServicesSection } from "./sections/services-section";
import { ExpertiseSection } from "./sections/expertise-section";
import { IndustriesSection } from "./sections/industries-section";
import { DifferenceSection } from "./sections/difference-section";
import { CareersSection } from "./sections/careers-section";
import { TestimonialSection } from "./sections/testimonial-section";
import { FaqSection } from "./sections/faq-section";
import { ContactSection } from "./sections/contact-section";

export default function VorizoSite() {
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

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExpertiseSection />
        <IndustriesSection />
        <DifferenceSection />
        <CareersSection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingTop />
    </>
  );
}
