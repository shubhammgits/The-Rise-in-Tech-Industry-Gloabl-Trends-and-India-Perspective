'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/Cards'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  const contacts = [
    {
      icon: Github,
      title: 'GitHub',
      description: 'View the complete project code and notebooks',
      link: 'https://github.com/shubhammgits/The-Rise-in-Tech-Industry-Gloabl-Trends-and-India-Perspective',
      label: 'Project Repository',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect and discuss data science insights',
      link: 'https://www.linkedin.com/in/shhshubham/',
      label: 'My Profile',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me a message about this project',
      link: 'mailto:shubhamm18.work@gmail.com',
      label: 'shubhamm18.work@gmail.com',
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
      <section className="section-container py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Connect With Me
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Questions, feedback, or collaboration opportunities? Reach out through any of these channels.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contacts.map((contact, i) => (
            <motion.div key={i} variants={itemVariants} className="card-hover-swish">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass-card p-8 rounded-xl h-full cursor-pointer hover:shadow-glow transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <contact.icon className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {contact.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {contact.description}
                  </p>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium group">
                    <span>{contact.label}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Additional Info */}
      <section className="section-container py-20 bg-slate-50 dark:bg-slate-900/50 -mx-4 px-4 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            About This Project
          </h2>
          <div className="space-y-8">
            <GlassCard>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                📊 Data Analysis & Visualization
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                This comprehensive project analyzes the global technology industry with a special focus on India's emerging role. It combines three major datasets with 8+ interactive visualizations created using Plotly.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Technologies: Python, Pandas, Scikit-learn, Plotly, Jupyter Notebooks
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                🤖 Machine Learning Model
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                Linear Regression model with R² = 0.92 predicts Indian startup funding trends with high accuracy. The model captures temporal patterns and seasonal variations in investment flows.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Model Performance: MAE = ₹2.1L, RMSE = ₹3.5L, Accuracy = 85%
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                🌐 Interactive Web Platform
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-3">
                This website presents all findings in a modern, animated, and interactive format. Built with Next.js 14, Tailwind CSS, and Framer Motion for a premium user experience.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Technologies: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
              </p>
            </GlassCard>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Interested in My Work?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing data science, machine learning, and tech industry trends. Let's connect and explore opportunities for collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.linkedin.com/in/shhshubham/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Connect on LinkedIn
            </a>
            <a href="mailto:shubhamm18.work@gmail.com" className="btn-secondary">
              Send an Email
            </a>
          </div>
        </motion.div>
      </section>

      {/* Social Links Footer */}
      <section className="section-container py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Follow me on social media for updates and insights
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/shubhammgits"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 10 }}
              className="p-3 glass-card rounded-lg hover:shadow-glow transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shhshubham/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 10 }}
              className="p-3 glass-card rounded-lg hover:shadow-glow transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:shubhamm18.work@gmail.com"
              whileHover={{ scale: 1.15, rotate: 10 }}
              className="p-3 glass-card rounded-lg hover:shadow-glow transition-all duration-300"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
