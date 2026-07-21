"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SECTIONS = [
  { id: "about", label: "Profile" },
  { id: "projects", label: "Selected Works" },
  { id: "certifications", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function CalibrationAxis() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
      
      let currentSection = SECTIONS[0].id;
      for (const el of sectionElements) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // If the top of the section is at or above the middle of the screen
        if (rect.top <= window.innerHeight / 3) {
          currentSection = el.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="w-full md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-structural flex-shrink-0 sticky top-0 z-50 bg-surface-base md:h-screen transition-colors duration-300">
      <div className="p-6 md:p-8 lg:p-12 flex md:flex-col justify-between items-center md:items-start h-full overflow-y-auto">
        <div className="mb-0 md:mb-16">
          <Link href="#about">
            <h1 className="font-mono text-xs font-bold text-text-primary uppercase tracking-[0.2em] hover:text-accent transition-colors">masakiss.ai</h1>
          </Link>
        </div>

        <nav className="hidden md:flex flex-col gap-8 w-full">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <Link 
                key={section.id} 
                href={`#${section.id}`}
                className="group relative flex items-center font-mono text-xs uppercase tracking-widest"
              >
                <span className="w-4 flex justify-center mr-4 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-structural -z-10" />
                  {isActive && (
                    <motion.div 
                      layoutId="active-marker" 
                      className="w-1.5 h-1.5 bg-accent rounded-full"
                    />
                  )}
                </span>
                <span className={`transition-all duration-300 ${isActive ? 'text-text-primary font-bold tracking-[0.25em]' : 'text-text-secondary group-hover:text-text-primary group-hover:tracking-[0.2em]'}`}>
                  {section.label}
                </span>
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile current context */}
        <div className="md:hidden flex items-center gap-3 font-mono text-xs text-text-secondary uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
          {SECTIONS.find(s => s.id === activeSection)?.label}
        </div>
      </div>
    </aside>
  );
}
