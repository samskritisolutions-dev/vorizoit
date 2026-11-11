"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../reveal";

export function AboutSection() {
  return (
    <section className="about section-wrap section-pad" id="about">
      <div className="section-kicker">
        <span>01 — WHO WE ARE</span>
        <span>THE VORIZO APPROACH</span>
      </div>
      <div className="about-grid">
        <Reveal className="about-left">
          <h2>
            Technology
            <br />
            with <em>purpose.</em>
          </h2>
          <div className="about-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Vorizo team collaborating on technology with purpose"
              className="about-image"
            />
            <div className="about-image-badge">
              <span>EST. 2021</span>
              <span>GLOBAL DELIVERY</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="about-right" delay={0.12}>
          <div className="about-copy">
            <p className="lead">
              We’re a technology partner focused on making complex things feel
              simple.
            </p>
            <p>
              Established in 2021, Vorizo Info Tech is a women-owned technology
              organization headquartered in the United States, with operations
              across the US and India. We bring together experienced people,
              practical thinking and a commitment to doing the work right.
            </p>
            <p>
              From software development and cloud solutions to cybersecurity,
              data management, consulting and outsourcing, we help organizations
              stay future-ready and competitive.
            </p>
            <a className="underlined-link" href="#contact">
              Get to know us <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="stats-row">
        <div>
          <strong>2021</strong>
          <span>Established</span>
        </div>
        <div>
          <strong>US + IN</strong>
          <span>Cross-border delivery</span>
        </div>
        <div>
          <strong>11–50</strong>
          <span>Team size</span>
        </div>
        <div>
          <strong>360°</strong>
          <span>Technology partnership</span>
        </div>
      </div>
    </section>
  );
}
