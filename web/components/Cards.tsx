'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedHero({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 section-container text-center"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass-card p-6 rounded-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function MetricCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="metric-card"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</h3>
      </div>
      <p className="text-3xl font-bold gradient-text">{value}</p>
    </motion.div>
  )
}

export function FloatingCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
      className="glass-card p-6 rounded-xl"
    >
      {children}
    </motion.div>
  )
}
