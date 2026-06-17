'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const groups = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['FastAPI', 'React.js', 'Next.js', 'Node.js', 'TailwindCSS', 'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'ONNX Runtime'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'pgvector'],
  },
  {
    category: 'Data & Machine Learning',
    skills: ['XGBoost', 'Scikit-learn', 'Pandas', 'CUDA', 'AI/ML Integrations'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'Helm', 'GitLab CI/CD', 'GitHub Actions', 'AWS'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'Jira', 'Apache Superset'],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
              className="card-premium p-6"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs text-white/60 bg-white/[0.04] rounded-full border border-white/[0.07] hover:border-white/20 hover:text-white/90 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
