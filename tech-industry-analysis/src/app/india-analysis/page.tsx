import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomBarChart from '../components/BarChart';
import ScatterPlot from '../components/ScatterPlot';

// Mock data for demonstration
const topCitiesFundingData = [
  { city: 'Bengaluru', amount: 18500000000 },
  { city: 'Mumbai', amount: 12300000000 },
  { city: 'New Delhi', amount: 9800000000 },
  { city: 'Gurgaon', amount: 7600000000 },
  { city: 'Chennai', amount: 5400000000 },
  { city: 'Pune', amount: 4800000000 },
  { city: 'Hyderabad', amount: 4200000000 },
  { city: 'Ahmedabad', amount: 2900000000 },
  { city: 'Kolkata', amount: 2100000000 },
  { city: 'Jaipur', amount: 1800000000 },
];

const topCitiesICTData = [
  { city: 'Mumbai', averageScore: 45.2 },
  { city: 'Delhi', averageScore: 43.8 },
  { city: 'Bengaluru', averageScore: 42.1 },
  { city: 'Hyderabad', averageScore: 39.7 },
  { city: 'Chennai', averageScore: 37.5 },
  { city: 'Ahmedabad', averageScore: 35.2 },
  { city: 'Pune', averageScore: 34.8 },
  { city: 'Kolkata', averageScore: 32.4 },
  { city: 'Jaipur', averageScore: 30.1 },
  { city: 'Surat', averageScore: 28.7 },
];

// Mock data for correlation analysis
const correlationData = [
  { ictScore: 25.3, funding: 1200000000, city: 'Mumbai_2020' },
  { ictScore: 28.7, funding: 1500000000, city: 'Mumbai_2021' },
  { ictScore: 32.1, funding: 1800000000, city: 'Mumbai_2022' },
  { ictScore: 35.4, funding: 2100000000, city: 'Mumbai_2023' },
  { ictScore: 38.9, funding: 2400000000, city: 'Mumbai_2024' },
  { ictScore: 22.1, funding: 900000000, city: 'Delhi_2020' },
  { ictScore: 25.8, funding: 1100000000, city: 'Delhi_2021' },
  { ictScore: 29.4, funding: 1400000000, city: 'Delhi_2022' },
  { ictScore: 33.2, funding: 1700000000, city: 'Delhi_2023' },
  { ictScore: 36.7, funding: 2000000000, city: 'Delhi_2024' },
  { ictScore: 28.9, funding: 2200000000, city: 'Bengaluru_2020' },
  { ictScore: 32.4, funding: 2600000000, city: 'Bengaluru_2021' },
  { ictScore: 35.8, funding: 3100000000, city: 'Bengaluru_2022' },
  { ictScore: 39.2, funding: 3500000000, city: 'Bengaluru_2023' },
  { ictScore: 42.7, funding: 3900000000, city: 'Bengaluru_2024' },
];

export default function IndiaAnalysis() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">India Technology Ecosystem Analysis</h1>
          <p className="text-slate-400 mb-8">Exploring India's startup landscape and digital infrastructure</p>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Methodology</h2>
            <p className="text-slate-300 mb-4">
              This analysis combines Indian startup funding data with ICT development metrics 
              to understand the relationship between investment and digital infrastructure.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-blue-300">Data Sources</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>Indian Startup Funding Dataset</li>
                  <li>ICT Subdimension Dataset</li>
                  <li>City-wise funding and infrastructure metrics</li>
                  <li>Temporal funding trends</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-blue-300">Key Metrics</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>Total funding by city and year</li>
                  <li>ICT composite scores by city</li>
                  <li>Correlation between funding and infrastructure</li>
                  <li>Year-over-year growth rates</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Startup Funding by City</h2>
              <CustomBarChart 
                data={topCitiesFundingData} 
                dataKey="amount" 
                nameKey="city" 
                title="Total Startup Funding by City (USD)" 
                color="#f59e0b" 
              />
            </div>
            
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">ICT Development Index</h2>
              <CustomBarChart 
                data={topCitiesICTData} 
                dataKey="averageScore" 
                nameKey="city" 
                title="Average ICT Composite Score by City" 
                color="#8b5cf6" 
              />
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Correlation Analysis</h2>
            <ScatterPlot 
              data={correlationData} 
              title="Correlation between ICT Development and Startup Funding"
              xDataKey="ictScore"
              yDataKey="funding"
            />
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Key Findings</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Bengaluru, Delhi NCR, and Mumbai</span> emerge as 
                  the top funding destinations, representing the majority of India's startup investments.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Strong positive correlation</span> exists between 
                  ICT development metrics and startup funding, indicating that better digital infrastructure 
                  attracts more investment.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Consistent year-over-year growth</span> in startup 
                  funding demonstrates the resilience and potential of India's technology ecosystem.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Tier-2 cities</span> are showing increasing 
                  participation in the startup ecosystem, indicating a broader spread of technological development.
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