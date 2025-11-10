'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedHero, GlassCard } from '@/components/Cards'
import { BarChart3, TrendingUp, Zap } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: 'Data-Driven Analysis',
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            The Rise in{' '}
            <span className="gradient-text">Tech Industry</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Exploring global trends and India's transformative role in the technology sector through comprehensive data analysis and machine learning insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visuals" className="btn-primary">
              View Analysis
            </Link>
            <a
              href="https://github.com/shubhammgits/The-Rise-in-Tech-Industry-Gloabl-Trends-and-India-Perspective"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Notebook
            </a>
          </div>
        </motion.div>
      </AnimatedHero>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Project Highlights
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              A comprehensive study combining data science, visualization, and machine learning
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
              >
                <GlassCard>
                  <feature.icon className="text-indigo-600 dark:text-indigo-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-2xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Ready to Explore the Data?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Dive into our interactive visualizations and machine learning insights
            </p>
            <Link href="/datasets" className="btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
