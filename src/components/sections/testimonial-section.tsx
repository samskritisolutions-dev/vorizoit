"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  source: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "01",
    quote:
      "My experience has been both professionally enriching and personally fulfilling. The company fosters a collaborative work environment that encourages innovation, continuous learning, and growth.",
    author: "Dinesh Kumar",
    role: "Vorizo Team Member",
    avatar: "DK",
    source: "TEAM TESTIMONIAL",
  },
  {
    id: "02",
    quote:
      "Vorizo transformed our legacy systems into a resilient, high-throughput cloud environment ahead of schedule. Their engineering squads operated seamlessly as a natural extension of our leadership and core team.",
    author: "Marcus Vance",
    role: "VP of Engineering, Apex Global Systems",
    avatar: "MV",
    source: "CLIENT PERSPECTIVE",
  },
  {
    id: "03",
    quote:
      "The clarity and security rigor Vorizo brought to our data governance pipeline was exceptional. Real-time telemetry and clean architecture allowed us to scale across 12 countries with total confidence.",
    author: "Elena Rostova",
    role: "Chief Technology Officer, Quantix Health",
    avatar: "ER",
    source: "ENTERPRISE PARTNER",
  },
  {
    id: "04",
    quote:
      "Their US strategy paired with India delivery scale gave us the speed, technical precision, and 24/7 momentum we needed. Vorizo is one of the rare technology partners who truly deliver what they commit to.",
    author: "David Henderson",
    role: "Director of Digital Platforms, Meridian Logistics",
    avatar: "DH",
    source: "STRATEGIC ALLIANCE",
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const activeItem = TESTIMONIALS[current];

  return (
    <section className="testimonial section-wrap section-pad" id="testimonials">
      <div className="section-kicker">
        <span>07 — A PARTNER’S PERSPECTIVE</span>
        <span>PEOPLE MAKE THE DIFFERENCE</span>
      </div>

      <div
        className="testimonial-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="testimonial-header">
          <div className="quote-mark">“</div>
          <div className="carousel-controls">
            <span className="carousel-counter">
              <strong>{activeItem.id}</strong> / 0{TESTIMONIALS.length}
            </span>
            <div className="carousel-nav-btns">
              <button
                type="button"
                className="carousel-nav-btn"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="carousel-nav-btn"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="testimonial-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="testimonial-slide"
            >
              <blockquote>{activeItem.quote}</blockquote>
              <div className="quote-author">
                <span className="author-avatar">{activeItem.avatar}</span>
                <div>
                  <b>{activeItem.author}</b>
                  <span>{activeItem.role}</span>
                </div>
                <span className="quote-source">{activeItem.source}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="carousel-pagination">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`carousel-dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${item.id} by ${item.author}`}
            >
              <span className="dot-label">{item.id} · {item.author.split(" ")[0]}</span>
              <span className="dot-bar" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
