'use client';

import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="badge-accent inline-block">
            🚀 Available for Opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="gradient-text">Full Stack</span>
          <br />
          <span className="text-white">Engineer</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-400"
        >
          DevOps • Cloud • Architecture
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Building scalable cloud solutions with <span className="text-white font-semibold">Kubernetes</span>, <span className="text-white font-semibold">Docker</span>, and modern technologies.
          Architecting resilient systems that power enterprise applications and drive business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap"
        >
          <Link
            to="projects"
            spy
            smooth
            className="btn-primary cursor-pointer flex items-center justify-center gap-2"
          >
            View My Work ↓
          </Link>
          <a
            href="https://github.com/Mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FiGithub size={20} /> GitHub Profile
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="mailto:mukunth.s1004@gmail.com"
            className="p-3 glass-effect rounded-full hover:glow-box transition-all"
            title="Email"
          >
            <FiMail size={24} className="text-white" />
          </a>
          <a
            href="https://linkedin.com/in/s-mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-full hover:glow-box transition-all"
            title="LinkedIn"
          >
            <FiLinkedin size={24} className="text-white" />
          </a>
          <a
            href="https://github.com/Mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-full hover:glow-box transition-all"
            title="GitHub"
          >
            <FiGithub size={24} className="text-white" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-600 font-medium">Scroll to explore</p>
            <FiArrowDown className="text-white text-2xl animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
