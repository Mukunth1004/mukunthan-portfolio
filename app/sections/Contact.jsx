'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiExternalLink, FiArrowRight } from 'react-icons/fi'

const contacts = [
  { label: 'Email',    value: 'mukunth.s1004@gmail.com',  href: 'mailto:mukunth.s1004@gmail.com',            icon: FiMail,        sub: 'Best for project inquiries' },
  { label: 'LinkedIn', value: '/in/s-mukunth1004',         href: 'https://www.linkedin.com/in/s-mukunth1004', icon: FiLinkedin,    sub: 'Professional network' },
  { label: 'GitHub',   value: 'Mukunth1004',               href: 'https://github.com/Mukunth1004',            icon: FiGithub,      sub: 'Open source & projects' },
  { label: 'GitLab',   value: 'mukunth.s1004',             href: 'https://gitlab.com/mukunth.s1004',          icon: FiExternalLink,sub: 'CI/CD & private repos' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-eyebrow">
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="section-heading"
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-4 mb-8 leading-relaxed max-w-md mx-auto text-[0.95rem]"
          style={{ color: 'var(--text-muted)' }}
        >
          Open to full-time roles, freelance projects, and interesting conversations.
          Based in Chennai — remote-friendly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mb-10"
        >
          <a href="mailto:mukunth.s1004@gmail.com">
            <button className="btn-primary group">
              Say Hello
              <FiArrowRight size={14} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contacts.map(({ label, value, href, icon: Icon, sub }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.28 + i * 0.07 }}
              className="card-premium p-5 text-left group"
            >
              <Icon
                size={16}
                className="mb-3 transition-colors duration-200"
                style={{ color: 'var(--accent-light)' }}
              />
              <div
                className="text-xs mb-1 font-semibold tracking-wide uppercase"
                style={{ color: 'var(--text-subtle)' }}
              >
                {label}
              </div>
              <div className="text-xs font-medium leading-snug truncate text-white">{value}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-subtle)' }}>{sub}</div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65 }}
          className="mt-16 pt-8 border-t text-xs space-y-1"
          style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}
        >
          <p>Built with Next.js 14, React 18 &amp; Framer Motion · Hosted on Vercel</p>
          <p>© 2025 Mukunthan Karuppaiah S · Chennai, India</p>
        </motion.div>
      </div>
    </section>
  )
}
