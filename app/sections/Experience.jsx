'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Engineer | DevOps & Cloud',
      company: 'Spizen Technologies',
      period: 'Feb 2026 - Present',
      location: 'Bangalore, India',
      highlights: [
        'Led production database migration (6 PostgreSQL instances, 150+ GB) with zero data loss',
        'Architected Kubernetes cluster migration to Hetzner K3s achieving 99.8% uptime',
        'Optimized API response time by 65% through query optimization and indexing',
        'Designed Apache Superset dashboards for KPI tracking and business intelligence',
      ],
    },
    {
      role: 'Software Development Engineer',
      company: 'Soft Suave Technologies',
      period: 'Aug 2025 - Jan 2026',
      location: 'Chennai, India',
      highlights: [
        'Led complete Shopify checkout migration to Server-Side Rendering (SSR) using Remix',
        'Improved PageSpeed: Performance 45→86+, SEO 98→100, Accessibility 86→100',
        'Implemented route-based code splitting and package optimization',
        'Built customizable components using Puck Editor for merchant flexibility',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'KONE Elevator India',
      period: 'Mar 2025 - May 2025',
      location: 'Chennai, India',
      highlights: [
        'Designed hybrid cost prediction model using LSTM with multi-head attention',
        'Achieved MAE of 2.13 and RMSE of 3.47 on AWS billing data',
        'Optimized model input through MinMax scaling and feature engineering',
        'Improved prediction efficiency by 40% over baseline models',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glow-box glass-effect p-8 rounded-lg border-l-4 border-accent"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-2">{exp.role}</h3>
                  <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.location}</p>
                </div>
                <p className="text-sm text-accent font-semibold mt-4 md:mt-0">{exp.period}</p>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-accent mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
