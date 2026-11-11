"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../reveal";

const jobs = [
  {
    title: "Software Engineer",
    type: "ENGINEERING",
    location: "HYDERABAD / FLEXIBLE",
    desc: "Build impactful solutions with modern technologies and scalable cloud architectures.",
  },
  {
    title: "Frontend Developer",
    type: "ENGINEERING",
    location: "HYDERABAD / FLEXIBLE",
    desc: "Create intuitive, high-performance interfaces and thoughtful digital experiences.",
  },
  {
    title: "Backend Developer",
    type: "ENGINEERING",
    location: "HYDERABAD / FLEXIBLE",
    desc: "Develop reliable, resilient systems and microservices that power enterprise products.",
  },
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
          <Reveal>
            <h2>
              Good work starts
              <br />
              with <em>good people.</em>
            </h2>
            <p>
              Grow your skills, take on meaningful challenges and build
              what’s next with Vorizo.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              className="button button-dark"
              href="mailto:rakeshm@vorizoit.com?subject=Careers%20at%20Vorizo"
            >
              Share your profile <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
        <div className="job-list">
          {jobs.map((job, idx) => (
            <Reveal key={job.title} delay={idx * 0.08} className="job-card">
              <div className="job-main">
                <span className="job-type">{job.type}</span>
                <h3>{job.title}</h3>
                <p>{job.desc}</p>
              </div>
              <div className="job-action-wrap">
                <span className="job-meta">{job.location}</span>
                <a
                  href={`mailto:rakeshm@vorizoit.com?subject=${encodeURIComponent(`${job.title} Application`)}`}
                  aria-label={`Apply for ${job.title}`}
                  className="job-apply-link"
                >
                  <span>Apply</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
