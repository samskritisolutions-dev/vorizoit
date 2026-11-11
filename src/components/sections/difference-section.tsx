"use client";

import { Briefcase, Cloud, Shield } from "lucide-react";
import { Reveal } from "../reveal";

export function DifferenceSection() {
  return (
    <section className="proof section-pad" id="difference">
      <div className="section-wrap">
        <div className="section-kicker">
          <span>05 — THE DIFFERENCE</span>
          <span>BUILT ON TRUST</span>
        </div>

        <div className="proof-grid">
          <Reveal className="proof-copy">
            <h2>
              Credibility,
              <br />
              capability &amp;
              <br />
              <em>clarity.</em>
            </h2>
            <p className="section-description">
              We bring industry experience and a results-driven mindset to
              every engagement — with a focus on long-term partnerships.
            </p>
          </Reveal>

          <div className="proof-cards">
            <Reveal className="proof-card-wrap proof-card-featured">
              <article className="proof-card">
                <span>01</span>
                <div className="proof-icon">
                  <Briefcase size={25} strokeWidth={1.8} />
                </div>
                <h3>Collaborative partnerships</h3>
                <p>
                  A partnership mindset, clear communication and measurable
                  outcomes supported by SLAs.
                </p>
              </article>
            </Reveal>

            <Reveal className="proof-card-wrap" delay={0.08}>
              <article className="proof-card">
                <span>02</span>
                <div className="proof-icon">
                  <Shield size={25} strokeWidth={1.8} />
                </div>
                <h3>Strong security practices</h3>
                <p>
                  Engineering with security, governance and reliability built
                  into the process.
                </p>
              </article>
            </Reveal>

            <Reveal className="proof-card-wrap" delay={0.16}>
              <article className="proof-card">
                <span>03</span>
                <div className="proof-icon">
                  <Cloud size={25} strokeWidth={1.8} />
                </div>
                <h3>Data insights</h3>
                <p>
                  Useful insights and instrumentation baked into every build.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
