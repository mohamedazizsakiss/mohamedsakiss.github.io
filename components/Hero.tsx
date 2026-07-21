"use client";

import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[var(--color-base)]">
      <div className="text-ink-secondary font-mono text-xs tracking-widest uppercase animate-pulse">
        [ Initializing Model... ]
      </div>
    </div>
  )
});

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="about" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative border-b border-structural">
      
      {/* LEFT COLUMN: Text and Call to Actions */}
      <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16 border-b lg:border-b-0 lg:border-r border-structural bg-[var(--color-base)]">
        <motion.div 
          className="text-left w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Profile Picture & Badge */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <img 
              src="/sakiss.jpeg" 
              alt="Mohamed Aziz Sakiss" 
              className="w-16 h-16 grayscale border border-structural object-cover" 
            />
            
            <div className="inline-block px-3 py-1.5 text-[10px] font-mono text-ink-primary uppercase tracking-widest border border-structural">
              <span className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 bg-accent"></span>
                </span>
                Open to Full-Time Opportunities
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl lg:text-7xl xl:text-[5rem] font-black mb-8 tracking-tighter leading-[0.9] text-ink-primary" 
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            Mohamed Aziz Sakiss
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-ink-secondary mb-12 leading-relaxed font-light max-w-xl">
            AI & Data Science Engineer dedicated to building scalable, production-ready intelligent systems. Expertise spans <strong className="text-ink-primary font-medium">Advanced Computer Vision</strong>, <strong className="text-ink-primary font-medium">Distributed Big Data</strong>, and <strong className="text-ink-primary font-medium">Autonomous GenAI Agents</strong>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <Link href="#projects" className="px-6 py-4 bg-ink-primary text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-accent transition-colors">
              View Portfolio
            </Link>
            <div className="flex gap-4">
              <a href="mailto:contact@mohamedsakiss.me" className="px-6 py-4 border border-structural text-ink-primary text-xs font-mono font-bold tracking-widest uppercase hover:border-ink-primary transition-colors">
                Contact
              </a>
              <a href="https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-structural text-ink-primary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a href="https://github.com/mohamedazizsakiss" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-structural text-ink-primary hover:text-white hover:bg-[#24292e] hover:border-[#24292e] transition-all">
                <i className="fa-brands fa-github text-lg"></i>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Interactive 3D Model */}
      <div className="h-[400px] lg:h-auto w-full relative bg-[#F2F2F2] flex items-center justify-center overflow-hidden">
        <div className="absolute top-8 right-8 text-[10px] font-mono text-ink-secondary uppercase tracking-widest z-10 pointer-events-none mix-blend-difference">
          Model Viewer / Active
        </div>
        <motion.div 
          className="w-full h-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Spline scene="https://prod.spline.design/5ZVdBWNdsgpTwH07/scene.splinecode" />
        </motion.div>
      </div>

    </section>
  );
}