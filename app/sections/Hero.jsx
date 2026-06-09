'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Full Stack Engineer
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl mb-6 text-gray-300">
          DevOps & Cloud Infrastructure Specialist
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Architecting scalable cloud solutions with Kubernetes, Docker, and modern web technologies.
          Building resilient microservices that power enterprise applications.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-12">
          <Link
            to="projects"
            spy
            smooth
            className="px-8 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-accent-dark transition-colors cursor-pointer"
          >
            View My Work
          </Link>
          <a
            href="https://github.com/Mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-dark transition-colors rounded-lg font-bold"
          >
            GitHub Profile
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-accent text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
