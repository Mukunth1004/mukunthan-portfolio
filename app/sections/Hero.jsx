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

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-10 left-20 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-blob"
        />
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 right-20 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-blob animation-delay-2000"
        />
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-500 opacity-5 rounded-full blur-3xl animate-blob animation-delay-4000"
        />
      </div>

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
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-300"
        >
          DevOps • Cloud • Architecture
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Building scalable cloud solutions with <span className="gradient-text font-semibold">Kubernetes</span>, <span className="gradient-text font-semibold">Docker</span>, and modern technologies.
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
            <FiMail size={24} className="text-accent" />
          </a>
          <a
            href="https://linkedin.com/in/s-mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-full hover:glow-box transition-all"
            title="LinkedIn"
          >
            <FiLinkedin size={24} className="text-accent" />
          </a>
          <a
            href="https://github.com/Mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-full hover:glow-box transition-all"
            title="GitHub"
          >
            <FiGithub size={24} className="text-accent" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            { label: 'Years Exp', value: '1+' },
            { label: 'Projects', value: '10+' },
            { label: 'Technologies', value: '25+' },
          ].map((stat, i) => (
            <div key={i} className="glass-effect p-3 rounded-lg">
              <div className="gradient-text font-black text-2xl">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-400 font-medium">Scroll to explore</p>
            <FiArrowDown className="text-accent text-2xl animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
