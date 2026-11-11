"use client";

import { useState } from "react";
import { motion } from "motion/react";

const faqs = [
  [
    "What IT services do you offer?",
    "Our services include web and mobile app development, cloud deployment and support, custom software solutions, consulting, data strategy, business intelligence and process automation.",
  ],
  [
    "Do you provide consulting for digital transformation?",
    "Yes. Our consulting services include data strategy and architecture, business intelligence consulting and process automation to help organizations make informed technology decisions.",
  ],
  [
    "Can your solutions integrate with existing tools and systems?",
    "We build tailored solutions with your existing technology environment and business requirements in mind. Share your current systems with our team so we can discuss integration needs.",
  ],
  [
    "Can I customize analytics tools to match my business goals?",
    "Yes. Our analytics tools support custom filters, exports, real-time data refresh and team collaboration, with dashboards designed around your workflows.",
  ],
  [
    "How long does it take to set up a web-based dashboard?",
    "Timing depends on data sources, complexity, integrations and the features you need. Contact us to discuss your requirements and a practical delivery plan.",
  ],
];

export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="faq section-pad">
      <div className="section-wrap faq-grid">
        <div>
          <div className="section-kicker">
            <span>08 — FAQ</span>
            <span>GOOD QUESTIONS</span>
          </div>
          <h2>
            Curious about
            <br />
            <em>what’s possible?</em>
          </h2>
          <p>Here are a few things people often ask us.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <div
              className={`faq-item ${activeFaq === i ? "active" : ""}`}
              key={question}
            >
              <button
                aria-expanded={activeFaq === i}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span>{question}</span>
                <span className="faq-plus">
                  {activeFaq === i ? "−" : "+"}
                </span>
              </button>
              {activeFaq === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25 }}
                >
                  {answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
