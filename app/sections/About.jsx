'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '99.8%', label: 'Uptime Achieved' },
  { value: '50%+', label: 'API Speed Gain' },
  { value: '1,000+', label: 'Requests / Min' },
  { value: '7', label: 'Microservices Managed' },
]

const highlights = [
  'Managing Kubernetes (K3s) clusters with 7 microservices and 6 PostgreSQL databases at 99.8% uptime',
  'Built transformer inference platform — DistilBERT fine-tuned with PyTorch + CUDA, 40% faster via ONNX',
  'Engineered GitLab CI/CD across 27 jobs with Helm-based K8s deployments across Dev, UAT, and Production',
  'RAG platform with sub-500ms vector search and Redis caching reducing API calls by 60%',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="section-heading"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start mt-16">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="space-y-5"
          >
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              I&apos;m a{' '}
              <span className="text-white font-medium">Full Stack Engineer</span> at{' '}
              <span className="text-white font-medium">Spizen Technologies</span>, Bangalore, building
              and shipping production-grade systems end-to-end — from FastAPI and Node.js backends to
              Kubernetes-orchestrated infrastructure and ML inference platforms.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              My work spans both product and platform: I manage{' '}
              <span className="text-white font-medium">Kubernetes (K3s) clusters</span> hosting 7
              microservices, execute zero-downtime PostgreSQL migrations, and build GitLab CI/CD
              pipelines across 27 jobs with Helm deployments across Dev, UAT, and Production environments.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              On the AI/ML side, I built{' '}
              <span className="text-white font-medium">NeuralServe</span> — a transformer inference
              platform fine-tuning DistilBERT with PyTorch + CUDA and optimizing via ONNX graph
              compilation. I also built a RAG document intelligence platform using pgvector,
              Hugging Face, and Redis achieving sub-500ms vector search.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              B.E. Computer Science from{' '}
              <span className="text-white font-medium">Anna University</span> (2025, CGPA 7.9).
              Previously at Soft Suave Technologies (Shopify SSR migration, PageSpeed 45→86+)
              and KONE Elevator (AWS cost prediction with XGBoost + FastAPI).
            </p>

            <ul className="space-y-2.5 pt-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/40 leading-relaxed">
                  <span className="flex-shrink-0 w-1 h-1 rounded-full bg-white/25 mt-[9px]" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.38 + i * 0.09 }}
                className="card-premium p-7 text-center"
              >
                <div className="text-[2.4rem] font-bold tracking-tight leading-none mb-2">
                  {value}
                </div>
                <div className="text-xs text-white/35 tracking-wide uppercase font-medium">
                  {label}
                </div>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.74 }}
              className="card-premium p-6 col-span-2 flex items-center gap-5"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-lg">
                📍
              </div>
              <div>
                <div className="text-sm font-medium text-white/80">Chennai / Bangalore, India</div>
                <div className="text-xs text-white/30 mt-0.5">
                  B.E. CSE · Anna University · 2025 · CGPA 7.9
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
