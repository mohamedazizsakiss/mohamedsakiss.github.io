"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section id="about" className="min-h-[90vh] relative flex flex-col justify-center py-20 overflow-hidden">

      {/* Background/Centered Portrait */}
      <div className="absolute inset-0 flex justify-center items-end z-0 pointer-events-none">
        <div className="relative w-full max-w-3xl h-full flex justify-center items-end">
          <img
            src="/med_sakiss.jpeg"
            alt="Mohamed Aziz Sakiss"
            className="w-full h-full object-cover translate-y-12 lg:translate-y-24"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)'
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">

        {/* Left Typography Column */}
        <div className="lg:col-span-6 lg:col-start-1 flex flex-col justify-center">
          <div className="mb-8 lg:mb-16">
            <Reveal delay={0.1}>
              <div className="w-12 h-12 bg-accent rounded-br-3xl rounded-tl-xl rounded-tr-sm rounded-bl-sm mb-12 flex items-center justify-center">
                <span className="text-surface-base font-bold font-mono text-xl">M</span>
              </div>
            </Reveal>

            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-black mb-8 tracking-tighter leading-[0.85] text-primary" style={{ fontFamily: 'var(--font-outfit)' }}>
              <Reveal delay={0.2}>Mohamed</Reveal>
              <Reveal delay={0.3}>Aziz</Reveal>
              <Reveal delay={0.4}>Sakiss.</Reveal>
            </h1>

            <Reveal delay={0.5}>
              <div className="w-16 h-2 bg-accent mb-12"></div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex gap-6 items-center text-secondary">
                <a href="mailto:contact@mohamedsakiss.me" className="hover:text-primary transition-colors">
                  <i className="fa-solid fa-globe text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="https://github.com/mohamedazizsakiss" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Summary Column */}
        <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center mt-12 lg:mt-0 pt-0 lg:pt-32 bg-surface-base/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl lg:rounded-none">
          <Reveal delay={0.4} width="100%">
            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-secondary mb-6">
              <span className="w-4 h-[1px] bg-secondary"></span>
              Introduction
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-primary leading-snug">
              AI & Data Science Engineer, building intelligent systems.
            </h3>

            <p className="text-secondary leading-relaxed font-light mb-10 text-sm lg:text-base">
              Dedicated to building scalable, production-ready systems. Expertise spans Advanced Computer Vision, Distributed Big Data, and Autonomous GenAI Agents.
            </p>

            <Link href="#projects" className="text-accent font-bold text-sm tracking-wide hover:text-primary transition-colors flex items-center gap-3">
              View Portfolio <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
}