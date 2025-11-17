'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ZoomIn } from 'lucide-react'

interface GraphCardProps {
  title: string
  description: string
  imagePath: string
  insights: string[]
}

export default function GraphCard({ title, description, imagePath, insights }: GraphCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card rounded-xl overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative w-full bg-gradient-card overflow-hidden flex items-center justify-center" style={{ aspectRatio: '16 / 9', minHeight: '300px' }}>
        <motion.img
          src={imagePath}
          alt={title}
          className="w-full h-full object-contain p-4"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300"
        >
          <ZoomIn className="text-white" size={32} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>

        {/* Insights */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Key Insights
          </h4>
          <ul className="space-y-1">
            {insights.map((insight, i) => (
              <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
