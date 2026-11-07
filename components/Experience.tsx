"use client";

import { experience } from "@/data/experience";
import { Reveal } from "./Reveal";
import { HighlightList } from "./Highlight";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-base relative border-b border-structural pt-24 pb-24">
      <div className="mb-16">
        <Reveal>
          <h2 className="text-4xl lg:text-[4rem] font-black tracking-tighter text-text-primary leading-none" style={{ fontFamily: "var(--font-outfit)" }}>
            Experience.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-secondary text-lg mt-4 max-w-xl font-light">
            Where I&apos;ve shipped AI into production for real teams.
          </p>
        </Reveal>
      </div>

      {/* Rows use border-t only; the section's own border-b closes the list (avoids a double line) */}
      <div className="flex flex-col">
        {experience.map((job, index) => (
          <Reveal key={job.id} delay={0.1 * index} width="100%">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 lg:py-14 border-t border-structural">
              {/* Period / Location */}
              <div className="md:col-span-3 flex flex-col gap-2">
                <span className="text-accent font-mono text-xs tracking-widest uppercase">{job.period}</span>
                <span className="text-text-secondary font-mono text-xs tracking-wider uppercase opacity-70">{job.location}</span>
              </div>

              {/* Role / Company / Results */}
              <div className="md:col-span-9 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
                  {job.role}
                </h3>
                <p className="text-sm text-text-secondary font-mono uppercase tracking-wider mt-2 mb-6">{job.company}</p>
                <HighlightList items={job.highlights} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
