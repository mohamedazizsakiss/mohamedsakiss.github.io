"use client";

import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-base relative pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-0">
        
        {/* Left Side: Contact Info & Title */}
        <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-between lg:pr-16">
          <div>
            <Reveal>
              <h2 className="text-4xl lg:text-[4rem] font-black mb-6 text-text-primary tracking-tighter leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>
                Let&apos;s Work Together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-text-secondary text-lg mb-12 max-w-xl leading-relaxed font-light">
                Currently open to full-time AI Engineering and Data Science roles. Let&apos;s discuss how I can bring value to your engineering team.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <a href="mailto:contact@mohamedsakiss.me" className="inline-flex items-center gap-4 text-lg font-bold text-text-primary hover:text-accent transition-colors group tracking-tight">
                  <div className="w-14 h-14 border border-structural rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-surface-base transition-all duration-300">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  contact@mohamedsakiss.me
                </a>
                
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-structural rounded-full flex items-center justify-center text-text-primary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </a>
                  <a href="https://github.com/mohamedazizsakiss" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-structural rounded-full flex items-center justify-center text-text-primary hover:text-white hover:bg-[#24292e] hover:border-[#24292e] transition-all duration-300">
                    <i className="fa-brands fa-github text-lg"></i>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Side: CV Actions & QR Code */}
        <div className="flex flex-col items-start lg:items-center justify-center bg-surface-elevated p-8 lg:p-12 rounded-lg border border-structural">
          <Reveal delay={0.3} width="100%">
            <div className="flex flex-col items-center w-full">
              <div className="p-4 border border-structural bg-white mb-6 transform hover:-translate-y-2 transition-transform duration-300 rounded-md shadow-2xl">
                <img src="/Resume-QR.png" alt="Scan to get CV" className="w-32 h-32 object-cover" />
              </div>
              
              <p className="text-xs text-text-secondary mb-6 font-mono tracking-widest uppercase text-center">Scan for digital CV</p>
              
              <a href="/resume.pdf" download="Mohamed_Aziz_Sakiss_Resume.pdf" className="w-full py-4 bg-text-primary text-surface-base hover:bg-accent transition-colors flex items-center justify-center gap-3 text-xs font-mono font-bold tracking-widest uppercase rounded-sm">
                <i className="fa-solid fa-download"></i> Download PDF
              </a>
            </div>
          </Reveal>
        </div>

      </div>
      
      {/* Footer / Colophon */}
      <div className="border-t border-structural mt-24 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-text-secondary uppercase tracking-widest bg-surface-base">
        <p>© {new Date().getFullYear()} Mohamed Aziz Sakiss</p>
        <p>
          <a href="https://github.com/mohamedazizsakiss/mohamedsakiss.github.io" target="_blank" rel="noopener noreferrer" className="text-text-primary font-bold hover:text-accent transition-colors underline decoration-structural underline-offset-4">View Source</a>.
        </p>
      </div>
    </section>
  );
}