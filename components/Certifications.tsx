// components/Certifications.tsx
"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[var(--color-base)] relative border-b border-structural">
      <div className="p-8 lg:p-12 xl:p-16 border-b border-structural">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter text-ink-primary" style={{ fontFamily: 'var(--font-bricolage)' }}>
            Verified Credentials
          </h2>
          <p className="text-ink-secondary text-lg">Continuous learning and professional certifications.</p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group grid grid-cols-1 md:grid-cols-12 items-center border-b border-structural last:border-b-0 hover:bg-[#F2F2F2] transition-colors duration-300"
          >
            {/* Date / Metadata Column */}
            <div className="md:col-span-3 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-structural flex items-center h-full">
              <span className="text-ink-secondary font-mono text-sm tracking-widest">{cert.date}</span>
            </div>
            
            {/* Title / Issuer Column */}
            <div className="md:col-span-6 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-structural flex flex-col justify-center h-full">
              <h3 className="text-xl font-bold text-ink-primary tracking-tight mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-ink-secondary font-mono uppercase tracking-wider">{cert.issuer}</p>
            </div>

            {/* Action Column */}
            <div className="md:col-span-3 p-6 md:p-8 lg:p-12 flex items-center justify-between md:justify-end h-full">
              <span className="font-mono text-xs text-ink-secondary uppercase tracking-widest group-hover:text-accent transition-colors hidden md:block">
                Verify
              </span>
              <span className="w-8 h-8 flex items-center justify-center border border-structural text-ink-primary group-hover:border-accent group-hover:text-white group-hover:bg-accent transition-colors ml-4">
                <i className="fa-solid fa-arrow-right -rotate-45 text-xs"></i>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}