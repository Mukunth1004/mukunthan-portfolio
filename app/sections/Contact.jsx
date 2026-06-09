'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';

export default function Contact() {
  const contacts = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mukunth.s1004@gmail.com',
      link: 'mailto:mukunth.s1004@gmail.com',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'Mukunth1004',
      link: 'https://github.com/Mukunth1004',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 's-mukunth1004',
      link: 'https://www.linkedin.com/in/s-mukunth1004',
    },
    {
      icon: FiExternalLink,
      label: 'Blog',
      value: 'yogs447.blogspot.com',
      link: 'https://yogs447.blogspot.com/',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300">
            Open to collaborations and exciting projects. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="glow-box glass-effect p-8 rounded-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{contact.label}</h3>
                </div>
                <p className="text-gray-400 break-all group-hover:text-accent transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-400">
            © 2024 Mukunthan S. All rights reserved. Built with Next.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
