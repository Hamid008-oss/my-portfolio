import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-slate-950 font-sans min-h-screen antialiased text-slate-100 selection:bg-cyan-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-900">
        © {new Date().getFullYear()} Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}