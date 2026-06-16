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
      'Led infrastructure modernization for MyBuildGuide SaaS as Backend Engineer, managing Kubernetes (K3s) clusters hosting 7 microservices across Node.js, Flask, and FastAPI (asyncpg + Pydantic v2) Python backends alongside 6 PostgreSQL databases; achieved 99.8% uptime and zero data loss.',
      'Optimized PostgreSQL query performance across FastAPI and Flask microservices through indexing, query tuning, pagination, and async query restructuring (asyncpg), achieving 50%+ reduction in API response times for datasets exceeding 100K records; built KPI reporting dashboards and data pipelines using Apache Superset.',
      'Engineered 4-stage GitLab CI/CD deployment flows across 27 jobs using Git-based selective builds and Docker containers for 5 microservices across 3 environments (Dev, UAT, Prod); managed 6 Helm chart deployments on Kubernetes with atomic rollbacks and manual production gates.',
    ],
    stack: ['Kubernetes (K3s)', 'Docker', 'FastAPI', 'Flask', 'asyncpg', 'Pydantic v2', 'PostgreSQL', 'Node.js', 'Python', 'React', 'Helm', 'GitLab CI/CD'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Soft Suave Technologies Pvt Ltd',
    period: 'Aug 2025 – Jan 2026',
    location: 'Chennai, India',
    project: 'Phoenix — E-Commerce Payment Checkout Builder for Shopify',
    current: false,
    achievements: [
      'Engineered migration of Shopify SaaS checkout flow from CSR to SSR using React.js and Remix, optimising HTML5, CSS3, and JavaScript delivery with REST API integrations to achieve PageSpeed Performance (45 → 86+), Accessibility (86 → 100), and SEO (98 → 100).',
      'Developed reusable, client-specific React.js frontend components as a Software Developer with Node.js REST API backend integration using TypeScript, version-controlled via Git and validated through Jest unit tests, reducing per-client implementation effort.',
    ],
    stack: ['React.js', 'Remix SSR', 'TypeScript', 'Node.js', 'MySQL', 'Jest', 'GitHub Actions', 'Shopify'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Kone Elevator India Pvt Ltd',
    period: 'Mar 2025 – May 2025',
    location: 'Chennai, India',
    project: 'Cloud Cost Prediction System',
    current: false,
    achievements: [
      'Built end-to-end data processing pipelines with AI/ML integrations for data ingestion, cleansing, and feature engineering across 6 AWS services (EC2, S3, Lambda, DynamoDB, API Gateway, CloudWatch), processing 12 input features in SQL-based datasets for scalable cloud cost analysis.',
      'Developed a real-time cost forecasting platform using XGBoost (100 estimators, early stopping, MAE/RMSE evaluation) and FastAPI REST APIs with 4 endpoints for predicting AWS infrastructure and IoT Core expenses, containerised with Docker for consistent deployment.',
    ],
    stack: ['Python', 'FastAPI', 'XGBoost', 'Scikit-learn', 'AWS', 'Docker', 'REST APIs', 'Pandas'],
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
