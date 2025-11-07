import Header from '../components/Header';
import Footer from '../components/Footer';
import ComparisonChart from '../components/ComparisonChart';

// Mock data for demonstration
const comparisonData = [
  { name: 'Global Tech Industry', value: 18500000000000, color: '#3b82f6' },
  { name: 'Indian Tech Startups', value: 21000000000, color: '#10b981' },
];

const growthData = [
  { name: 'Global Tech Growth (5yr)', value: 8.2, color: '#3b82f6' },
  { name: 'Indian Startup Growth (5yr)', value: 22.4, color: '#10b981' },
];

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">Comparative Insights</h1>
          <p className="text-slate-400 mb-8">Global vs Indian Technology Industry Analysis</p>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Global vs Indian Tech Industry</h2>
            <ComparisonChart 
              data={comparisonData} 
              title="Total Valuation / Funding (USD)" 
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Global Tech Leaders</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-slate-200">United States</p>
                    <p className="text-sm text-slate-400">$12.5 Trillion market cap</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-slate-200">China</p>
                    <p className="text-sm text-slate-400">$3.2 Trillion market cap</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-slate-200">India</p>
                    <p className="text-sm text-slate-400">$180 Billion market cap</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Growth Trajectory</h2>
              <ComparisonChart 
                data={growthData} 
                title="Average Annual Growth Rate (%)" 
              />
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Key Comparative Insights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">Scale Difference</h3>
                <p className="text-slate-300">
                  While the global technology industry is measured in trillions, India's startup ecosystem 
                  is in the billions. However, India's growth rate significantly outpaces global averages.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">Sector Focus</h3>
                <p className="text-slate-300">
                  Global tech is dominated by established giants in software, semiconductors, and consumer electronics. 
                  India's ecosystem is more diverse with strong representation in IT services, fintech, and e-commerce.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">Investment Patterns</h3>
                <p className="text-slate-300">
                  Global tech companies are primarily funded through public markets and strategic investments. 
                  India's startup ecosystem relies heavily on venture capital and private equity funding.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">Future Potential</h3>
                <p className="text-slate-300">
                  India's tech sector, while smaller in current scale, shows tremendous growth potential with 
                  a young demographic dividend, increasing digital adoption, and supportive government policies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Strategic Recommendations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-300 mb-2">For Indian Startups</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Focus on deep-tech and emerging sectors</li>
                  <li>• Leverage government digital initiatives</li>
                  <li>• Expand to tier-2 and tier-3 cities</li>
                  <li>• Build stronger global partnerships</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-300 mb-2">For Global Investors</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Increase allocation to Indian tech</li>
                  <li>• Focus on fintech and healthtech</li>
                  <li>• Partner with local accelerators</li>
                  <li>• Understand regulatory landscape</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-300 mb-2">For Policymakers</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Improve ease of doing business</li>
                  <li>• Strengthen IPR protection</li>
                  <li>• Invest in digital infrastructure</li>
                  <li>• Support R&D initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}