'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    title: 'Full Stack Engineer | DevOps & Cloud',
    company: 'Spizen Technologies Private Limited',
    type: 'Full-time',
    period: 'Feb 2026 – Present',
    location: 'Bangalore, India',
    project: 'MyBuildGuide — Construction SaaS Platform',
    current: true,
    achievements: [
      'Deployed 7 microservices (Node.js, FastAPI, Flask) on Kubernetes (K3s) via Helm Chart across Dev, UAT, and Production — achieving 99.8% uptime.',
      'Optimised 6 PostgreSQL databases via indexing, async restructuring, and zero-downtime migrations — cutting API response times 50%+ across 100K+ records.',
      'Engineered 27-job GitLab CI/CD pipeline with Bash change detection; built Apache Superset KPI dashboards across 7 microservices for business reporting.',
    ],
    stack: ['Python', 'Node.js', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'Docker', 'GitLab CI/CD', 'Helm Chart'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Soft Suave Technologies Pvt Ltd',
    type: 'Full-time',
    period: 'Aug 2025 – Jan 2026',
    location: 'Chennai, India',
    project: 'Phoenix — Shopify Checkout Builder',
    current: false,
    achievements: [
      'Migrated Shopify SaaS checkout from CSR to SSR using ReactJS and Remix, boosting PageSpeed Performance from 45 to 86+ and cutting initial load times significantly.',
      'Raised Accessibility from 86 to 100 and SEO from 98 to 100 through HTML5/CSS3 responsive UI optimisation — achieving perfect Lighthouse scores.',
      'Built reusable React.js + Redux components in TypeScript with Jest testing — cutting per-client implementation effort across checkout flows.',
    ],
    stack: ['TypeScript', 'React.js', 'Remix', 'Redux', 'Node.js', 'MySQL', 'Jest', 'GitHub Actions'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Kone Elevator India Pvt Ltd',
    type: 'Internship',
    period: 'Mar 2025 – May 2025',
    location: 'Chennai, India',
    project: 'AWS Cloud Cost Prediction System',
    current: false,
    achievements: [
      'Built Python data pipelines using Pandas for ingestion, cleansing, and AI/ML feature engineering across 6 AWS services (EC2, S3, Lambda, CloudWatch, DynamoDB) from SQL databases.',
      'Developed real-time XGBoost cost forecasting model with early stopping and MAE/RMSE evaluation across 12 engineered features; visualised predictions with Matplotlib.',
      'Built FastAPI REST APIs with 4 endpoints for AWS infrastructure and IoT Core cost prediction; containerised with Docker for cross-environment deployment.',
    ],
    stack: ['Python', 'FastAPI', 'XGBoost', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Docker', 'AWS'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-20 px-6" style={{ background: 'rgba(99,102,241,0.02)' }}>
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-eyebrow">
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="section-heading"
        >
          Experience
        </motion.h2>

        <div className="relative mt-12">
          {/* Timeline rail */}
          <div
            className="absolute left-[7px] top-3 bottom-8 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(99,102,241,0.1), transparent)' }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.16 + i * 0.14 }}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-6 hidden md:flex items-center justify-center w-3.5 h-3.5 rounded-full ${
                    exp.current ? 'timeline-dot-active' : 'timeline-dot'
                  }`}
                >
                  {exp.current && <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--bg)' }} />}
                </div>

                <div className="card-premium overflow-hidden group">
                  {/* Top accent line */}
                  {exp.current && (
                    <div
                      className="h-0.5 w-full"
                      style={{ background: 'linear-gradient(90deg, var(--accent), var(--purple), transparent)' }}
                    />
                  )}
                  <div className="p-7">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-white leading-snug">{exp.title}</h3>
                        <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--accent-light)' }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {exp.current && <span className="badge-accent animate-pulse-accent">Current</span>}
                        <span
                          className="text-xs border rounded-full px-2.5 py-0.5"
                          style={{ color: 'var(--text-subtle)', borderColor: 'var(--border)' }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs mb-4" style={{ color: 'var(--text-subtle)' }}>
                      <span className="flex items-center gap-1.5"><FiCalendar size={10} />{exp.period}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={10} />{exp.location}</span>
                      <span className="flex items-center gap-1.5"><FiBriefcase size={10} />{exp.project}</span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          <span
                            className="flex-shrink-0 mt-[9px] w-1 h-1 rounded-full"
                            style={{ background: 'var(--accent)' }}
                          />
                          {a}
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map(tech => <span key={tech} className="badge">{tech}</span>)}
                    </div>
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
