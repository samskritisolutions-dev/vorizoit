"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MarqueeVelocity } from "../marquee-velocity";

const slides = [
  {
    id: "01",
    title: "Enterprise Cloud & Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "02",
    title: "Dual-Shore Velocity Pods",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "03",
    title: "Full-Lifecycle Software Craft",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "04",
    title: "Zero-Downtime Data & Telemetry",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        {/* Full-bleed background slideshow */}
        <div className="hero-slider-wrap">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              className="hero-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="hero-slide-img"
              />
            </motion.div>
          </AnimatePresence>

          {/* Cinematic dark overlays for maximum contrast and legibility */}
          <div className="hero-overlay" />
          <div className="hero-grid-mesh" />
        </div>

        {/* Content on top */}
        <div className="section-wrap hero-content-layout">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="eyebrow-line" /> SOFTWARE · CLOUD · CONSULTING
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              Ideas into
              <br />
              <em>impact.</em>
            </motion.h1>
            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              We build and manage modern IT systems with precision — delivering
              clear solutions, intuitive experiences and real outcomes for
              ambitious businesses.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
            >
              <a className="button button-lime" href="#contact">
                Start a conversation <ArrowUpRight size={17} />
              </a>
              <a className="text-link text-link-light" href="#services">
                Explore what we do <ArrowDown size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MarqueeVelocity />
    </>
  );
}
