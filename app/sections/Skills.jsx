'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const groups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'],
    span: 'col-span-1',
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: ['FastAPI', 'React.js', 'Next.js', 'Node.js', 'Remix', 'Redux', 'TensorFlow', 'Hugging Face Transformers', 'Jest'],
    span: 'col-span-1 md:col-span-2',
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'pgvector'],
    span: 'col-span-1',
  },
  {
    category: 'Data & Machine Learning',
    icon: '🤖',
    skills: ['Pandas', 'XGBoost', 'Scikit-learn', 'Matplotlib', 'NumPy'],
    span: 'col-span-1',
  },
  {
    category: 'DevOps & Cloud',
    icon: '☸️',
    skills: ['Docker', 'Kubernetes', 'Helm Chart', 'GitLab CI/CD', 'GitHub Actions', 'AWS', 'Linux'],
    span: 'col-span-1 md:col-span-2',
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'Jira', 'Apache Superset', 'Postman', 'Cursor', 'Claude'],
    span: 'col-span-1',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-eyebrow"
        >
          Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="section-heading"
        >
          Technical Skills
        </motion.h2>

        {/* Magic UI bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
              className={`bento-card p-6 ${group.span}`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-lg">{group.icon}</span>
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-white/35">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.06 + j * 0.03 }}
                    className="px-3 py-1.5 text-xs text-white/60 bg-white/[0.04] rounded-lg border border-white/[0.07]
                               hover:border-white/20 hover:text-white/90 hover:bg-white/[0.07]
                               transition-all duration-200 cursor-default"
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
