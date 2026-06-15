'use client'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#000_100%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32"
      >
        {/* Live status badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-white/40 tracking-[0.25em] uppercase font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="text-[clamp(3rem,10vw,7rem)] font-bold tracking-[-0.03em] leading-[1.02] mb-5"
        >
          <span className="text-white">Mukunthan</span>
          <br />
          <span className="text-white/15">Karuppaiah S</span>
        </motion.h1>

        {/* Role divider */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-7">
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-white/15" />
          <p className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-white/35">
            Full Stack Engineer · DevOps · Cloud
          </p>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-white/15" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Building production-grade systems at{' '}
          <span className="text-white/75 font-normal">Spizen Technologies</span> —
          Kubernetes clusters, React frontends, and everything in between.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link to="projects" smooth duration={700} offset={-70}>
            <button className="btn-primary group min-w-[148px]">
              View My Work
              <FiArrowDown
                size={14}
                className="ml-2 group-hover:translate-y-0.5 transition-transform"
              />
            </button>
          </Link>
          <a
            href="https://github.com/Mukunth1004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-secondary group min-w-[148px]">
              <FiGithub size={14} className="mr-2" />
              GitHub
            </button>
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div variants={item} className="flex items-center justify-center gap-7">
          {[
            { icon: FiMail, href: 'mailto:mukunth.s1004@gmail.com', label: 'Email' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/s-mukunth1004', label: 'LinkedIn' },
            { icon: FiGithub, href: 'https://github.com/Mukunth1004', label: 'GitHub' },
            { icon: FiExternalLink, href: 'https://gitlab.com/mukunth.s1004', label: 'GitLab' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/20 hover:text-white/70 transition-colors duration-300"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FiArrowDown className="text-white/15" size={18} />
      </motion.div>
    </section>
  )
}
