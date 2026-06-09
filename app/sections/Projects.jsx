'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'MyBuildGuide',
      description: 'Construction Project Management Platform - Architected Kubernetes cluster migration, database optimization achieving 65% performance improvement',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Docker', 'Hetzner Cloud'],
      link: 'https://nolimitnodes.com/',
      status: 'Production',
    },
    {
      title: 'AI Document Intelligence Platform',
      description: 'FastAPI-based Q&A system with Claude AI integration, RAG pipeline, Redis caching reducing API calls by 60%',
      tech: ['FastAPI', 'Claude API', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
      link: 'https://github.com/Mukunth1004',
      status: 'Active',
    },
    {
      title: 'Phoenix - Checkout Builder',
      description: 'Shopify payment checkout flow migration to Server-Side Rendering (SSR) using Remix, improved PageSpeed by 186%',
      tech: ['Remix', 'React', 'TypeScript', 'Node.js', 'Puck Editor'],
      link: 'https://github.com/Mukunth1004',
      status: 'Complete',
    },
    {
      title: 'No Limit Nodes',
      description: 'High-performance infrastructure management platform with real-time monitoring and automated deployment capabilities',
      tech: ['React', 'Node.js', 'Kubernetes', 'Docker', 'AWS'],
      link: 'https://nolimitnodes.com/',
      status: 'Live',
    },
    {
      title: 'Cost Prediction Model',
      description: 'Hybrid ML model using LSTM with multi-head attention for AWS billing prediction, achieving MAE of 2.13',
      tech: ['Python', 'TensorFlow', 'LSTM', 'XGBoost', 'AWS'],
      link: 'https://github.com/Mukunth1004',
      status: 'Complete',
    },
    {
      title: 'Dynamic Form Builder',
      description: 'Google Forms-like platform with Remix SSR, JWT authentication, role-based access control',
      tech: ['Remix', 'JWT', 'React', 'Node.js', 'MySQL'],
      link: 'https://github.com/Mukunth1004',
      status: 'Production',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glow-box glass-effect p-8 rounded-lg flex flex-col h-full hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-accent flex-1">{project.title}</h3>
                <span className="px-3 py-1 text-xs font-semibold bg-accent/10 border border-accent/30 text-accent rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 mb-6 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-accent/5 border border-accent/20 text-accent/80 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold"
              >
                View Project <FiExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
