import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 text-white px-4 sm:px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Get In Touch</h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          I am currently open to new full-time engineering opportunities. Feel free to connect or drop me a message!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-slate-300 font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-xl w-full sm:w-auto justify-center">
            <FaMapMarkerAlt className="text-cyan-400" /> Karachi, Pakistan
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-xl w-full sm:w-auto justify-center">
            <FaPhone className="text-cyan-400" /> +92 314 7792873
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <a href="mailto:muhammadhamid102030@gmail.com" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold px-6 py-3.5 rounded-xl transition shadow-lg shadow-cyan-500/20 text-sm sm:text-base">
            <FaEnvelope size={18} /> Send Email
          </a>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <a href="https://github.com/Hamid008-oss" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none p-3.5 border border-slate-800 hover:border-cyan-400/50 bg-slate-900/50 hover:bg-slate-900 rounded-xl text-slate-400 hover:text-white transition flex justify-center">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/muhammad-hamid-9a2882249" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none p-3.5 border border-slate-800 hover:border-cyan-400/50 bg-slate-900/50 hover:bg-slate-900 rounded-xl text-slate-400 hover:text-white transition flex justify-center">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}