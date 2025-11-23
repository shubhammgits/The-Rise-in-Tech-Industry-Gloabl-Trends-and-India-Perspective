'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedHero, GlassCard } from '@/components/Cards'
import { BarChart3, TrendingUp, Zap } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: 'Data Driven Analysis',
      description: 'Comprehensive analysis of 1000+ global tech companies and Indian startup ecosystem',
    },
    {
      icon: TrendingUp,
      title: 'ML Forecasting',
      description: 'Linear regression models for predicting startup funding trends',
    },
    {
      icon: Zap,
      title: 'Interactive Visuals',
      description: 'Beautiful, responsive dashboards with 8+ visualizations',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <>
      <AnimatedHero>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-display">
            <span className="text-white">Tech Innovation</span>
            <br />
            <span className="text-white">Global Trends & India's Rise</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-body">
            Exploring the technology industry's transformation with comprehensive data analysis, machine learning forecasting, and insights into India's emerging tech ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/visuals" className="btn-primary inline-block">
                Explore Analysis
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://github.com/shubhammgits/The-Rise-in-Tech-Industry-Gloabl-Trends-and-India-Perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                View on GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedHero>

      {/* Features Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white font-display">
                Project Highlights
              </h2>
              <p className="text-lg text-slate-300 font-body">
                A comprehensive study combining data science, visualization, and machine learning
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div key={i} variants={itemVariants} className="card-hover-swish">
                  <GlassCard>
                    <div className="inline-block p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
                      <motion.div whileHover={{ rotate: 20, scale: 1.1 }}>
                        <feature.icon className="text-primary" size={32} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white font-display">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 font-body">
                      {feature.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-40" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="glass-card p-12 rounded-2xl text-center border border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-display">
                Ready to Explore the Data?
              </h2>
              <p className="text-lg text-slate-300 mb-8 font-body">
                Dive into our interactive visualizations and machine learning insights
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/datasets" className="btn-primary inline-block">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
