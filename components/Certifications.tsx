// components/Certifications.tsx
"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-900/50 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Verified <span className="text-cyan-400">Credentials</span></h2>
          <p className="text-slate-400">Continuous learning and professional certifications.</p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <div className="mb-3 sm:mb-0">
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-slate-500 font-mono">{cert.date}</span>
                <span className="flex items-center gap-1 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                  Verify <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}