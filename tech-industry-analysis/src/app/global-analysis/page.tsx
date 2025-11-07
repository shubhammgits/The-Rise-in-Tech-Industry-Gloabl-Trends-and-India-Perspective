import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomBarChart from '../components/BarChart';

// Mock data for demonstration
const topCountriesData = [
  { country: 'United States', marketCap: 12500000000000 },
  { country: 'China', marketCap: 3200000000000 },
  { country: 'India', marketCap: 180000000000 },
  { country: 'Japan', marketCap: 950000000000 },
  { country: 'Germany', marketCap: 720000000000 },
  { country: 'United Kingdom', marketCap: 680000000000 },
  { country: 'France', marketCap: 540000000000 },
  { country: 'South Korea', marketCap: 490000000000 },
  { country: 'Canada', marketCap: 420000000000 },
  { country: 'Israel', marketCap: 380000000000 },
];

const topSectorsData = [
  { sector: 'Software', companies: 245, totalMarketCap: 4200000000000 },
  { sector: 'Semiconductors', companies: 178, totalMarketCap: 3800000000000 },
  { sector: 'Consumer Electronics', companies: 156, totalMarketCap: 2900000000000 },
  { sector: 'IT Services', companies: 134, totalMarketCap: 1800000000000 },
  { sector: 'Communication Equipment', companies: 98, totalMarketCap: 1200000000000 },
  { sector: 'Internet Services', companies: 87, totalMarketCap: 950000000000 },
  { sector: 'Financial Technology', companies: 76, totalMarketCap: 780000000000 },
  { sector: 'Healthcare Technology', companies: 65, totalMarketCap: 620000000000 },
];

export default function GlobalAnalysis() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">Global Technology Industry Analysis</h1>
          <p className="text-slate-400 mb-8">Understanding the global landscape of technology companies</p>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Methodology</h2>
            <p className="text-slate-300 mb-4">
              This analysis is based on a dataset of the top 1000 global technology companies, 
              examining market capitalization, sector distribution, and geographical concentration.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-blue-300">Data Sources</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>Top 1000 Global Technology Companies Dataset</li>
                  <li>Market capitalization in USD</li>
                  <li>Sector and industry classifications</li>
                  <li>Geographical distribution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-blue-300">Key Metrics</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>Total market capitalization by country</li>
                  <li>Company count by sector</li>
                  <li>Average market cap by industry</li>
                  <li>Geographical concentration patterns</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Top Countries by Tech Companies</h2>
              <CustomBarChart 
                data={topCountriesData} 
                dataKey="marketCap" 
                nameKey="country" 
                title="Market Capitalization by Country (USD)" 
                color="#3b82f6" 
              />
            </div>
            
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Top Tech Sectors</h2>
              <CustomBarChart 
                data={topSectorsData} 
                dataKey="totalMarketCap" 
                nameKey="sector" 
                title="Market Capitalization by Sector (USD)" 
                color="#10b981" 
              />
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Key Findings</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">United States</span> dominates the global tech landscape 
                  with the highest number of major technology companies and total market capitalization.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">China</span> ranks second globally, with significant 
                  representation in hardware and consumer electronics sectors.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Semiconductors and Software sectors</span> represent 
                  the largest portions of the global technology market by both company count and market value.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">India and European countries</span> show strong 
                  representation in IT services and software development sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}