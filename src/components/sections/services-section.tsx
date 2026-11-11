"use client";

import { motion } from "motion/react";
import { BarChart3, BrainCircuit, Code2, Database } from "lucide-react";
import { Reveal } from "../reveal";

const services = [
  {
    n: "01 / BUILD",
    title: "IT Services",
    desc: "Purpose-built technology that solves real business challenges and grows with you.",
    items: [
      "Web & mobile app development",
      "Cloud deployment & support",
      "Custom software solutions",
    ],
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Software development and cloud solutions",
    tag: "ENGINEERING",
  },
  {
    n: "02 / ADVISE",
    title: "Consulting Services",
    desc: "Clear direction and practical expertise to help you make confident technology decisions.",
    items: [
      "Data strategy & architecture",
      "Business intelligence consulting",
      "Process automation",
    ],
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Technology consulting and digital strategy",
    tag: "STRATEGY",
  },
  {
    n: "03 / UNDERSTAND",
    title: "Web-based dashboards",
    desc: "Make your data easier to explore, understand and act on with intuitive dashboards.",
    items: [
      "Interactive drill-downs",
      "Millions of rows on hardware",
      "Embeddable & themable",
    ],
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Web-based interactive dashboards",
    tag: "VISUALIZATION",
  },
  {
    n: "04 / OPTIMIZE",
    title: "Powerful analytics tools",
    desc: "Turn information into insight with tools designed around the way your teams work.",
    items: [
      "Real-time data refresh",
      "Custom filters & export",
      "Team collaboration",
    ],
    icon: Database,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Business intelligence and analytics tools",
    tag: "INTELLIGENCE",
  },
];

export function ServicesSection() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-wrap">
        <div className="section-kicker">
          <span>02 — WHAT WE DO</span>
          <span>CAPABILITIES THAT CONNECT</span>
        </div>
        <div className="section-heading">
          <h2>
            Make the complex
            <br />
            <em>work beautifully.</em>
          </h2>
          <p>
            From the first conversation to long-term support, we bring the
            right people and technology together to move your business
            forward.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.07}
              className={`service-card ${i === 0 ? "service-feature" : ""}`}
            >
              <div className="card-top">
                <span>{service.n}</span>
                <motion.span
                  className="card-icon"
                  whileHover={{ y: -3, rotate: 8 }}
                >
                  <service.icon size={19} />
                </motion.span>
              </div>

              <div className="service-image-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="service-image"
                />
                <span className="service-image-tag">{service.tag}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
