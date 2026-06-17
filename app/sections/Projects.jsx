'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const featured = [
  {
    name: 'NeuralServe',
    tagline: 'Transformer Inference & Optimization Platform',
    description:
      'Fine-tuned 66M-parameter DistilBERT on 67K SST-2 samples with PyTorch + CUDA mixed-precision training, achieving 92%+ validation accuracy in 3 epochs. Exported to ONNX with graph optimizations (attention fusion, constant folding, memory scheduling), cutting inference latency 40% faster than PyTorch baseline. Implemented 32-sample dynamic batching with Rust-backed HuggingFace tokenizers and ONNX Runtime, boosting throughput 4x over sequential inference. Built 6-endpoint FastAPI inference server with PostgreSQL logging and Docker deployment serving 1,000+ requests/minute.',
    metrics: [
      { label: 'Accuracy', value: '92%+' },
      { label: 'Latency', value: '40% faster' },
      { label: 'Throughput', value: '4x batch' },
      { label: 'RPM', value: '1,000+' },
    ],
    stack: ['PyTorch', 'ONNX Runtime', 'FastAPI', 'PostgreSQL', 'Docker', 'HuggingFace', 'CUDA', 'Next.js'],
    status: 'Active',
    statusColor: 'blue',
    link: 'https://github.com/Mukunth1004/NeuralServe',
  },
  {
    name: 'AI Document Intelligence Platform',
    tagline: 'RAG-Powered Q&A for Multi-Format Documents',
    description:
      'End-to-end RAG SaaS platform using asynchronous programming with FastAPI REST APIs, PostgreSQL via SQLAlchemy ORM, pgvector, and Redis caching. Supports 4 document formats (PDF, DOCX, TXT, Markdown) handling 1,000+ concurrent requests per minute. Optimised semantic vector search with Hugging Face sentence-transformers achieving sub-500ms response times, reducing Gemini AI/ML integration calls by 60% and query latency by 40%. Event-driven architecture with tiktoken-based document chunking, PyJWT authentication, and Prometheus metrics.',
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
    name: 'CloudDeployX',
    description:
      'Production-grade FastAPI REST API containerized with Docker multi-stage builds and deployed on GCP Cloud Run. Zero-downtime GitHub Actions CI/CD pipeline using Workload Identity Federation (no static keys). Auto-scales 0→10 instances with Cloud Logging + Cloud Monitoring.',
    stack: ['FastAPI', 'Python 3.12', 'Docker', 'GCP Cloud Run', 'GitHub Actions', 'Artifact Registry', 'Cloud Logging'],
    status: 'Active',
    link: 'https://github.com/Mukunth1004/CloudDeployX',
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
    name: 'Faculty Information System',
    description:
      'Web-based ASP.NET system enabling faculty members to manage profiles, academic descriptions, and achievements. Role-based access control for faculty and administrative staff. Built with C# and .NET.',
    stack: ['C#', '.NET', 'ASP.NET', 'SQL Server', 'MVC'],
    status: 'Complete',
    link: 'https://github.com/Mukunth1004/Faculty-Information-System',
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
                      <FiGithub size={16} />
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
