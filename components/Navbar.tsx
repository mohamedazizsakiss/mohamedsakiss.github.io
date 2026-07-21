"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SECTIONS = [
  { id: "about", label: "Profile" },
  { id: "projects", label: "Selected Works" },
  { id: "certifications", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
      
      let currentSection = SECTIONS[0].id;
      for (const el of sectionElements) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = el.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={`pointer-events-auto flex flex-col w-full max-w-5xl bg-surface-base/90 backdrop-blur-md border border-structural shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'rounded-2xl py-4' : 'rounded-full py-3'} px-6`}>
        
        {/* Top Row */}
        <div className="flex items-center justify-between w-full">
          
          {/* Logo */}
          <Link href="#about" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-surface-base font-bold font-mono text-xs">M</span>
            </div>
            <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-widest hover:text-accent transition-colors">
              masakiss.ai
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <Link 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="relative group py-1"
                >
                  <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-text-primary font-bold' : 'text-text-secondary group-hover:text-text-primary'}`}>
                    {section.label}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-4 py-2 bg-text-primary text-surface-base hover:bg-accent transition-colors text-[10px] font-mono font-bold tracking-widest uppercase rounded-full"
            >
              Resume
            </a>
            
            <button 
              className="md:hidden text-text-primary flex items-center justify-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Expanded Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden flex flex-col gap-6 pt-8 pb-4"
            >
              {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <Link 
                    key={section.id} 
                    href={`#${section.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-structural'} transition-colors`} />
                    <span className={`font-mono text-[12px] uppercase tracking-widest transition-colors ${isActive ? 'text-accent font-bold' : 'text-text-primary group-hover:text-accent'}`}>
                      {section.label}
                    </span>
                  </Link>
                );
              })}
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:hidden w-full text-center px-4 py-3 bg-text-primary text-surface-base hover:bg-accent transition-colors text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm"
              >
                View Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}