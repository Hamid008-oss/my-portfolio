import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-20 sm:pt-24 pb-12 flex items-center justify-center bg-slate-950 text-white px-4 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10"
      >
        <span className="text-cyan-400 font-mono tracking-widest uppercase text-xs sm:text-sm bg-cyan-950/60 border border-cyan-500/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full inline-block">
          Hi, my name is
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
          Muhammad Hamid.
        </h1>

        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Full Stack Developer
        </h3>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
          Full-stack software developer with experience building enterprise-style web applications using <span className="text-cyan-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Django</span>, and <span className="text-cyan-400 font-medium">Node.js</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/25 text-sm sm:text-base">
            View Projects <FaArrowRight size={16} />
          </a>
          <a href="#contact" className="w-full sm:w-auto text-center border border-slate-800 hover:border-cyan-400/50 bg-slate-900/50 hover:bg-slate-900 px-6 py-3 rounded-xl font-medium transition text-sm sm:text-base">
            Get In Touch
          </a>
        </div>

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-6 pt-4 sm:pt-6 text-slate-400">
          <a href="https://github.com/Hamid008-oss" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/muhammad-hamid-9a2882249" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <FaLinkedin size={22} />
          </a>
          <a href="mailto:muhammadhamid102030@gmail.com" className="hover:text-cyan-400 transition">
            <FaEnvelope size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}