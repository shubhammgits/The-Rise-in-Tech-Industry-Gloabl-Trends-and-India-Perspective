'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shubhammgits', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shhshubham/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shubhamm18.work@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Datasets', href: '/datasets' },
    { label: 'Visuals', href: '/visuals' },
    { label: 'Model', href: '/model' },
    { label: 'Conclusion', href: '/conclusion' },
  ]

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/40 backdrop-blur-md">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-bold gradient-text font-display mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-primary transition-colors duration-300 font-space text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold gradient-text font-display mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 hover:border-primary/50 transition-all duration-300 text-primary hover:shadow-glow group"
                  title={label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <Icon size={20} className="relative" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  )
}
