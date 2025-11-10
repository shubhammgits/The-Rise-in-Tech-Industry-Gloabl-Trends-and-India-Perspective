'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shubhammgits', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shhshubham/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shubhamm18.work@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t glass-card bg-white/50 dark:bg-slate-900/50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">TechRise</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Analyzing the rise of technology industry through data-driven insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Datasets', href: '/datasets' },
                { label: 'Visuals', href: '/visuals' },
                { label: 'Model', href: '/model' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="p-3 glass-card rounded-lg hover:shadow-glow transition-all duration-300"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> by Shubham
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} The Rise in Tech Industry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
