// components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">Featured Engineering <span className="text-cyan-400">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A showcase of production-ready systems, ranging from embedded edge AI to distributed big data pipelines.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors overflow-hidden flex flex-col ${project.featured ? 'md:col-span-2' : 'col-span-1'}`}
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-cyan-400 text-sm font-mono mb-3 tracking-wider">{project.category}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {project.media && project.mediaType === "video" && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl relative bg-black">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full object-cover max-h-[350px] opacity-90 group-hover:opacity-100 transition-opacity"
                    >
                      <source src={project.media} type="video/mp4" />
                    </video>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-900/80 text-slate-300 text-xs font-medium rounded-md border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}