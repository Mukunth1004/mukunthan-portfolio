'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '99.8%', label: 'Uptime Achieved' },
  { value: '50%', label: 'API Speed Gain' },
  { value: '20+', label: 'Bugs Resolved' },
  { value: '10K+', label: 'Users Served' },
]

const highlights = [
  'Led K8s migration of 7 services + 6 PostgreSQL DBs from Orion to Hetzner K3s',
  'Zero-downtime DB migrations with 51K+ rows — taskmanager 207MB, erpdatabase and more',
  'PageSpeed: Performance 45 → 86+, Accessibility 86 → 100, SEO 98 → 100',
  'RAG platform with <500ms vector search, Redis caching reducing API calls by 60%',
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
              I'm a Full Stack Engineer at{' '}
              <span className="text-white font-medium">Spizen Technologies</span>, Bangalore, building
              and shipping production-grade systems end-to-end — React/Remix frontends, Node.js/FastAPI
              backends, and Kubernetes-orchestrated infrastructure on Hetzner K3s.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              My work sits at the intersection of product and platform: I architect features for real
              users while owning the infrastructure they run on. I've managed large-scale database
              migrations, resolved 20+ production bugs across 7 microservices, designed Apache Superset
              KPI dashboards, and led CI/CD pipelines from GitLab to Helm deployments.
            </p>
            <p className="text-white/55 leading-relaxed text-[0.95rem]">
              B.E. Computer Science from{' '}
              <span className="text-white font-medium">Anna University</span> (2025). Before Spizen, I
              drove a full CSR→SSR migration at Soft Suave and built ML-powered cost prediction at
              KONE Elevator. I ship fast, measure obsessively, and iterate with data.
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
                  B.E. CSE · Anna University · 2025
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
