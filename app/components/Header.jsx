'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-2xl border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link to="home" smooth duration={600} className="cursor-pointer select-none">
          <span className="text-sm font-bold tracking-[-0.02em] text-white">
            MK<span className="text-white/20 font-light">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={700}
              offset={-64}
              spy
              activeClass="!text-white"
              className="text-sm text-white/35 hover:text-white/75 transition-colors duration-200 cursor-pointer tracking-[0.01em]"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:mukunth.s1004@gmail.com"
            className="text-sm px-4 py-1.5 rounded-full border border-white/15 text-white/55 hover:text-white hover:border-white/35 transition-all duration-200 ml-2"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/40 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-black/92 backdrop-blur-2xl border-b border-white/[0.05]"
          >
            <nav className="px-6 py-3 flex flex-col">
              {navItems.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={700}
                  offset={-64}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-white/45 hover:text-white transition-colors cursor-pointer border-b border-white/[0.04] last:border-0"
                >
                  {label}
                </Link>
              ))}
              <a
                href="mailto:mukunth.s1004@gmail.com"
                className="mt-3 mb-2 text-sm text-center py-2.5 rounded-full border border-white/15 text-white/55"
                onClick={() => setOpen(false)}
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
