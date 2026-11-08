"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { locales, localeLabels, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { lang: Locale; t: Dictionary["nav"] };

function LanguageSwitcher({ lang, label, className = "" }: { lang: Locale; label: string; className?: string }) {
  return (
    <div role="group" aria-label={label} className={`flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-text-secondary opacity-40" aria-hidden="true">/</span>}
          <Link
            href={localePath(l)}
            hrefLang={l}
            lang={l}
            title={localeLabels[l]}
            aria-current={l === lang ? "true" : undefined}
            className={`px-1 py-1 transition-colors ${l === lang ? "text-accent font-bold" : "text-text-secondary hover:text-text-primary"}`}
          >
            {l}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default function Navbar({ lang, t }: Props) {
  const sections = [
    { id: "about", label: t.about },
    { id: "experience", label: t.experience },
    { id: "projects", label: t.projects },
    { id: "certifications", label: t.credentials },
    { id: "contact", label: t.contact },
  ];

  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ["about", "experience", "projects", "certifications", "contact"];
    const handleScroll = () => {
      let currentSection = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight / 3) {
          currentSection = id;
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
          <div className="hidden lg:flex items-center gap-7">
            {sections.map((section) => {
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

          {/* Right Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher lang={lang} label={t.language} className="hidden sm:flex" />

            <a
              href="/mohamed_aziz_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-4 py-2 bg-text-primary text-surface-base hover:bg-accent transition-colors text-[10px] font-mono font-bold tracking-widest uppercase rounded-full"
            >
              {t.resume}
            </a>

            <button
              className="lg:hidden text-text-primary flex items-center justify-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t.menu}
              aria-expanded={isMobileMenuOpen}
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
              className="lg:hidden overflow-hidden flex flex-col gap-6 pt-8 pb-4"
            >
              {sections.map((section) => {
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

              <div className="sm:hidden flex items-center gap-4 pt-2 border-t border-structural">
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary pt-4">{t.language}</span>
                <LanguageSwitcher lang={lang} label={t.language} className="pt-4 text-[12px]" />
              </div>

              <a
                href="/mohamed_aziz_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:hidden w-full text-center px-4 py-3 bg-text-primary text-surface-base hover:bg-accent transition-colors text-[10px] font-mono font-bold tracking-widest uppercase rounded-sm"
              >
                {t.viewResume}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
