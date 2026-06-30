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
  { icon: '⚡', title: 'Full Stack Engineering',  desc: 'React, Next.js, Node.js, FastAPI — end-to-end production systems' },
  { icon: '☸️', title: 'DevOps & Cloud',          desc: 'Kubernetes, Docker, GitLab CI/CD, Helm, AWS — zero-downtime deploys' },
  { icon: '🤖', title: 'AI / ML Integration',    desc: 'RAG pipelines, XGBoost, TensorFlow, Hugging Face, pgvector' },
  { icon: '🗄️', title: 'Data Engineering',       desc: 'PostgreSQL, Redis, async migrations, indexing & performance tuning' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-eyebrow">
          Background
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="section-heading"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start mt-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="space-y-4"
          >
            <p className="leading-relaxed text-[0.95rem]" style={{ color: 'var(--text-muted)' }}>
              I&apos;m a{' '}
              <span className="font-semibold text-white">Full Stack Engineer</span> with a B.E. in
              Computer Science &amp; Engineering from{' '}
              <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>
                Anna University, Trichy
              </span>{' '}
              (CGPA 7.9, 2025). I build production-grade systems end-to-end — from high-performance
              backend APIs and cloud infrastructure to ML inference platforms and modern web frontends.
            </p>
            <p className="leading-relaxed text-[0.95rem]" style={{ color: 'var(--text-muted)' }}>
              My background spans{' '}
              <span className="font-semibold text-white">DevOps &amp; Kubernetes engineering</span>
              {' '}(K3s, Helm, GitLab CI/CD, Docker),{' '}
              <span className="font-semibold text-white">full-stack development</span>
              {' '}(FastAPI, Node.js, React, Next.js, TypeScript), and{' '}
              <span className="font-semibold text-white">AI/ML integration</span>
              {' '}(RAG pipelines, XGBoost, Hugging Face, pgvector).
            </p>
            <p className="leading-relaxed text-[0.95rem]" style={{ color: 'var(--text-muted)' }}>
              I care deeply about{' '}
              <span className="font-semibold text-white">performance and reliability</span> — optimising
              database queries for 50%+ speed gains, engineering sub-500ms response times via Redis
              caching, and achieving zero-downtime deployments across multi-environment Kubernetes clusters.
            </p>

            {/* Focus area bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.36 + i * 0.08 }}
                  className="bento-card p-4 group"
                >
                  <span className="text-lg mb-2 block group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1">{area.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
                    {area.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.32 + i * 0.08 }}
                  className="glow-card p-5 text-center"
                >
                  <div
                    className="text-[2rem] font-black tracking-tight leading-none mb-1"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-light), #ffffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-xs font-semibold text-white">{label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>{sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.64 }}
              className="border-beam-card p-5"
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'var(--accent-soft)', border: '1px solid var(--border-hover)' }}
                >
                  🎓
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Anna University</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    B.E. Computer Science &amp; Engineering
                  </div>
                  <div className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
                    Trichy, India &nbsp;·&nbsp; Nov 2021 – Jun 2025 &nbsp;·&nbsp; CGPA 7.9
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.72 }}
              className="card-premium p-4 flex items-center gap-3.5"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ background: 'var(--accent-soft)' }}
              >
                📍
              </div>
              <div>
                <div className="text-sm font-medium text-white">Chennai / Bangalore, India</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-subtle)' }}>
                  Open to remote opportunities
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
