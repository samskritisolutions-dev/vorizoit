"use client";

import {
  ArrowUpRight,
  Compass,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Reveal } from "../reveal";

const industries = [
  {
    n: "01",
    category: "HEALTHCARE",
    title: "Healthcare & Life Sciences",
    headline: "Connected patient care & compliant clinical systems",
    desc: "HIPAA-ready telehealth platforms, EHR integrations, patient telemetry, and secure cloud infrastructure designed for healthcare providers.",
    tags: ["HIPAA & FHIR APIs", "Patient Portals", "Clinical Telemetry"],
    icon: HeartPulse,
  },
  {
    n: "02",
    category: "COMMERCE",
    title: "Retail & Digital Commerce",
    headline: "High-concurrency storefronts & unified inventory",
    desc: "Headless commerce architectures, real-time inventory sync across channels, sub-second search engines, and omnichannel checkout workflows.",
    tags: ["Headless Commerce", "Omnichannel POS", "Real-Time Catalog"],
    icon: ShoppingBag,
  },
  {
    n: "03",
    category: "FINTECH",
    title: "Financial Services & Fintech",
    headline: "High-assurance transaction rails & compliance",
    desc: "PCI-DSS compliant payment gateways, automated reconciliation engines, fraud analytics, and bank-grade zero-trust cloud microservices.",
    tags: ["PCI-DSS & SOC 2", "Fraud Detection", "Ledger Accounting"],
    icon: Landmark,
  },
  {
    n: "04",
    category: "INDUSTRY 4.0",
    title: "Manufacturing & Smart Facilities",
    headline: "Connected production & predictive factory telemetry",
    desc: "IIoT sensor telemetry, factory-floor dashboards, predictive maintenance monitoring, and seamless ERP/supply-chain synchronization.",
    tags: ["IIoT Telemetry", "Predictive Alerts", "ERP Integration"],
    icon: Factory,
  },
  {
    n: "05",
    category: "HOSPITALITY",
    title: "Hospitality & Travel",
    headline: "Frictionless guest journeys & reservation engines",
    desc: "Direct reservation engines, keyless mobile check-in APIs, multi-property management dashboards, and automated guest communication channels.",
    tags: ["Smart Reservations", "Mobile Check-In", "Property Ops"],
    icon: Compass,
  },
  {
    n: "06",
    category: "CUSTOM VENTURES",
    title: "Custom Enterprise Domains",
    headline: "Tailored software for complex domain challenges",
    desc: "Have a proprietary workflow or niche industry model? We engineer dedicated custom software platforms from architecture spike to full enterprise production.",
    tags: ["Proprietary SaaS", "Cloud Native", "Legacy Modernization"],
    icon: Sparkles,
    isAction: true,
  },
];

export function IndustriesSection() {
  return (
    <section className="industries section-pad" id="industries">
      <div className="section-wrap">
        <div className="section-kicker">
          <span>04 — INDUSTRIES</span>
          <span>BUILT AROUND YOUR WORLD</span>
        </div>

        <div className="ind-header">
          <Reveal>
            <h2>
              Different worlds.
              <br />
              <em>One agile partner.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="ind-lead-box">
              <p className="ind-lead">
                We bridge deep regulatory and operational domain knowledge with high-velocity engineering. 
                From clinical healthcare pipelines to high-frequency fintech ledgers, our systems are architected to perform under real-world pressure.
              </p>
              <div className="ind-pills-strip">
                <span className="ind-pill">HIPAA &amp; FHIR</span>
                <span className="ind-pill">PCI-DSS Level 1</span>
                <span className="ind-pill">Edge IIoT</span>
                <span className="ind-pill">Headless POS</span>
                <span className="ind-pill">Real-Time Booking</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="ind-grid">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.n}
              delay={i * 0.05}
              className={`ind-card ${ind.isAction ? "ind-card-action" : ""}`}
            >
              <div className="ind-card-top">
                <span className="ind-card-num">{ind.n} / {ind.category}</span>
                <div className="ind-icon-box">
                  <ind.icon size={20} strokeWidth={1.5} />
                </div>
              </div>

              <div className="ind-card-body">
                <h3>{ind.title}</h3>
                <div className="ind-card-headline">{ind.headline}</div>
                <p>{ind.desc}</p>

                <div className="ind-tags">
                  {ind.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="ind-card-footer">
                {ind.isAction ? (
                  <a href="#contact" className="ind-action-btn">
                    <span>Explore together</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <a href="#contact" className="ind-link" aria-label={`Discuss ${ind.title} solutions`}>
                    <span>Discuss sector</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
