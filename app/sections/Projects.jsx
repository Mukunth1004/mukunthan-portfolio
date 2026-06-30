'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const featured = [
  {
    name: 'AI Document Intelligence',
    tagline: 'RAG-Powered Document Q&A Platform',
    description:
      'Architected a full RAG platform (FastAPI, Next.js, PostgreSQL + pgvector) ingesting 4 document formats with 1024-token chunking and Hugging Face embeddings for semantic Q&A. Integrated Claude AI + Google Gemini API with streaming; reduced API calls 60% via Redis caching, achieving <500ms response time with cosine-similarity vector retrieval. Implemented JWT auth with 100 req/min rate limiting, persistent chat sessions, and multi-document Q&A; containerised with Docker and deployed on Vercel.',
    metrics: [
      { label: 'Response', value: '<500ms' },
      { label: 'API Calls', value: '−60%' },
      { label: 'Doc Formats', value: '4 types' },
      { label: 'Auth', value: 'JWT + limits' },
    ],
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Hugging Face', 'Redis', 'Google Gemini API', 'Docker', 'Vercel'],
    status: 'Active',
    link: 'https://github.com/Mukunth1004/ai-document-intelligence',
    period: 'May 2026 – Jun 2026',
  },
  {
    name: 'NeuralServe',
    tagline: 'Transformer Inference & Optimisation Platform',
    description:
      'Production-grade Transformer inference platform — fine-tuned 66M-parameter DistilBERT on 67K SST-2 samples with PyTorch + CUDA mixed-precision training (92%+ accuracy). Exported to ONNX with graph optimisations (attention fusion, constant folding) cutting latency 40%. Implemented 32-sample dynamic batching with ONNX Runtime boosting throughput 4x. Built 6-endpoint FastAPI server with PostgreSQL logging and Docker deployment serving 1,000+ RPM.',
    metrics: [
      { label: 'Accuracy', value: '92%+' },
      { label: 'Latency', value: '40% faster' },
      { label: 'Throughput', value: '4x batch' },
      { label: 'RPM', value: '1,000+' },
    ],
    stack: ['PyTorch', 'ONNX Runtime', 'FastAPI', 'PostgreSQL', 'Docker', 'HuggingFace', 'CUDA', 'Next.js'],
    status: 'Active',
    link: 'https://github.com/Mukunth1004/NeuralServe',
    period: 'Personal Project',
  },
]

const other = [
  {
    name: 'CloudDeployX',
    description:
      'Production-grade FastAPI on GCP Cloud Run with Docker multi-stage builds and GitHub Actions CI/CD via Workload Identity Federation. Auto-scales 0→10 instances with Cloud Logging + Monitoring.',
    stack: ['FastAPI', 'Docker', 'GCP Cloud Run', 'GitHub Actions', 'Cloud Logging'],
    status: 'Active',
    link: 'https://github.com/Mukunth1004/CloudDeployX',
  },
  {
    name: 'Cloud Cost Prediction (KONE)',
    description:
      'XGBoost regression for AWS cost forecasting with 12 engineered features. FastAPI backend with service-wise cost breakdowns for EC2, S3, Lambda, DynamoDB, CloudWatch.',
    stack: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Pandas', 'AWS'],
    status: 'Complete',
    link: null,
  },
  {
    name: 'MoBRec',
    description:
      'Mood-Based Music Recommendation system with Spotify API integration — detects mood from user input and surfaces personalised track recommendations.',
    stack: ['Python', 'Spotify API', 'ML', 'FastAPI'],
    status: 'Complete',
    link: 'https://github.com/Mukunth1004/MoBRec',
  },
]

const statusStyles = {
  Active: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
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

        {/* Featured */}
        <div className="space-y-5 mt-16">
          {featured.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 + i * 0.14 }}
              className="border-beam-card group"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight group-hover:shimmer-text transition-all">{proj.name}</h3>
                    <p className="text-sm text-white/35 mt-0.5">{proj.tagline}</p>
                    <p className="text-xs text-white/20 mt-1">{proj.period}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <StatusBadge status={proj.status} />
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                        <FiGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-white/45 leading-relaxed mb-7">{proj.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                  {proj.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] py-3 px-4 text-center hover:border-white/12 transition-colors">
                      <div className="text-sm font-semibold text-white/80">{m.value}</div>
                      <div className="text-xs text-white/30 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
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
              className="bento-card p-6 flex flex-col"
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
                  <span key={tech} className="text-xs text-white/30 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.05]">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
