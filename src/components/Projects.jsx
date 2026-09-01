import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectsList = [
    {
      title: 'Cloud Cartel — E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with JWT-based authentication, product catalog management, and order-processing workflows.',
      tech: ['React', 'Django', 'PostgreSQL', 'JWT', 'REST APIs', 'Tailwind CSS'],
      github: 'https://github.com/Hamid008-oss'
    },
    {
      title: 'AI-Powered HEC Chatbot (FYP)',
      description: 'Collaborated to develop an AI-powered chatbot retrieving real-time data from the HEC website via Flask backend & dynamic React UI.',
      tech: ['React', 'Tailwind CSS', 'Flask', 'REST APIs', 'Python'],
      github: 'https://github.com/Hamid008-oss'
    },
    {
      title: 'DevPulse — Technical Blogging Platform',
      description: 'Built a full-stack blogging app with article publishing, markdown support, tag-based filtering, and secure Django JWT authentication.',
      tech: ['React', 'Django', 'PostgreSQL', 'REST APIs', 'Tailwind CSS'],
      github: 'https://github.com/Hamid008-oss'
    },
    {
      title: 'Smart Personal Expense Tracker',
      description: 'Developed a responsive web app to track daily expenses, categorize transactions, and visualize monthly financial statistics.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/Hamid008-oss'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-950 text-white px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b border-slate-800/80 pb-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsList.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 border-t border-slate-800/80 pt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition flex items-center gap-2 text-sm font-medium">
                    <FaGithub size={18} /> Code Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}