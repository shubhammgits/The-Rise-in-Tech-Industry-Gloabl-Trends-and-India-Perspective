import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            The Rise of the Tech Industry
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            Global Trends and Indian Perspective - A Data Science Analysis
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/global-analysis" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Explore Global Trends
            </a>
            <a 
              href="/india-analysis" 
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Analyze India's Growth
            </a>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Project Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-blue-400 text-2xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                <p className="text-slate-400">
                  Comprehensive analysis of global technology companies, Indian startup funding, 
                  and ICT development metrics using modern data science techniques.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-blue-400 text-2xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                <p className="text-slate-400">
                  Examination of market capitalization trends across countries and sectors 
                  to understand the global technology landscape.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-blue-400 text-2xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-semibold mb-3">Indian Ecosystem</h3>
                <p className="text-slate-400">
                  Deep dive into India's startup funding patterns, city-wise performance, 
                  and correlation with digital infrastructure development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Key Insights</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Global Dominance</h3>
              <p className="text-slate-300">
                The USA and China lead the global tech space with massive market capitalization, 
                while India is rapidly emerging as a competitive innovation hub.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">India's Growth Potential</h3>
              <p className="text-slate-300">
                Analysis shows a positive upward trend in India's annual startup funding, 
                with cities like Bengaluru, Delhi NCR, and Mumbai emerging as hotspots.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">ICT Correlation</h3>
              <p className="text-slate-300">
                Strong correlation found between ICT development indicators and startup funding volume, 
                indicating that digital infrastructure significantly impacts investment.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">Predictive Outlook</h3>
              <p className="text-slate-300">
                Forecasting models predict a steady increase in startup funding over the next five years, 
                indicating a strong trajectory for India's tech sector.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}