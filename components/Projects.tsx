"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { HighlightList } from "./Highlight";
import type { Dictionary } from "@/i18n/dictionaries";

const actionClass =
  "px-6 py-4 border border-structural hover:border-accent text-text-primary hover:text-accent transition-all duration-300 text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-3 rounded-sm group/btn";

function TechTags({ tech, className = "" }: { tech: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tech.map((t) => (
        <span key={t} className="whitespace-nowrap text-text-secondary opacity-60 text-[10px] font-mono tracking-wider border border-structural px-2 py-1 rounded-sm">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Projects({ t }: { t: Dictionary["projects"] }) {
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
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-secondary text-lg mt-4 max-w-xl font-light">
            {t.subtitle}
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col relative z-10 w-full border-t border-structural">
        {projects.map((project, index) => {
          const text = t.items[project.id];
          const hasVideo = project.mediaType === "video" && !!project.media;
          const hasActions = hasVideo || !!project.liveUrl || !!project.githubUrl;

          return (
            <div
              key={project.id}
              className="group flex flex-col py-12 lg:py-20 border-b border-structural last:border-b-0"
            >
              {/* Header: Title and Metadata */}
              <Reveal delay={0.1} width="100%">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-12">
                  <h3
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {text.title}
                  </h3>

                  {/* Desktop Metadata */}
                  <div className="hidden lg:flex flex-col items-end text-right shrink-0 max-w-xs ml-12">
                    <span className="text-text-secondary text-sm font-mono tracking-wider mb-2 uppercase">
                      {text.category}
                    </span>
                    <TechTags tech={project.tech.slice(0, 3)} className="justify-end" />
                  </div>
                </div>
              </Reveal>

              {/* Mobile Metadata (Hidden on Desktop) */}
              <div className="lg:hidden flex flex-col items-start gap-3 mb-8">
                <span className="text-accent text-[10px] font-mono tracking-widest uppercase border border-structural px-2 py-1 rounded-sm">
                  {text.category}
                </span>
                <TechTags tech={project.tech} />
              </div>

              {/* Content & Demo Area */}
              <Reveal delay={0.2} width="100%">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                  {/* Summary, Results & Actions */}
                  <div className={`w-full ${hasVideo ? 'lg:w-1/2' : 'lg:w-3/4'} flex flex-col items-start`}>
                    {text.role && (
                      <span className="text-text-primary text-xs font-mono tracking-widest uppercase mb-4">
                        <span className="text-text-secondary opacity-60">{t.rolePrefix} / </span>
                        {text.role}
                      </span>
                    )}

                    <p className="text-text-primary text-lg lg:text-xl leading-relaxed font-light mb-6 max-w-4xl">
                      {text.summary}
                    </p>

                    <div className="max-w-4xl">
                      <HighlightList items={text.highlights} />
                    </div>

                    {hasActions && (
                      <div className="flex flex-wrap gap-3 mt-10">
                        {hasVideo && (
                          <button onClick={() => toggleDemo(index)} className={actionClass}>
                            {activeDemo === index ? t.closeDemo : t.watchDemo}
                            <i className={`fa-solid ${activeDemo === index ? 'fa-xmark' : 'fa-play'} group-hover/btn:scale-110 transition-transform`}></i>
                          </button>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={actionClass}>
                            {t.visitLive}
                            <i className="fa-solid fa-arrow-up-right-from-square group-hover/btn:scale-110 transition-transform"></i>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={actionClass}>
                            {t.viewCode}
                            <i className="fa-brands fa-github group-hover/btn:scale-110 transition-transform"></i>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Expandable Video Container */}
                  {hasVideo && (
                    <div className="w-full lg:w-1/2">
                      <AnimatePresence>
                        {activeDemo === index && (
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
                  )}

                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
