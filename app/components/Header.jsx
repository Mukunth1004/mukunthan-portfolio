'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass-effect">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold gradient-text"
        >
          Mukunthan
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy
              smooth
              offset={-70}
              className="cursor-pointer hover:text-accent transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-dark-secondary flex flex-col gap-4 p-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={-70}
                className="cursor-pointer hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}
