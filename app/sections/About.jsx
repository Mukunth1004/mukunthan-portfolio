'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiZap, FiTarget } from 'react-icons/fi';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '1+', icon: FiCode },
    { label: 'Projects Deployed', value: '10+', icon: FiServer },
    { label: 'Technologies', value: '25+', icon: FiZap },
    { label: 'QA Pass Rate', value: '100%', icon: FiTarget },
  ];

  const highlights = [
    'Full Stack Development (React, Node.js, Python)',
    'Cloud Infrastructure (Kubernetes, Docker, AWS)',
    'Database Optimization (65% API improvement)',
    'CI/CD Pipelines (GitLab, automated deployments)',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I'm a passionate <span className="gradient-text font-semibold">Full Stack Engineer</span> with deep expertise in DevOps and Cloud Infrastructure. Currently at <span className="font-semibold text-accent">Spizen Technologies</span>, I specialize in architecting and deploying scalable cloud solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              My expertise spans from frontend development with <span className="font-semibold text-accent-light">React</span> and <span className="font-semibold text-accent-light">Remix SSR</span>, to backend services with <span className="font-semibold text-accent-light">Node.js</span> and <span className="font-semibold text-accent-light">FastAPI</span>, complemented by robust DevOps practices.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I've successfully led database migrations handling <span className="font-semibold text-success">150+ GB</span> of data, architected Kubernetes clusters achieving <span className="font-semibold text-success">99.8% uptime</span>, and optimized systems improving performance by <span className="font-semibold text-success">65%</span>.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mt-8 pt-8 border-t border-gray-700">
              {highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-gray-400">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-premium p-6 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-accent text-3xl" />
                  </div>
                  <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
