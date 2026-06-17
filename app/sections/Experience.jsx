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
      'Led infrastructure modernization for the MyBuildGuide SaaS platform, managing Kubernetes (K3s) clusters hosting 7 production microservices.',
      'Managed 6 PostgreSQL databases and executed zero-downtime migrations, achieving 99.8% uptime with zero data loss.',
      'Optimized PostgreSQL performance through indexing, query tuning, and async query restructuring, reducing API response times by 50%+ for 100K+ records.',
      'Built KPI dashboards and data pipelines using Apache Superset, enabling faster business reporting and analytics.',
      'Engineered GitLab CI/CD pipelines across 27 jobs and managed Helm-based Kubernetes deployments across Dev, UAT, and Production environments.',
    ],
    stack: ['Python', 'JavaScript', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Docker', 'GitLab CI/CD'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Soft Suave Technologies Pvt Ltd',
    period: 'Aug 2025 – Jan 2026',
    location: 'Chennai, India',
    project: 'Phoenix — E-Commerce Payment Checkout Builder for Shopify',
    current: false,
    achievements: [
      'Engineered migration of a Shopify SaaS checkout flow from CSR to SSR using React.js and Remix, improving application performance and user experience.',
      'Optimized HTML5, CSS3, and JavaScript delivery with REST API integrations, increasing PageSpeed Performance from 45 to 86+.',
      'Improved platform quality by raising Accessibility from 86 to 100 and SEO from 98 to 100 through frontend optimization.',
      'Developed reusable, client-specific React.js components with Node.js REST API integration, TypeScript, GitHub Actions CI/CD, and Jest testing, reducing per-client implementation effort.',
    ],
    stack: ['TypeScript', 'React', 'Remix', 'Node.js', 'MySQL', 'GitHub Actions'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Kone Elevator India Pvt Ltd',
    period: 'Mar 2025 – May 2025',
    location: 'Chennai, India',
    project: 'Cloud Cost Prediction System',
    current: false,
    achievements: [
      'Built end-to-end data pipelines for data ingestion, cleansing, and feature engineering with AI/ML integrations across 6 AWS services.',
      'Processed 12 input features from SQL-based datasets to support scalable cloud cost analysis and forecasting workflows.',
      'Developed a real-time cost forecasting platform using XGBoost with early stopping and MAE/RMSE-based model evaluation.',
      'Built FastAPI REST APIs with 4 endpoints for AWS infrastructure and IoT Core cost prediction, and containerized the solution using Docker for consistent deployment.',
    ],
    stack: ['Python', 'FastAPI', 'XGBoost', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Docker'],
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
