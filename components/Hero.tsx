"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center border border-cyan-900/30 rounded-2xl bg-slate-900/20 backdrop-blur-sm">
      <div className="text-cyan-500 animate-pulse font-mono text-sm">
        [ Initializing AI Core... ]
      </div>
    </div>
  )
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Text and Call to Actions */}
        <motion.div 
          className="text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Profile Picture & Badge aligned together */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md opacity-40 -z-10"></div>
              
              <img src="/sakiss.jpeg" alt="Mohamed Aziz Sakiss" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-slate-700 object-cover relative z-10 shadow-xl" />
            </div>
            
            <div className="inline-block px-4 py-1.5 text-xs font-semibold text-cyan-400 bg-slate-800/50 backdrop-blur-md rounded-full border border-cyan-800/50 shadow-lg">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Open to Full-Time Opportunities
              </span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Mohamed Aziz Sakiss
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-10 leading-relaxed font-light max-w-xl">
            AI & Data Science Engineer dedicated to building scalable, production-ready intelligent systems. Expertise spans <span className="text-slate-200 font-medium">Advanced Computer Vision</span>, <span className="text-slate-200 font-medium">Distributed Big Data</span>, and <span className="text-slate-200 font-medium">Autonomous GenAI Agents</span>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="group relative px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] overflow-hidden">
              <span className="relative z-10">View Portfolio</span>
            </a>
            <div className="flex gap-4">
              <a href="mailto:contact@mohamedsakiss.me" className="px-8 py-3 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white rounded-lg font-bold transition-all border border-slate-700 hover:border-slate-500">
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/mohamed-aziz-sakiss-58a35b319" target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-slate-800/80 hover:bg-[#0077b5] text-white rounded-lg font-bold transition-all border border-slate-700 hover:border-transparent">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/mohamedazizsakiss" target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-slate-800/80 hover:bg-[#24292e] text-white rounded-lg font-bold transition-all border border-slate-700 hover:border-transparent">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive 3D Model */}
        <motion.div 
          className="h-[400px] md:h-[600px] w-full relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Spline scene="https://prod.spline.design/5ZVdBWNdsgpTwH07/scene.splinecode" />
        </motion.div>

      </div>
    </section>
  );
}