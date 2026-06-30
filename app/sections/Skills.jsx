'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const groups = [
  {
    icon: '💻',
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    icon: '🗄️',
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'pgvector'],
  },
  {
    icon: '🛠️',
    category: 'Tools & Platforms',
    skills: ['Git', 'Jira', 'Apache Superset', 'Postman', 'Cursor', 'Claude', 'Linux'],
  },
  {
    icon: '⚡',
    category: 'Frameworks & Libraries',
    skills: ['FastAPI', 'React.js', 'Next.js', 'Node.js', 'Remix', 'Redux', 'TensorFlow', 'Hugging Face', 'Jest'],
  },
  {
    icon: '☸️',
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Helm Chart', 'GitLab CI/CD', 'GitHub Actions', 'AWS'],
  },
  {
    icon: '🤖',
    category: 'Data & ML',
    skills: ['Pandas', 'XGBoost', 'Scikit-learn', 'Matplotlib', 'NumPy'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-eyebrow">
          Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="section-heading"
        >
          Technical Skills
        </motion.h2>

        {/* Simple equal 3-col grid — no span, no alignment bugs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
              className="bento-card p-5 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}
                >
                  {group.icon}
                </span>
                <h3
                  className="text-xs font-bold tracking-[0.15em] uppercase"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 + j * 0.025 }}
                    className="px-2.5 py-1 text-xs rounded-lg transition-all duration-200 cursor-default"
                    style={{
                      color: 'var(--text-muted)',
                      background: 'rgba(99,102,241,0.06)',
                      border: '1px solid var(--border)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--accent-light)'
                      e.currentTarget.style.borderColor = 'var(--border-hover)'
                      e.currentTarget.style.background = 'var(--accent-soft)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-muted)'
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.background = 'rgba(99,102,241,0.06)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
