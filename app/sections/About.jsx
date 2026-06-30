'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '7.9', label: 'CGPA', sub: 'Anna University' },
  { value: '3+', label: 'Roles', sub: 'Industry experience' },
  { value: '50%+', label: 'API Gain', sub: 'Query optimisation' },
  { value: '99.8%', label: 'Uptime', sub: 'K3s cluster SLA' },
]

const focusAreas = [
  {
    icon: '⚡',
    title: 'Full Stack Engineering',
    desc: 'React, Next.js, Node.js, FastAPI — end-to-end production systems from UI to DB',
  },
  {
    icon: '☸️',
    title: 'DevOps & Cloud',
    desc: 'Kubernetes, Docker, GitLab CI/CD, Helm Chart, AWS — zero-downtime deployments',
  },
  {
    icon: '🤖',
    title: 'AI / ML Integration',
    desc: 'RAG pipelines, XGBoost, TensorFlow, Hugging Face Transformers, pgvector',
  },
  {
    icon: '🗄️',
    title: 'Data Engineering',
    desc: 'PostgreSQL, Redis, async migrations, indexing, and query performance tuning',
  },
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

        <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-start mt-16">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="space-y-5"
          >
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              I&apos;m a{' '}
              <span className="text-white font-medium">Full Stack Engineer</span> with a B.E.
              in Computer Science &amp; Engineering from{' '}
              <span className="text-white font-medium">Anna University, Trichy</span> (CGPA 7.9, 2025).
              I build production-grade systems end-to-end — from high-performance backend APIs and
              cloud infrastructure to ML inference platforms and modern web frontends.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              My technical background spans{' '}
              <span className="text-white font-medium">DevOps &amp; Kubernetes engineering</span>{' '}
              (K3s clusters, Helm, GitLab CI/CD, Docker),{' '}
              <span className="text-white font-medium">full-stack development</span>{' '}
              (FastAPI, Node.js, React, Next.js, TypeScript), and{' '}
              <span className="text-white font-medium">AI/ML integration</span>{' '}
              (RAG pipelines, XGBoost, Hugging Face, pgvector). I thrive where reliable
              infrastructure meets fast product delivery.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              I care deeply about{' '}
              <span className="text-white font-medium">performance and reliability</span> —
              optimising database queries for 50%+ speed gains, engineering sub-500ms response
              times via Redis caching and vector search, and achieving zero-downtime deployments
              across multi-environment Kubernetes clusters.
            </p>

            {/* Focus area bento grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.42 + i * 0.08 }}
                  className="bento-card p-4 group"
                >
                  <span className="text-xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </span>
                  <h4 className="text-sm font-semibold text-white/80 mb-1">{area.title}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: stats + education */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.38 + i * 0.09 }}
                  className="glow-card p-6 text-center"
                >
                  <div className="text-[2.2rem] font-bold tracking-tight leading-none mb-1 shimmer-text">
                    {value}
                  </div>
                  <div className="text-xs text-white/60 font-medium">{label}</div>
                  <div className="text-xs text-white/25 mt-0.5">{sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.74 }}
              className="border-beam-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-xl">
                  🎓
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90">Anna University</div>
                  <div className="text-xs text-white/50 mt-0.5">B.E. Computer Science &amp; Engineering</div>
                  <div className="text-xs text-white/28 mt-1.5 leading-relaxed">
                    Trichy, India &nbsp;·&nbsp; Nov 2021 – Jun 2025 &nbsp;·&nbsp; CGPA 7.9
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.84 }}
              className="card-premium p-5 flex items-center gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/08 flex items-center justify-center text-base flex-shrink-0">
                📍
              </div>
              <div>
                <div className="text-sm text-white/70 font-medium">Chennai / Bangalore, India</div>
                <div className="text-xs text-white/30 mt-0.5">Open to remote opportunities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
