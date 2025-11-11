'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function AnimatedHero({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* 3D Floating Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 blur-3xl"
        animate={{ 
          y: [0, -60, 0], 
          x: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ filter: 'blur(40px)' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent via-secondary to-primary rounded-full opacity-15 blur-3xl"
        animate={{ 
          y: [0, 60, 0], 
          x: [0, -40, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        style={{ filter: 'blur(40px)' }}
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
      whileHover={{ y: -10, rotateX: 5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-card-3d p-8 rounded-2xl ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function MetricCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotateY: 5, rotateX: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="metric-card relative overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Gradient Border Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: 20, scale: 1.2 }}
            className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10"
          >
            <Icon className="text-primary" size={24} />
          </motion.div>
          <h3 className="text-sm font-medium text-slate-400 font-space">{label}</h3>
        </div>
        <p className="text-4xl font-bold gradient-text font-display">{value}</p>
      </div>

      {/* Glow Effect */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 rounded-2xl pointer-events-none"
      />
    </motion.div>
  )
}

export function FloatingCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ 
        y: [0, -30, 0],
        rotateZ: [-5, 0, -5]
      }}
      transition={{ duration: 7, repeat: Infinity, delay }}
      className="glass-card p-8 rounded-2xl"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}
