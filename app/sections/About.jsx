'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Deployed', value: '10+' },
    { label: 'Technologies', value: '25+' },
    { label: 'QA Pass Rate', value: '100%' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Engineer with deep expertise in DevOps and Cloud Infrastructure.
              Currently at Spizen Technologies, I specialize in architecting and deploying scalable cloud
              solutions using Kubernetes, Docker, and modern web technologies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey spans from frontend development with React and Remix SSR to backend services with
              Node.js and FastAPI, complemented by robust DevOps practices. I've successfully led database
              migrations, architected Kubernetes clusters, and optimized systems achieving 99.8% uptime.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about solving complex problems, optimizing performance, and building resilient
              systems that scale. When I'm not coding, you'll find me exploring new technologies or contributing
              to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glow-box glass-effect p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
