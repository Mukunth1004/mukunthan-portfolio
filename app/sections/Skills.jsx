'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Technologies',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Remix (SSR)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'TailwindCSS', level: 95 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: '🖥️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'FastAPI', level: 85 },
        { name: 'Python', level: 88 },
      ],
    },
    {
      category: 'Databases',
      icon: '💾',
      skills: [
        { name: 'PostgreSQL', level: 92 },
        { name: 'MySQL', level: 85 },
        { name: 'Query Optimization', level: 90 },
        { name: 'Database Migration', level: 88 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Kubernetes (K3s)', level: 92 },
        { name: 'Docker', level: 90 },
        { name: 'Hetzner Cloud', level: 88 },
        { name: 'AWS', level: 85 },
      ],
    },
    {
      category: 'Infrastructure',
      icon: '🔧',
      skills: [
        { name: 'Traefik', level: 85 },
        { name: 'GitLab CI/CD', level: 88 },
        { name: 'Helm', level: 86 },
        { name: 'Prometheus', level: 82 },
      ],
    },
    {
      category: 'Tools & Version Control',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 88 },
        { name: 'Postman', level: 90 },
      ],
    },
  ];

  const SkillBar = ({ name, level }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-accent font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Technical</span> Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-premium p-8 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-black text-white">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
