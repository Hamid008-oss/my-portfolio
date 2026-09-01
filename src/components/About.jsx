import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const techCategories = [
    {
      category: 'Full-Stack Development',
      skills: ['React.js', 'Django', 'Django REST Framework', 'Node.js', 'Express.js', 'REST API Design & Integration']
    },
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C#']
    },
    {
      category: 'Styling and Front-End Tools',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'SASS/SCSS']
    },
    {
      category: 'Databases & Data Management',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB']
    },
    {
      category: 'DevOps & Tooling',
      skills: ['Git & GitHub', 'Postman', 'Vercel', 'Railway', 'VS Code', 'Render']
    },
    {
      category: 'Application Support',
      skills: ['Issue Diagnosis', 'CRM Systems', 'Query Resolution', 'Avaya Tools']
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-950 text-white px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-slate-800/80 pb-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">About Me</h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-base sm:text-lg leading-relaxed"
        >
          Full-stack software developer with experience building and supporting enterprise-style web applications. Delivered client-facing solutions across freelance and academic projects, including REST API integration, secure authentication, and database design. Graduated with a B.S. in Information Technology from University of Sindh.
        </motion.p>

        {/* Experience Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/60 backdrop-blur border border-slate-800 p-4 sm:p-6 rounded-2xl space-y-3 hover:border-slate-700 transition"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">Full Stack Developer — Webtors.net</h3>
            <span className="text-cyan-400 font-mono text-xs sm:text-sm bg-cyan-950/60 border border-cyan-500/20 px-3 py-1 rounded-full w-fit">
              Sep 2023 - Aug 2024
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Delivered 5 full-stack client projects (React, Node.js, Django) as part of a freelance team, supporting API integrations, database operations, and bug fixes to ensure reliable delivery.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">Technical Skills</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {techCategories.map((cat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/80 p-4 sm:p-5 rounded-2xl space-y-3 hover:border-cyan-500/30 transition"
              >
                <h4 className="text-slate-200 font-semibold text-base sm:text-lg border-b border-slate-800/80 pb-2">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="bg-slate-950 border border-slate-800 text-cyan-400 px-2.5 py-1 rounded-lg font-mono text-xs hover:border-cyan-400/40 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}