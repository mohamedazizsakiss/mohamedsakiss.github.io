// components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--color-base)] relative border-b border-structural">
      
      <div className="p-8 lg:p-12 xl:p-16 border-b border-structural">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter text-ink-primary" style={{ fontFamily: 'var(--font-bricolage)' }}>
            Featured Engineering Work
          </h2>
          <p className="text-ink-secondary text-lg">A showcase of production-ready systems, ranging from embedded edge AI to distributed big data pipelines.</p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-structural last:border-b-0 group"
          >
            {/* Metadata Column */}
            <div className="lg:col-span-4 p-8 lg:p-12 xl:p-16 border-b lg:border-b-0 lg:border-r border-structural flex flex-col justify-between">
              <div>
                <div className="text-ink-primary text-[10px] font-mono tracking-widest uppercase mb-6 border border-structural inline-block px-2 py-1">
                  {project.category}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-ink-secondary text-xs font-mono tracking-wider">
                      {tech}
                      <span className="text-structural ml-2 last:hidden">/</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:col-span-8 p-8 lg:p-12 xl:p-16 bg-[#FAFAFA] group-hover:bg-[#F2F2F2] transition-colors duration-500">
              <h3 className="text-3xl font-black mb-6 text-ink-primary tracking-tight" style={{ fontFamily: 'var(--font-bricolage)' }}>
                {project.title}
              </h3>
              <p className="text-ink-secondary text-lg mb-10 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              
              {project.media && project.mediaType === "video" && (
                <div className="border border-structural overflow-hidden bg-[#E5E5E5] relative aspect-video">
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-white mix-blend-difference uppercase tracking-widest z-10 pointer-events-none">
                    Preview_Render.mp4
                  </div>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  >
                    <source src={project.media} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}