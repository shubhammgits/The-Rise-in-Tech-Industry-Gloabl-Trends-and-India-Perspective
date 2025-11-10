'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/Cards'
import { Database, Layers } from 'lucide-react'

export default function Datasets() {
  const datasets = [
    {
      name: 'Top 1000 Technology Companies',
      rows: '1,000',
      columns: '8',
      description: 'Global dataset comprising the largest technology companies by market capitalization',
      attributes: [
        'Company Name',
        'Market Capitalization (USD)',
        'Country',
        'Sector',
        'Founded Year',
        'Employees',
        'Revenue',
        'Market Share Index',
      ],
      insights: 'Provides insight into global tech market concentration and geographic distribution',
    },
    {
      name: 'Indian Startup Funding Dataset',
      rows: '~2,000',
      columns: '12',
      description: 'Comprehensive data on Indian startup funding from 2015 to 2020',
      attributes: [
        'Company Name',
        'Funding Amount (INR)',
        'City',
        'Sector',
        'Stage',
        'Funding Date',
        'Investors',
        'Number of Investors',
        'Status',
        'Founded Year',
        'Headquarters',
        'Industry Vertical',
      ],
      insights: 'Reveals funding trends, city-wise distribution, and sector preferences in India',
    },
    {
      name: 'ICT Subdimension Dataset',
      rows: '~100',
      columns: '10',
      description: 'Smart city ICT infrastructure scores across Indian cities',
      attributes: [
        'City Name',
        'Overall ICT Score',
        'Connectivity Score',
        'Procurement Score',
        'Governance Score',
        'Digital Services Score',
        'Infrastructure Index',
        'Readiness Level',
        'Competitiveness Rank',
        'Growth Potential',
      ],
      insights: 'Demonstrates correlation between ICT infrastructure and tech ecosystem development',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
            Dataset Overview
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Explore the three comprehensive datasets that power our analysis of the global and Indian tech industries.
          </p>
        </motion.div>
      </section>

      {/* Datasets Cards */}
      <section className="section-container py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {datasets.map((dataset, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <GlassCard className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <Database className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      {dataset.name}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      {dataset.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Rows</p>
                    <p className="text-2xl font-bold gradient-text">{dataset.rows}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Columns</p>
                    <p className="text-2xl font-bold gradient-text">{dataset.columns}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Insights</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{dataset.insights}</p>
                  </div>
                </div>

                {/* Attributes */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Layers size={20} className="text-indigo-600 dark:text-indigo-400" />
                    Key Attributes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {dataset.attributes.map((attr, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                      >
                        <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                        {attr}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Data Pipeline */}
      <section className="section-container py-20 bg-slate-50 dark:bg-slate-900/50 -mx-4 px-4 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Data Processing Pipeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Collection', desc: 'Gather data from multiple sources' },
              { step: '2', title: 'Cleaning', desc: 'Handle missing values & outliers' },
              { step: '3', title: 'Analysis', desc: 'Exploratory data analysis & stats' },
              { step: '4', title: 'Modeling', desc: 'Build ML models & visualizations' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
