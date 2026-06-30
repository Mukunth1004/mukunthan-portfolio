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
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(2,6,23,0.88)] backdrop-blur-2xl border-b border-[rgba(99,102,241,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="home" smooth duration={600} className="cursor-pointer select-none">
          <span className="text-sm font-bold tracking-[-0.02em]">
            <span className="text-white">MK</span>
            <span className="text-[#6366f1] font-light">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={700}
              offset={-64}
              spy
              activeClass="!text-[#818cf8]"
              className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200 cursor-pointer tracking-[0.01em]"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:mukunth.s1004@gmail.com"
            className="text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-200 ml-2"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              boxShadow: '0 0 16px rgba(99,102,241,0.25)',
            }}
          >
            Hire me
          </a>
        </nav>

        <button
          className="md:hidden text-[#94a3b8] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-b border-[rgba(99,102,241,0.1)]"
            style={{ background: 'rgba(2,6,23,0.96)', backdropFilter: 'blur(20px)' }}
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
                  className="py-3 text-sm text-[#94a3b8] hover:text-[#818cf8] transition-colors cursor-pointer border-b border-[rgba(99,102,241,0.07)] last:border-0"
                >
                  {label}
                </Link>
              ))}
              <a
                href="mailto:mukunth.s1004@gmail.com"
                className="mt-3 mb-2 text-sm text-center py-2.5 rounded-full font-medium"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
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
