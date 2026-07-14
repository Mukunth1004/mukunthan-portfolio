'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const featured = [
  {
    name: 'PMOMONK',
    tagline: 'AI-Powered Delivery Intelligence Platform',
    description:
      'Built a delivery-intelligence platform scaffold that connects to Jira, Azure DevOps, GitHub, SharePoint, and SAP to replace manual status reporting. Shipped the design system, layout shell, and four core screens — Home, Portfolio dashboard, Project overview, and Executive Copilot — wired to a seeded data layer with stubbed integration adapters. The Executive Copilot streams grounded answers from Claude via the Vercel AI SDK, with confidence-trend, RAG-distribution, and portfolio-heatmap charts built on Recharts.',
    metrics: [
      { label: 'Core Screens', value: '4' },
      { label: 'Integrations', value: '5 stubbed' },
      { label: 'AI Copilot', value: 'Claude' },
      { label: 'Framework', value: 'Next.js 16' },
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Recharts', 'Claude', 'Vercel AI SDK'],
    period: '2026',
    link: 'https://github.com/Mukunth1004/pmomonk',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'Aether',
    tagline: 'AI Automation Agency — Marketing Site',
    description:
      'Designed and built the marketing site for an AI automation agency positioned around building custom AI systems that eliminate repetitive work, improve customer experience, and save hundreds of hours a month. Built the full site — hero, services, and booking-conversion sections — with Next.js and Radix UI primitives, animated with Motion for a polished, scroll-aware feel.',
    metrics: [
      { label: 'Type', value: 'Marketing Site' },
      { label: 'Framework', value: 'Next.js' },
      { label: 'Animation', value: 'Motion' },
      { label: 'UI Kit', value: 'Radix UI' },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Radix UI'],
    period: '2026',
    link: 'https://github.com/Mukunth1004/ai-automation-agency',
    gradient: 'from-purple-500 to-violet-600',
  },
]

const other = [
  {
    name: 'CloudDeployX',
    description: 'Production-grade FastAPI on GCP Cloud Run with Docker multi-stage builds. Zero-downtime CI/CD via GitHub Actions + Workload Identity Federation. Auto-scales 0→10 instances.',
    stack: ['FastAPI', 'Docker', 'GCP Cloud Run', 'GitHub Actions'],
    link: 'https://github.com/Mukunth1004/CloudDeployX',
  },
  {
    name: 'Cloud Cost Prediction (KONE)',
    description: 'XGBoost regression for AWS cost forecasting with 12 engineered features. FastAPI backend with service-wise breakdowns for EC2, S3, Lambda, DynamoDB.',
    stack: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'AWS'],
    link: null,
  },
  {
    name: 'MoBRec',
    description: 'Mood-Based Music Recommendation with Spotify API integration — detects mood from user input and surfaces personalised track recommendations in real time.',
    stack: ['Python', 'Spotify API', 'ML', 'FastAPI'],
    link: 'https://github.com/Mukunth1004/MoBRec',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-20 px-6" style={{ background: 'rgba(99,102,241,0.02)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-eyebrow">
          Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="section-heading"
        >
          Projects
        </motion.h2>

        {/* Featured */}
        <div className="space-y-5 mt-12">
          {featured.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 + i * 0.13 }}
              className="card-premium overflow-hidden group"
            >
              {/* Gradient accent bar */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, var(--accent), var(--purple), transparent)` }}
              />
              <div className="p-7 md:p-9">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{proj.name}</h3>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--accent-light)' }}>{proj.tagline}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-subtle)' }}>{proj.period}</p>
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full transition-all duration-200 flex-shrink-0"
                      style={{
                        color: 'var(--accent-light)',
                        background: 'var(--accent-soft)',
                        border: '1px solid var(--border-hover)',
                      }}
                    >
                      <FiGithub size={13} /> View on GitHub
                    </a>
                  )}
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {proj.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {proj.metrics.map(m => (
                    <div
                      key={m.label}
                      className="rounded-xl py-3 px-4 text-center transition-all duration-200"
                      style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}
                    >
                      <div
                        className="text-sm font-bold"
                        style={{
                          background: 'linear-gradient(135deg, var(--accent-light), #fff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.stack.map(tech => <span key={tech} className="badge">{tech}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-12">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-5 font-semibold"
            style={{ color: 'var(--text-subtle)' }}
          >
            Other Projects
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {other.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.44 + i * 0.08 }}
                className="bento-card p-5 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-bold text-white leading-snug pr-2">{proj.name}</h4>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors flex-shrink-0"
                      style={{ color: 'var(--text-subtle)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-subtle)'; }}
                    >
                      <FiExternalLink size={13} />
                    </a>
                  )}
                </div>
                <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        color: 'var(--text-subtle)',
                        background: 'var(--accent-soft)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
