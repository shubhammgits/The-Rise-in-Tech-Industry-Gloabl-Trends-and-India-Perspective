'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/Cards'
import { Target, Lightbulb, Layers, CheckCircle } from 'lucide-react'

export default function About() {
  const sections = [
    {
      icon: Target,
      title: 'Project Goal',
      description: 'To analyze and understand the transformation of the global technology industry with a focus on India\'s emerging role as a tech innovation hub.',
    },
    {
      icon: Lightbulb,
      title: 'Motivation',
      description: 'India has become a significant player in the global tech industry, hosting numerous startups and attracting substantial international investment. This project investigates this phenomenon.',
    },
    {
      icon: Layers,
      title: 'Methodology',
      description: 'Using exploratory data analysis, statistical modeling, and machine learning to identify patterns, correlations, and forecast future trends in tech valuations and startup funding.',
    },
    {
      icon: CheckCircle,
      title: 'Key Deliverables',
      description: '8+ interactive visualizations, predictive models, correlation analysis between ICT infrastructure and funding, and comprehensive insights on global vs India perspectives.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            About This Project
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            A data-driven exploration of the technology industry's rise, with India at the forefront of this transformation. This project combines rigorous data analysis with machine learning to uncover insights about valuations, funding patterns, and ICT infrastructure development.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="section-container py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sections.map((section, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard>
                <section.icon className="text-indigo-600 dark:text-indigo-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Problem & Solution */}
      <section className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              The Problem We Address
            </h2>
            <ul className="space-y-4">
              {[
                'Understanding tech industry growth patterns globally',
                'Identifying India\'s competitive advantages',
                'Analyzing startup funding ecosystem in India',
                'Correlating ICT infrastructure with economic outcomes',
                'Forecasting future investment trends',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Our Solution
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              {[
                '📊 Comprehensive data analysis of 1000+ global tech companies',
                '🇮🇳 Deep dive into Indian startup funding dynamics',
                '🤖 Machine learning models for trend forecasting',
                '📈 Interactive visualizations for easy insights',
                '🔗 Correlation analysis between infrastructure and growth',
                '💡 Actionable insights for stakeholders',
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
