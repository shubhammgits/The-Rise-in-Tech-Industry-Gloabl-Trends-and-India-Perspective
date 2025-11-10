'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/Cards'
import { Zap, Globe, TrendingUp, Award, Target, Lightbulb } from 'lucide-react'

export default function Conclusion() {
  const conclusions = [
    {
      icon: Globe,
      title: 'Global Tech Market Dynamics',
      points: [
        'US maintains dominance with 40%+ market share',
        'China emerging as strong second player',
        'Market consolidation among top 10 companies',
        'Software and IT services lead growth',
      ],
    },
    {
      icon: TrendingUp,
      title: 'India\'s Tech Rise',
      points: [
        'India entering top 10 tech economies',
        '35% CAGR in startup funding (2015-2019)',
        'Strong venture capital ecosystem emerging',
        'Bangalore, Mumbai lead investment flows',
      ],
    },
    {
      icon: Zap,
      title: 'Infrastructure-Growth Nexus',
      points: [
        'ICT infrastructure strongly correlates with investment',
        'Digital governance attracts funding',
        'Connectivity quality drives competitiveness',
        'Smart city initiatives attract tech talent',
      ],
    },
    {
      icon: Award,
      title: 'Sectoral Opportunities',
      points: [
        'Software and IT services growing fastest',
        'Fintech becoming major investment sector',
        'Edtech attracting significant capital',
        'AI and cloud computing emerging leaders',
      ],
    },
  ]

  const recommendations = [
    {
      title: 'For Policy Makers',
      items: [
        'Invest in ICT infrastructure in tier-2 cities',
        'Develop startup ecosystem support policies',
        'Create innovation hubs in emerging cities',
        'Streamline regulatory framework for tech businesses',
      ],
    },
    {
      title: 'For Investors',
      items: [
        'India offers high growth, lower valuations than US',
        'Diversify across sectors (IT, fintech, edtech)',
        'Focus on tier-2 cities for growth opportunities',
        'Monitor ICT infrastructure when evaluating locations',
      ],
    },
    {
      title: 'For Entrepreneurs',
      items: [
        'Leverage strong startup ecosystem support',
        'Choose locations with robust ICT infrastructure',
        'Focus on underserved sectors in emerging cities',
        'Build globally competitive products',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Conclusion & Findings
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
            Synthesizing insights from comprehensive data analysis to understand the global tech landscape and India's transformative role.
          </p>
        </motion.div>
      </section>

      {/* Key Conclusions */}
      <section className="section-container py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {conclusions.map((conclusion, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard>
                <conclusion.icon className="text-indigo-600 dark:text-indigo-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  {conclusion.title}
                </h3>
                <ul className="space-y-3">
                  {conclusion.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-indigo-500 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Executive Summary */}
      <section className="section-container py-20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 -mx-4 px-4 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
              <Lightbulb className="text-yellow-500" size={32} />
              Executive Summary
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                This comprehensive analysis reveals a fundamental shift in the global technology industry. While the United States continues to dominate in terms of total market capitalization and number of leading companies, India has emerged as the fastest-growing tech ecosystem with a 35% CAGR in startup funding.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Our machine learning models (R² = 0.92) demonstrate the strong correlation between digital infrastructure (ICT scores) and investment flows. Cities with superior connectivity, governance, and digital services attract significantly more funding and talent.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                The data strongly suggests that India's tech industry will continue its upward trajectory, particularly if investments in ICT infrastructure expand to tier-2 cities. This presents unprecedented opportunities for entrepreneurs, investors, and policymakers.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recommendations */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            Strategic Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard>
                  <Target className="text-indigo-600 dark:text-indigo-400 mb-4" size={28} />
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                    {rec.title}
                  </h3>
                  <ul className="space-y-3">
                    {rec.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-500 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Future Outlook */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
            Future Outlook (2024-2028)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                Optimistic Scenario
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span>India becomes top 5 tech economy by 2028</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span>Startup funding reaches ₹100,000+ Cr annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span>Tier-2 cities contribute 40%+ of funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span>10+ Indian tech companies in global top 1000</span>
                </li>
              </ul>
            </GlassCard>
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-400">
                Challenges & Risks
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <span>Regulatory uncertainty and policy changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <span>Global economic slowdown impacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <span>Talent shortage in specialized domains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <span>Infrastructure gaps in emerging cities</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
