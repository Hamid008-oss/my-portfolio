import React from 'react';
import { FaCode } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between text-white">
        <a href="#hero" className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-wider text-cyan-400 hover:opacity-80 transition">
          <FaCode size={22} className="sm:text-2xl" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            MUHAMMAD HAMID
          </span>
        </a>
        <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}