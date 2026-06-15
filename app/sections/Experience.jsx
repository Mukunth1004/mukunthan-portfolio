'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'Full Stack Engineer | DevOps & Cloud',
    company: 'Spizen Technologies Private Limited',
    period: 'Feb 2026 – Present',
    location: 'Bangalore, India',
    project: 'MyBuildGuide — Construction Project Management Platform',
    current: true,
    achievements: [
      'Led infrastructure transformation: Kubernetes cluster migration (7 services + 6 PostgreSQL databases) from Orion to Hetzner K3s with GitLab CI/CD achieving 99.8% uptime; led 3-person team on deployment and validation.',
      'Executed zero-downtime migration across 6 DB instances (taskmanager 207MB, erpdatabase 51K+ rows, accounting, guidebuilder, filesystem, buildpros); reduced API response time 50% for 100K+ record reports through indexing and pagination.',
      'Resolved 20+ production bugs across 7 microservices; architected Apache Superset KPI dashboards with production Helm configuration.',
      'Implemented Pro Partner Program (Helm charts + Docker) with auto-login and partner hub integration serving 10K+ users.',
    ],
    stack: ['Kubernetes (K3s)', 'Docker', 'Hetzner', 'GitLab CI/CD', 'PostgreSQL', 'Helm', 'Traefik', 'React', 'Node.js'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Soft Suave Technologies Pvt Ltd',
    period: 'Aug 2025 – Jan 2026',
    location: 'Chennai, India',
    project: 'Phoenix — E-Commerce Payment Checkout Builder for Shopify',
    current: false,
    achievements: [
      'Led complete migration of Shopify checkout flow from Client-Side Rendering to Server-Side Rendering using Remix; achieved significant PageSpeed improvements: Performance (45 → 86+), Accessibility (86 → 100), SEO (98 → 100).',
      'Improved Core Web Vitals across all metrics — LCP, FID, CLS.',
      'Engineered reusable, client-specific components using Puck Editor enabling merchants to customize checkout experiences and deliver tailored payment pages without code changes.',
    ],
    stack: ['Remix SSR', 'React', 'TypeScript', 'Shopify', 'Puck Editor', 'Node.js'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Kone Elevator India Pvt Ltd',
    period: 'Mar 2025 – May 2025',
    location: 'Chennai, India',
    project: 'Cloud Cost Prediction System',
    current: false,
    achievements: [
      'Designed and deployed a production-grade cloud cost prediction system using XGBoost regression with engineered time-series features (hour, day_of_week, month) and MinMax scaling on AWS billing datasets.',
      'Built a full-stack application using FastAPI and a data preprocessing pipeline, exposing REST APIs for real-time cost forecasting and service-wise cost breakdowns across EC2, S3, Lambda, and DynamoDB.',
    ],
    stack: ['Python', 'FastAPI', 'XGBoost', 'Scikit-learn', 'AWS', 'REST APIs'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-eyebrow"
        >
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="section-heading"
        >
          Experience
        </motion.h2>

        <div className="relative mt-16">
          {/* Timeline rail */}
          <div className="absolute left-[7px] top-3 bottom-8 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.18 + i * 0.15 }}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-[22px] hidden md:flex items-center justify-center w-3.5 h-3.5 rounded-full border ${
                    exp.current
                      ? 'bg-white border-white'
                      : 'bg-transparent border-white/25'
                  }`}
                >
                  {exp.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  )}
                </div>

                <div className="card-premium p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-white leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/45 mt-0.5">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="badge-accent self-start flex-shrink-0">Current</span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-white/30 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={10} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={10} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Project label */}
                  <p className="text-xs text-white/30 italic mb-5">{exp.project}</p>

                  {/* Achievements */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                        <span className="flex-shrink-0 mt-[9px] w-1 h-1 rounded-full bg-white/20" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
