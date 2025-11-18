'use client'

import { motion } from 'framer-motion'
import GraphCard from '@/components/GraphCard'

export default function Visuals() {
  const graphs = [
    {
      title: 'Global vs India Valuation Comparison',
      description: 'Market capitalization comparison between global tech giants and Indian tech companies',
      imagePath: '/graphs/global-vs-india.png',
      insights: [
        'Global tech market dominated by US-based companies',
        'India emerging as significant player with growing valuations',
        'Sector diversity in Indian tech ecosystem',
      ],
    },
    {
      title: 'India Startup Funding Trends',
      description: 'Actual, predicted, and forecasted funding amounts for Indian startups (2015-2020)',
      imagePath: '/graphs/funding-trends.png',
      insights: [
        'Exponential growth in funding during 2016-2019',
        'Seasonal patterns in investment cycles',
        'ML model predictions align well with trends',
      ],
    },
    {
      title: 'Funding vs ICT Score Correlation',
      description: 'Bubble chart showing relationship between startup funding and city ICT infrastructure',
      imagePath: '/graphs/funding-ict.png',
      insights: [
        'Strong positive correlation between ICT and funding',
        'Metropolitan cities show higher funding concentration',
        'Infrastructure quality drives investment decisions',
      ],
    },
    {
      title: 'Top Indian Cities by ICT Score',
      description: 'Smart city readiness and digital infrastructure across major Indian cities',
      imagePath: '/graphs/top-cities-ict.png',
      insights: [
        'Bangalore leads in ICT infrastructure',
        'Metropolitan regions ahead in digital transformation',
        'Connectivity and governance scores vary significantly',
      ],
    },
    {
      title: 'Top Indian Cities by Total Funding',
      description: 'Cumulative startup funding by city (2015-2020)',
      imagePath: '/graphs/top-cities-funding.png',
      insights: [
        'Bangalore and Mumbai dominate funding landscape',
        'Funding concentration in tier-1 cities',
        'Emerging opportunities in tier-2 cities',
      ],
    },
    {
      title: 'Indian Startup Funding Growth Timeline',
      description: 'Year-wise growth in startup funding investments',
      imagePath: '/graphs/funding-timeline.png',
      insights: [
        'CAGR of 35% during 2015-2019',
        'Peak growth in 2018-2019',
        'Potential for 2020+ recovery post-COVID',
      ],
    },
    {
      title: 'Tech Sectors by Market Capitalization',
      description: 'Distribution of market cap across technology sectors globally',
      imagePath: '/graphs/sectors-marketcap.png',
      insights: [
        'Software & IT Services lead globally',
        'Hardware and semiconductors substantial portion',
        'Emerging sectors: AI, cybersecurity, cloud',
      ],
    },
    {
      title: 'Top Global Countries by Tech Companies',
      description: 'Number of top 1000 tech companies by country',
      imagePath: '/graphs/global-countries.png',
      insights: [
        'US dominates with 400+ companies',
        'China second with 200+ companies',
        'India rising with 50+ companies in top 1000',
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
            Interactive Visualizations
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Interactive visualizations revealing the dynamics of the global tech industry and India's emerging role.
          </p>
        </motion.div>
      </section>

      {/* Graphs Grid */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {graphs.map((graph, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <GraphCard {...graph} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Key Takeaways */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Key Takeaways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Leadership',
                points: [
                  'US dominates tech valuation',
                  'China rapidly expanding presence',
                  'Europe maintains significant share',
                ],
              },
              {
                title: 'India\'s Momentum',
                points: [
                  'Fastest growing startup ecosystem',
                  '35% CAGR in funding (2015-2019)',
                  'Tier-1 cities lead investment',
                ],
              },
              {
                title: 'Infrastructure Impact',
                points: [
                  'ICT quality drives investment',
                  'Connectivity essential for growth',
                  'Digital governance accelerates innovation',
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="text-indigo-500 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
