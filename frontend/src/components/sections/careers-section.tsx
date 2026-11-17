"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../reveal";

export interface JobItem {
  id?: string | number;
  title: string;
  department?: string | null;
  type?: string | null;
  location?: string | null;
  desc?: string | null;
  description?: string | null;
}

const defaultJobs: JobItem[] = [
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

export function CareersSection({ items }: { items?: JobItem[] }) {
  const jobList = items && items.length > 0 ? items : defaultJobs;

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
          {jobList.map((job, idx) => {
            const badgeType = job.department || job.type || "OPPORTUNITY";
            const locationText = job.location || "HYDERABAD / FLEXIBLE";
            const jobSummary = job.description || job.desc || "";

            return (
              <Reveal key={job.id ?? job.title} delay={idx * 0.08} className="job-card">
                <div className="job-main">
                  <span className="job-type">{badgeType}</span>
                  <h3>{job.title}</h3>
                  <p>{jobSummary}</p>
                </div>
                <div className="job-action-wrap">
                  <span className="job-meta">{locationText}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
