'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const featured = [
  {
    name: 'MyBuildGuide',
    tagline: 'Construction Project Management Platform',
    description:
      'Production app serving 10K+ users deployed on AppStore & PlayStore. Led full Kubernetes migration (7 services + 6 PostgreSQL DBs) from Orion to Hetzner K3s with 99.8% uptime. Reduced API response times by 50% for 100K+ record reports. Resolved 20+ production bugs across 7 microservices. Designed Apache Superset KPI dashboards and implemented the Pro Partner Program.',
    metrics: [
      { label: 'Uptime', value: '99.8%' },
      { label: 'API Speed', value: '50% faster' },
      { label: 'Users', value: '10K+' },
      { label: 'Services', value: '7 micro' },
    ],
    stack: ['Kubernetes', 'Docker', 'Hetzner K3s', 'PostgreSQL', 'GitLab CI/CD', 'Helm', 'React', 'Node.js', 'Apache Superset'],
    status: 'Production',
    statusColor: 'green',
    link: null,
  },
  {
    name: 'AI Document Intelligence Platform',
    tagline: 'RAG-Powered Q&A for Multi-Format Documents',
    description:
      'End-to-end Retrieval-Augmented Generation platform with FastAPI, Next.js, PostgreSQL + pgvector. Semantic vector search using Hugging Face embeddings supporting PDF, DOCX, TXT, and Markdown. Optimized vector search achieving <500ms response time. Redis caching reduced API calls by 60%. Token-aware document chunking, JWT authentication with user quotas, chat persistence.',
    metrics: [
      { label: 'Response', value: '<500ms' },
      { label: 'API Calls', value: '−60%' },
      { label: 'Formats', value: '4 types' },
      { label: 'Auth', value: 'JWT + quotas' },
    ],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Hugging Face', 'Redis', 'Google Gemini API', 'Vercel'],
    status: 'Active',
    statusColor: 'blue',
    link: null,
  },
]

const other = [
  {
    name: 'Phoenix — Shopify Checkout Builder',
    description:
      'Full CSR → SSR migration using Remix. PageSpeed: Performance 45 → 86+, Accessibility 86 → 100, SEO 98 → 100. All Core Web Vitals improved.',
    stack: ['Remix SSR', 'React', 'TypeScript', 'Shopify', 'Puck Editor'],
    status: 'Live',
    link: null,
  },
  {
    name: 'Cloud Cost Prediction (KONE)',
    description:
      'XGBoost regression for AWS cost forecasting with engineered time-series features. FastAPI backend with service-wise breakdowns for EC2, S3, Lambda, DynamoDB.',
    stack: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'AWS'],
    status: 'Complete',
    link: null,
  },
  {
    name: 'No Limit Nodes',
    description: 'Production web platform with modern frontend, cloud deployment, and live traffic.',
    stack: ['React', 'Node.js', 'Cloud Infrastructure'],
    status: 'Live',
    link: 'https://nolimitnodes.com',
  },
]

const statusStyles = {
  Production: 'text-green-400 bg-green-400/10 border-green-400/20',
  Active: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Live: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Complete: 'text-white/40 bg-white/5 border-white/10',
}

function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusStyles[status] || statusStyles.Complete}`}>
      {status}
    </span>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-eyebrow"
        >
          Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="section-heading"
        >
          Projects
        </motion.h2>

        {/* Featured projects */}
        <div className="space-y-5 mt-16">
          {featured.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 + i * 0.14 }}
              className="card-premium p-8 md:p-10"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{proj.name}</h3>
                  <p className="text-sm text-white/35 mt-0.5">{proj.tagline}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <StatusBadge status={proj.status} />
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-white/45 leading-relaxed mb-7">{proj.description}</p>

              {/* Metrics bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                {proj.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] py-3 px-4 text-center">
                    <div className="text-sm font-semibold text-white/80">{m.value}</div>
                    <div className="text-xs text-white/30 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {proj.stack.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.52 }}
          className="text-xs tracking-[0.22em] uppercase text-white/20 mb-5 mt-14"
        >
          Other Projects
        </motion.p>
        <div className="grid md:grid-cols-3 gap-4">
          {other.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.56 + i * 0.09 }}
              className="card-premium p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-sm font-semibold leading-snug pr-2">{proj.name}</h4>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <StatusBadge status={proj.status} />
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors">
                      <FiExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-xs text-white/35 leading-relaxed mb-4 flex-1">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map((tech) => (
                  <span key={tech} className="text-xs text-white/30 bg-white/[0.04] px-2 py-0.5 rounded">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
