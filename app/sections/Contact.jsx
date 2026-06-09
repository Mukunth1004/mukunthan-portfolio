'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiGlobe, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const contacts = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mukunth.s1004@gmail.com',
      link: 'mailto:mukunth.s1004@gmail.com',
      description: 'Drop me a line for opportunities',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@Mukunth1004',
      link: 'https://github.com/Mukunth1004',
      description: 'Check out my open source work',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 's-mukunth1004',
      link: 'https://www.linkedin.com/in/s-mukunth1004',
      description: 'Connect with me professionally',
    },
    {
      icon: FiGlobe,
      label: 'Portfolio',
      value: 'mukunthan-portfolio-z7if.vercel.app',
      link: 'https://mukunthan-portfolio-z7if.vercel.app',
      description: 'This website',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="gradient-text">Let's</span> Connect
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Ready for exciting opportunities? Reach out to discuss how I can contribute to your next big project.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card-premium p-8 rounded-xl group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                    <Icon className="text-accent text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white">{contact.label}</h3>
                    <p className="text-sm text-gray-400 font-medium">{contact.description}</p>
                  </div>
                </div>
                <p className="text-accent-light font-semibold break-all group-hover:text-accent-light transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="card-premium p-12 rounded-xl text-center max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-black mb-4">Ready to Work Together?</h3>
          <p className="text-gray-400 mb-8 text-lg">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:mukunth.s1004@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            Send Me an Email
            <FiArrowRight size={20} />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Mukunthan S. Built with Next.js, React, and Framer Motion.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Hosted on Vercel. Always learning, always building. 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
