"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../reveal";

const expertise = [
  ["01", "UI Development", "30+ React specialists"],
  ["02", "Programming", "20+ expert programmers"],
  ["03", "AWS", "25+ AWS architects"],
  ["04", "Java", "50+ Java developers"],
  ["05", "Big Data", "Data solutions"],
  ["06", "Cisco", "20+ Cisco network engineers"],
];

export function ExpertiseSection() {
  return (
    <section className="expertise section-wrap section-pad" id="expertise">
      <div className="section-kicker">
        <span>03 — OUR EXPERTISE</span>
        <span>PEOPLE. PLATFORMS. POSSIBILITY.</span>
      </div>
      <div className="expertise-grid">
        <Reveal>
          <h2>
            Deep skills.
            <br />
            <em>Clear outcomes.</em>
          </h2>
          <p className="section-description">
            Our specialists across programming, cloud and networking bring
            the right technical depth to every challenge.
          </p>
          <a className="button button-outline" href="#contact">
            Talk to our team <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <div className="expertise-list">
          {expertise.map(([n, title, desc], i) => (
            <Reveal key={n} delay={i * 0.04} className="expertise-item">
              <span className="expertise-num">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ArrowUpRight className="expertise-arrow" size={18} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
