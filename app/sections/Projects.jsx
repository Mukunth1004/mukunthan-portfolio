'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'MyBuildGuide',
      subtitle: 'Construction Project Management Platform',
      description: 'Architected Kubernetes cluster migration, optimized database queries achieving 65% performance improvement. Implemented 99.8% uptime infrastructure with zero data loss migration of 150+ GB.',
      metrics: [
        { label: 'Uptime', value: '99.8%' },
        { label: 'Performance', value: '+65%' },
        { label: 'Users', value: '10K+' },
      ],
      tech: ['Kubernetes', 'Docker', 'PostgreSQL', 'Hetzner Cloud', 'GitLab CI/CD', 'React'],
      link: 'https://nolimitnodes.com/',
      status: 'Production',
      featured: true,
    },
    {
      title: 'AI Document Intelligence',
      subtitle: 'RAG-Based Q&A System',
      description: 'FastAPI microservice with Claude AI integration. Engineered Redis caching reducing API calls by 60%. Deployed on Kubernetes with Prometheus monitoring achieving <500ms response time.',
      metrics: [
        { label: 'Response Time', value: '<500ms' },
        { label: 'API Reduction', value: '-60%' },
        { label: 'Throughput', value: '1000+ req/min' },
      ],
      tech: ['FastAPI', 'Claude API', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
      link: 'https://github.com/Mukunth1004',
      status: 'Active',
      featured: true,
    },
    {
      title: 'Phoenix - Checkout Builder',
      subtitle: 'Shopify Payment Solutions',
      description: 'Complete SSR migration using Remix. Improved PageSpeed Performance from 45 to 86+, SEO from 98 to 100, Accessibility from 86 to 100. Built customizable components for merchants.',
      metrics: [
        { label: 'Performance', value: '45→86+' },
        { label: 'SEO Score', value: '98→100' },
        { label: 'Accessibility', value: '86→100' },
      ],
      tech: ['Remix', 'React', 'TypeScript', 'Node.js', 'Performance Optimization'],
      link: 'https://github.com/Mukunth1004',
      status: 'Complete',
    },
    {
      title: 'No Limit Nodes',
      subtitle: 'Infrastructure Management Platform',
      description: 'High-performance platform with real-time monitoring and automated deployments. Serverless architecture with global edge deployments and advanced analytics.',
      metrics: [
        { label: 'Availability', value: '99.9%' },
        { label: 'Response', value: '<100ms' },
        { label: 'Regions', value: 'Global' },
      ],
      tech: ['React', 'Node.js', 'Kubernetes', 'Docker', 'AWS Lambda'],
      link: 'https://nolimitnodes.com/',
      status: 'Live',
    },
    {
      title: 'Cost Prediction Model',
      subtitle: 'ML-Based AWS Billing Analysis',
      description: 'Hybrid LSTM model with multi-head attention for AWS billing predictions. Achieved MAE of 2.13 and RMSE of 3.47. Optimized via MinMax scaling and feature engineering.',
      metrics: [
        { label: 'MAE', value: '2.13' },
        { label: 'RMSE', value: '3.47' },
        { label: 'Efficiency', value: '+40%' },
      ],
      tech: ['Python', 'TensorFlow', 'LSTM', 'XGBoost', 'AWS'],
      link: 'https://github.com/Mukunth1004',
      status: 'Complete',
    },
    {
      title: 'Dynamic Form Builder',
      subtitle: 'Google Forms-like Platform',
      description: 'Built with Remix SSR and JWT authentication. Supports role-based access control, dynamic form creation, and duplicate submission prevention with responsive dashboards.',
      metrics: [
        { label: 'Auth', value: 'JWT' },
        { label: 'Forms', value: 'Dynamic' },
        { label: 'Security', value: 'Enterprise' },
      ],
      tech: ['Remix', 'JWT', 'React', 'Node.js', 'MySQL'],
      link: 'https://github.com/Mukunth1004',
      status: 'Production',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
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
            <span className="gradient-text">Featured</span> Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
        </motion.div>

        {/* Featured Projects First */}
        <div className="space-y-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-premium p-8 rounded-xl overflow-hidden group relative"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-accent to-transparent transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black gradient-text mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-400 font-medium">{project.subtitle}</p>
                  </div>
                  <span className="badge-success">{project.status}</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-gray-700">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="gradient-text font-black text-2xl">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge-accent text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-bold group/link"
                >
                  View Project
                  <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              viewport={{ once: true }}
              className="card-premium p-6 rounded-xl group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-white flex-1">{project.title}</h3>
                <span className="badge-accent text-xs">{project.status}</span>
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.subtitle}</p>

              {/* Mini Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center text-xs">
                {project.metrics.slice(0, 3).map((metric, i) => (
                  <div key={i}>
                    <div className="text-accent font-bold">{metric.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="badge-accent text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold text-sm"
              >
                View <FiExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
