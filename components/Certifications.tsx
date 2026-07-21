"use client";

import { certifications } from "@/data/certifications";
import { Reveal } from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-surface-base relative pt-24 pb-24 border-b border-structural">
      <div className="mb-16">
        <Reveal>
          <h2 className="text-4xl lg:text-[4rem] font-black tracking-tighter text-text-primary leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>
            Credentials.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-secondary text-lg mt-4 max-w-xl font-light">
            Continuous learning and verified professional certifications.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col border-t border-structural">
        {certifications.map((cert, index) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 md:grid-cols-12 items-center py-8 lg:py-10 border-b border-structural last:border-b-0 hover:bg-surface-elevated transition-colors duration-500"
          >
            {/* Date / Metadata Column */}
            <div className="md:col-span-3 flex items-center h-full mb-4 md:mb-0">
              <span className="text-text-secondary font-mono text-sm tracking-widest">{cert.date}</span>
            </div>
            
            {/* Title / Issuer Column */}
            <div className="md:col-span-6 flex flex-col justify-center h-full">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-xs text-text-secondary font-mono uppercase tracking-wider">{cert.issuer}</p>
            </div>

            {/* Action Column */}
            <div className="md:col-span-3 flex items-center justify-start md:justify-end h-full mt-4 md:mt-0">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest group-hover:text-accent transition-colors hidden lg:block">
                Verify Credential
              </span>
              <span className="w-10 h-10 flex items-center justify-center border border-structural text-text-primary rounded-full group-hover:border-accent group-hover:text-surface-base group-hover:bg-accent transition-all duration-300 ml-0 lg:ml-6">
                <i className="fa-solid fa-arrow-right -rotate-45 text-sm"></i>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}