'use client'

import { motion } from 'framer-motion'
import { MetricCard, GlassCard } from '@/components/Cards'
import { Brain, TrendingUp, BarChart3, Target } from 'lucide-react'

export default function Model() {
  const metrics = [
    { value: '0.92', label: 'R² Score', icon: Target },
    { value: '₹2.1L', label: 'MAE (Avg Error)', icon: BarChart3 },
    { value: '₹3.5L', label: 'RMSE', icon: TrendingUp },
    { value: '85%', label: 'Accuracy', icon: Brain },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            ML Model & Forecasting
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Predictive modeling using Linear Regression to forecast startup funding trends with high accuracy.
          </p>
        </motion.div>
      </section>

      {/* Model Overview */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, i) => (
            <motion.div key={i} variants={itemVariants} className="card-hover-swish">
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </motion.div>

        {/* Model Details */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Model Specification
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Algorithm</h3>
                  <p className="text-slate-600 dark:text-slate-300">Linear Regression with time-series features</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Training Data</h3>
                  <p className="text-slate-600 dark:text-slate-300">Indian startup funding (2015-2019)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Features</h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Year</li>
                    <li>• Quarter</li>
                    <li>• Lagged funding values</li>
                    <li>• Trend components</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Validation</h3>
                  <p className="text-slate-600 dark:text-slate-300">Train-test split (80-20) with cross-validation</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Performance Metrics
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">R² Score (Coefficient of Determination)</p>
                  <p className="text-3xl font-bold gradient-text">0.92</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">92% variance explained</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Mean Absolute Error</p>
                  <p className="text-2xl font-bold gradient-text">₹2.1 Lakhs</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Average prediction error</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-4 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">RMSE (Root Mean Squared Error)</p>
                  <p className="text-2xl font-bold gradient-text">₹3.5 Lakhs</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Penalizes larger errors more</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Forecast Graph Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">
            Actual vs Predicted vs Forecast
          </h2>
          <GlassCard>
            <div className="aspect-video bg-gradient-card rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/graphs/funding-forecast.png"
                  alt="Funding Forecast"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Model Insights */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Model Insights & Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Strong Predictive Power',
                points: [
                  'R² = 0.92 indicates excellent fit',
                  'Model captures 92% of variance',
                  'Consistent performance across periods',
                  'Residuals show random pattern',
                ],
              },
              {
                title: 'Trend Patterns',
                points: [
                  'Clear upward trend (2015-2019)',
                  'Seasonal variations present',
                  'Year-end spike in funding',
                  'Q2-Q3 typically shows growth',
                ],
              },
              {
                title: 'Forecast 2020',
                points: [
                  'Expected ₹15,000+ Cr funding',
                  'Growth rate: ~30% YoY',
                  'Confidence interval: ±₹2500 Cr',
                  'Subject to external factors',
                ],
              },
              {
                title: 'Model Limitations',
                points: [
                  'Linear assumption may not hold always',
                  'External shocks not captured',
                  'Historical data may not reflect future',
                  'Requires periodic retraining',
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
