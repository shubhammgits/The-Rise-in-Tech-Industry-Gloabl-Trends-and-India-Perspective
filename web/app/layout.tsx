import type { Metadata } from 'next'
import './layout.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'The Rise in Tech Industry – Global Trends & India Perspective',
  description: 'Analyzing global technology industry trends and India\'s role through data-driven insights, machine learning models, and interactive visualizations.',
  keywords: ['tech industry', 'data analysis', 'India', 'machine learning', 'startup funding', 'ICT'],
  authors: [{ name: 'Shubham' }],
  creator: 'Shubham',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techrise.example.com',
    title: 'The Rise in Tech Industry',
    description: 'Analyzing the rise of technology industry through data-driven insights',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
