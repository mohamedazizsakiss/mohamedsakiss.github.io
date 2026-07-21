"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const toggleDemo = (index: number) => {
    setActiveDemo(activeDemo === index ? null : index);
  };

  return (
    <section 
      id="projects" 
      className="bg-surface-base relative border-b border-structural pt-24 pb-32"
    >
      <div className="mb-16">
        <Reveal>
          <h2 className="text-4xl lg:text-[4rem] font-black tracking-tighter text-text-primary leading-none" style={{ fontFamily: 'var(--font-outfit)' }}>
            Selected Works.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-secondary text-lg mt-4 max-w-xl font-light">
            A showcase of production-ready systems, ranging from embedded edge AI to distributed big data pipelines.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col relative z-10 w-full border-t border-structural">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group flex flex-col py-12 lg:py-20 border-b border-structural"
          >
            {/* Header: Title and Metadata */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 lg:mb-12">
              <h3 
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500" 
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {project.title}
              </h3>

              {/* Desktop Metadata */}
              <div className="hidden lg:flex flex-col items-end text-right">
                <span className="text-text-secondary text-sm font-mono tracking-wider mb-2 uppercase">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-text-secondary opacity-60 text-[10px] font-mono tracking-wider border border-structural px-2 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Metadata (Hidden on Desktop) */}
            <div className="lg:hidden flex items-center justify-between mb-6">
              <span className="text-accent text-[10px] font-mono tracking-widest uppercase border border-structural px-2 py-1 rounded-sm">
                {project.category}
              </span>
            </div>

            {/* Content & Demo Area */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              
              {/* Description & Action Button */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <p className="text-text-secondary text-lg leading-relaxed font-light mb-8 max-w-2xl">
                  {project.description}
                </p>
                
                {project.media && project.mediaType === "video" && (
                  <button 
                    onClick={() => toggleDemo(index)}
                    className="px-6 py-4 border border-structural hover:border-accent text-text-primary hover:text-accent transition-all duration-300 text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-3 rounded-sm group/btn"
                  >
                    {activeDemo === index ? "Close Demo" : "Watch Demo"}
                    <i className={`fa-solid ${activeDemo === index ? 'fa-xmark' : 'fa-play'} group-hover/btn:scale-110 transition-transform`}></i>
                  </button>
                )}
              </div>

              {/* Expandable Video Container */}
              <div className="w-full lg:w-1/2">
                <AnimatePresence>
                  {activeDemo === index && project.media && project.mediaType === "video" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden border border-structural bg-surface-elevated rounded-sm relative"
                    >
                      <div className="absolute top-4 right-4 text-[10px] font-mono text-white mix-blend-difference uppercase tracking-widest z-10 pointer-events-none">
                        {project.id}.mp4
                      </div>
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full aspect-video object-cover"
                      >
                        <source src={project.media} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}