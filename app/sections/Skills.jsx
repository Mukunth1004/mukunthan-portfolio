'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Remix (SSR)', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML5/CSS3'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'JWT Auth'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'DBeaver', 'Query Optimization', 'Migration'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Kubernetes (K3s)', 'Docker', 'Hetzner Cloud', 'AWS', 'GitLab CICD', 'Helm'],
    },
    {
      category: 'Infrastructure',
      skills: ['Traefik', 'cert-manager', 'Longhorn', 'Prometheus', 'Rancher', 'Linux Admin'],
    },
    {
      category: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Proxmox', 'Tailscale'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          Technical Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glow-box glass-effect p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-accent mb-4 border-b border-accent pb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
