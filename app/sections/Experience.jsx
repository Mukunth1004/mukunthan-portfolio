'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Engineer | DevOps & Cloud',
      company: 'Spizen Technologies',
      period: 'Feb 2026 - Present',
      location: 'Bangalore, India',
      status: 'Current',
      highlights: [
        'Led production database migration (6 PostgreSQL instances, 150+ GB) with zero data loss',
        'Architected Kubernetes cluster migration to Hetzner K3s achieving 99.8% uptime',
        'Optimized API response time by 65% through query optimization and strategic indexing',
        'Designed Apache Superset dashboards for KPI tracking and business intelligence',
      ],
      technologies: ['Kubernetes', 'Docker', 'PostgreSQL', 'GitLab CI/CD', 'Hetzner Cloud'],
    },
    {
      role: 'Software Development Engineer',
      company: 'Soft Suave Technologies',
      period: 'Aug 2025 - Jan 2026',
      location: 'Chennai, India',
      status: 'Completed',
      highlights: [
        'Led complete Shopify checkout migration to Server-Side Rendering (SSR) using Remix',
        'Improved PageSpeed: Performance 45→86+, SEO 98→100, Accessibility 86→100',
        'Implemented route-based code splitting and package optimization for Core Web Vitals',
        'Built customizable components using Puck Editor for merchant flexibility',
      ],
      technologies: ['Remix', 'React', 'TypeScript', 'Node.js', 'Performance Optimization'],
    },
    {
      role: 'Software Engineering Intern',
      company: 'KONE Elevator India',
      period: 'Mar 2025 - May 2025',
      location: 'Chennai, India',
      status: 'Completed',
      highlights: [
        'Designed hybrid cost prediction model using LSTM with multi-head attention',
        'Achieved MAE of 2.13 and RMSE of 3.47 on AWS billing data',
        'Optimized model input through MinMax scaling and feature engineering',
        'Improved prediction efficiency by 40% over baseline models',
      ],
      technologies: ['Python', 'LSTM', 'XGBoost', 'TensorFlow', 'AWS'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Professional</span> Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-dark border-2 border-accent rounded-full flex items-center justify-center"
                >
                  <FiBriefcase className="text-accent" size={20} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 ml-20 md:ml-0">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card-premium p-8 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-2">
                        <span className="gradient-text">{exp.role.split('|')[0].trim()}</span>
                      </h3>
                      <p className="text-lg font-semibold text-gray-300">{exp.company}</p>
                    </div>
                    <span className="badge-success">{exp.status}</span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={16} className="text-accent" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={16} className="text-accent" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <FiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="badge-accent text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
