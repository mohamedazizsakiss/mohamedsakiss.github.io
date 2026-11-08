"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { locales, localeLabels, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { lang: Locale; t: Dictionary["nav"] };

// Button showing the current language; clicking it opens the list of languages.
function LanguageMenu({ lang, label, onOpen }: { lang: Locale; label: string; onOpen?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => {
          if (!open) onOpen?.();
          setOpen(!open);
        }}
        aria-label={`${label}: ${localeLabels[lang]}`}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`flex items-center gap-2 px-3 py-2 border rounded-full font-mono text-[10px] font-bold uppercase tracking-widest transition-colors ${open ? "border-accent text-accent" : "border-structural text-text-primary hover:border-accent hover:text-accent"}`}
      >
        <i className="fa-solid fa-globe text-xs" aria-hidden="true"></i>
        {lang}
        <i className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true"></i>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label={label}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-3 w-44 py-2 bg-surface-base/95 backdrop-blur-md border border-structural rounded-xl shadow-2xl z-10"
          >
            {locales.map((l) => {
              const isCurrent = l === lang;
              return (
                <Link
                  key={l}
                  href={localePath(l)}
                  hrefLang={l}
                  lang={l}
                  role="menuitem"
                  aria-current={isCurrent ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${isCurrent ? "text-accent" : "text-text-primary hover:bg-surface-elevated hover:text-accent"}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary w-5">{l}</span>
                    {localeLabels[l]}
                  </span>
                  {isCurrent && <i className="fa-solid fa-check text-xs" aria-hidden="true"></i>}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
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
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Opening the language list closes the mobile menu so the two never overlap */}
            <LanguageMenu lang={lang} label={t.language} onOpen={() => setIsMobileMenuOpen(false)} />

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
