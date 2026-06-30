'use client'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const roles = ['Full Stack Engineer', 'DevOps & Cloud', 'AI / ML Engineer', 'Backend Architect']

export default function Hero() {
  const heroRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [roleIdx, setRoleIdx] = useState(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 })
  const spotlightBg = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(700px circle at ${x}px ${y}px, rgba(255,255,255,0.045), transparent 80%)`
  )

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = (e) => {
      const rect = el.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [mouseX, mouseY])

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Aceternity-style spotlight */}
      <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: spotlightBg }} />

      {/* Magic UI animated grid */}
      <div className="absolute inset-0 animated-grid opacity-[0.18]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.01] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_35%,#000_100%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 text-center max-w-5xl mx-auto px-6 py-32"
      >
        {/* Live badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2.5 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-white/40 tracking-[0.25em] uppercase font-medium">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name – shimmer on first word */}
        <motion.h1
          variants={item}
          className="text-[clamp(3rem,10vw,7rem)] font-bold tracking-[-0.03em] leading-[1.02] mb-6"
        >
          <span className="shimmer-text">Mukunthan</span>
          <br />
          <span className="text-white/15">Karuppaiah S</span>
        </motion.h1>

        {/* Cycling role badge */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-white/15" />
          <div className="relative h-6 overflow-hidden min-w-[260px]">
            <motion.p
              key={roleIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-white/40 text-center absolute inset-x-0"
            >
              {roles[roleIdx]}
            </motion.p>
          </div>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-white/15" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Building production-grade systems — Kubernetes clusters, FastAPI backends,
          React frontends, and ML inference platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Link to="projects" smooth duration={700} offset={-70}>
            <button className="btn-primary group min-w-[148px]">
              View My Work
              <FiArrowDown size={14} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </Link>
          <a href="https://github.com/Mukunth1004" target="_blank" rel="noopener noreferrer">
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
              className="text-white/20 hover:text-white/70 hover:scale-110 transition-all duration-300"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <FiArrowDown className="text-white/15" size={18} />
      </motion.div>
    </section>
  )
}
