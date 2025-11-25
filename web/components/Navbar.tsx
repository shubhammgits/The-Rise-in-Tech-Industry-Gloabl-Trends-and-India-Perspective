'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Datasets', href: '/datasets' },
    { label: 'Visuals', href: '/visuals' },
    { label: 'Model', href: '/model' },
    { label: 'Conclusion', href: '/conclusion' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950/40 pointer-events-none" />
      
      <div className="section-container relative">
        <div className="flex items-center justify-between h-20">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-slate-300 font-space font-medium text-sm hover:text-primary transition-colors duration-300 hover:bg-white/5 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-slate-300 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 text-slate-300 hover:text-primary font-space font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
