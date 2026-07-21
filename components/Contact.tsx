"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-base)] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Left Side: Contact Info & Title */}
        <div className="md:col-span-2 lg:col-span-2 p-8 lg:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-structural flex flex-col justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-ink-primary tracking-tighter" style={{ fontFamily: 'var(--font-bricolage)' }}>
              Let&apos;s Work Together
            </h2>
            <p className="text-ink-secondary text-lg mb-12 max-w-xl leading-relaxed">
              Currently open to full-time AI Engineering and Data Science roles. Let&apos;s discuss how I can bring value to your engineering team.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:contact@mohamedsakiss.me" className="inline-flex items-center gap-4 text-lg font-bold text-ink-primary hover:text-accent transition-colors group tracking-tight">
                <div className="w-12 h-12 border border-structural flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                contact@mohamedsakiss.me
              </a>
              
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-structural flex items-center justify-center text-ink-primary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a href="https://github.com/mohamedazizsakiss" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-structural flex items-center justify-center text-ink-primary hover:text-white hover:bg-[#24292e] hover:border-[#24292e] transition-all">
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: CV Actions & QR Code */}
        <div className="p-8 lg:p-12 border-b md:border-b-0 border-structural flex flex-col items-center justify-center bg-[#FAFAFA]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            <div className="p-4 border border-structural bg-white mb-6 transform hover:-translate-y-2 transition-transform duration-300">
              <img src="/Resume-QR.png" alt="Scan to get CV" className="w-32 h-32 object-cover grayscale contrast-125" />
            </div>
            
            <p className="text-xs text-ink-secondary mb-6 font-mono tracking-widest uppercase text-center">Scan for digital CV</p>
            
            <a href="/resume.pdf" download="Mohamed_Aziz_Sakiss_Resume.pdf" className="w-full py-4 border border-ink-primary bg-ink-primary text-white hover:bg-white hover:text-ink-primary transition-colors flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-widest uppercase">
              <i className="fa-solid fa-download"></i> Download PDF
            </a>
          </motion.div>
        </div>

      </div>
      
      {/* Footer / Colophon */}
      <div className="border-t border-structural p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-ink-secondary uppercase tracking-widest bg-[var(--color-base)]">
        <p>© {new Date().getFullYear()} Mohamed Aziz Sakiss</p>
        <p>
          Engineered with Next.js & Tailwind. <a href="https://github.com/mohamedazizsakiss/mohamedsakiss.github.io" target="_blank" rel="noopener noreferrer" className="text-ink-primary font-bold hover:text-accent transition-colors underline decoration-structural underline-offset-4">View Source</a>.
        </p>
      </div>
    </section>
  );
}