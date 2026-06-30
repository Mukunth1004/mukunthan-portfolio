'use client'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const roles = ['Full Stack Engineer', 'DevOps & Cloud', 'AI / ML Engineer', 'Backend Architect']

export default function Hero() {
  const heroRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [roleIdx, setRoleIdx] = useState(0)

  const sx = useSpring(mouseX, { stiffness: 60, damping: 30 })
  const sy = useSpring(mouseY, { stiffness: 60, damping: 30 })
  const spotlight = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(700px circle at ${x}px ${y}px, rgba(99,102,241,0.07), transparent 80%)`
  )

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const h = (e) => {
      const r = el.getBoundingClientRect()
      mouseX.set(e.clientX - r.left)
      mouseY.set(e.clientY - r.top)
    }
    el.addEventListener('mousemove', h)
    return () => el.removeEventListener('mousemove', h)
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
      style={{ background: 'var(--bg)' }}
    >
      {/* Aceternity spotlight */}
      <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: spotlight }} />

      {/* Gradient orbs */}
      <div
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 animate-float"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 animate-float"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', animationDelay: '2s' }}
      />
      <div
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full blur-[90px] opacity-10"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent 70%)' }}
      />

      {/* Magic UI grid */}
      <div className="absolute inset-0 animated-grid opacity-[0.22] z-0" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_50%,transparent_30%,var(--bg)_100%)] z-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 text-center max-w-5xl mx-auto px-6 py-28"
      >
        {/* Live badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2.5 mb-8">
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#818cf8',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Open to opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-[clamp(3rem,9.5vw,6.5rem)] font-black tracking-[-0.04em] leading-[1.0] mb-4"
        >
          <span className="shimmer-text">Mukunthan</span>
          <br />
          <span style={{ color: 'rgba(226,232,240,0.18)' }}>Karuppaiah S</span>
        </motion.h1>

        {/* Cycling role */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(to right, transparent, var(--border-hover))' }} />
          <div className="relative h-6 overflow-hidden min-w-[240px]">
            <motion.p
              key={roleIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-x-0 text-center text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: 'var(--accent-light)' }}
            >
              {roles[roleIdx]}
            </motion.p>
          </div>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(to left, transparent, var(--border-hover))' }} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light"
          style={{ color: 'var(--text-muted)' }}
        >
          Building production-grade systems — Kubernetes clusters, FastAPI backends,
          React frontends, and ML inference platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
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

        {/* Socials */}
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          {[
            { icon: FiMail,        href: 'mailto:mukunth.s1004@gmail.com',          label: 'Email' },
            { icon: FiLinkedin,    href: 'https://www.linkedin.com/in/s-mukunth1004', label: 'LinkedIn' },
            { icon: FiGithub,      href: 'https://github.com/Mukunth1004',           label: 'GitHub' },
            { icon: FiExternalLink,href: 'https://gitlab.com/mukunth.s1004',         label: 'GitLab' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ color: 'var(--text-subtle)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-subtle)'; e.currentTarget.style.background = 'transparent'; }}
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
        style={{ color: 'var(--text-subtle)' }}
      >
        <FiArrowDown size={18} />
      </motion.div>
    </section>
  )
}
