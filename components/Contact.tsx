"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-800/40 border border-slate-700/50 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          
          {/* Left Side: Contact Info & Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let&apos;s Work <span className="text-cyan-400">Together</span></h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
              Currently open to full-time AI Engineering and Data Science roles. Let&apos;s discuss how I can bring value to your engineering team.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:contact@mohamedsakiss.me" className="inline-flex items-center justify-center md:justify-start gap-3 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-900/20 transition-all">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                contact@mohamedsakiss.me
              </a>
              
              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <a href="https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow-lg">
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a href="https://github.com/mohamedazizsakiss" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#24292e] hover:border-slate-500 transition-all shadow-lg">
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: CV Actions & QR Code */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-slate-700/50 pt-8 md:pt-0 md:pl-8"
          >
            <div className="bg-white p-3 rounded-2xl shadow-[0_0_30px_rgba(8,145,178,0.15)] mb-6 transform hover:scale-105 transition-transform duration-300">
              {/* Linked to  QR code */}
              <img src="/Resume-QR.png" alt="Scan to get CV" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl" />
            </div>
            
            <p className="text-sm text-slate-400 mb-4 font-mono text-center">Scan to save contact / CV</p>
            
            {/* Linked to  PDF */}
            <a href="/resume.pdf" download="Mohamed_Aziz_Sakiss_Resume.pdf" className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500/50 text-white rounded-lg font-medium transition-all flex items-center gap-2 text-sm shadow-lg">
              <i className="fa-solid fa-download"></i> Download CV PDF
            </a>
          </motion.div>

        </div>
        
        <div className="mt-16 text-center text-sm text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Mohamed Aziz Sakiss. Engineered with Next.js & Tailwind. <a href="https://github.com/mohamedazizsakiss/mohamedsakiss.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors underline decoration-slate-700 underline-offset-4">View Source</a>.</p>
        </div>
      </div>
    </section>
  );
}