"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../reveal";

const jobs = [
  [
    "Software Engineer",
    "Build impactful solutions with modern technologies.",
  ],
  [
    "Frontend Developer",
    "Create intuitive interfaces and thoughtful digital experiences.",
  ],
  [
    "Backend Developer",
    "Develop reliable systems that power great products.",
  ],
];

export function CareersSection() {
  return (
    <section className="careers section-pad" id="careers">
      <div className="section-wrap">
        <div className="section-kicker">
          <span>06 — CAREERS</span>
          <span>MAKE YOUR NEXT MOVE</span>
        </div>
        <div className="careers-head">
          <div>
            <h2>
              Good work starts
              <br />
              with <em>good people.</em>
            </h2>
            <p>
              Grow your skills, take on meaningful challenges and build
              what’s next with Vorizo.
            </p>
          </div>
          <a
            className="button button-dark"
            href="mailto:rakeshm@vorizoit.com?subject=Careers%20at%20Vorizo"
          >
            Share your profile <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="job-list">
          {jobs.map(([title, desc]) => (
            <Reveal key={title} className="job-card">
              <div>
                <span className="job-type">ENGINEERING</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <span className="job-meta">HYDERABAD / FLEXIBLE</span>
              <a
                href={`mailto:rakeshm@vorizoit.com?subject=${encodeURIComponent(`${title} Application`)}`}
                aria-label={`Apply for ${title}`}
              >
                <ArrowUpRight size={18} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
