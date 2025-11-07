import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomLineChart from '../components/LineChart';

// Mock data for demonstration
const fundingTrendData = [
  { year: 2015, actual: 3200000000, predicted: null },
  { year: 2016, actual: 3800000000, predicted: null },
  { year: 2017, actual: 4900000000, predicted: null },
  { year: 2018, actual: 6500000000, predicted: null },
  { year: 2019, actual: 8200000000, predicted: null },
  { year: 2020, actual: 10500000000, predicted: null },
  { year: 2021, actual: 13800000000, predicted: 13800000000 },
  { year: 2022, actual: 16200000000, predicted: 16200000000 },
  { year: 2023, actual: 18500000000, predicted: 18500000000 },
  { year: 2024, actual: 21000000000, predicted: 21000000000 },
  { year: 2025, actual: null, predicted: 24800000000 },
  { year: 2026, actual: null, predicted: 29000000000 },
  { year: 2027, actual: null, predicted: 33500000000 },
  { year: 2028, actual: null, predicted: 38200000000 },
  { year: 2029, actual: null, predicted: 43000000000 },
];

export default function Forecast() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">Forecasting India's Tech Growth</h1>
          <p className="text-slate-400 mb-8">Predictive analysis of future trends in India's technology sector</p>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Methodology</h2>
            <p className="text-slate-300 mb-4">
              Using linear regression models to predict future startup funding trends based on historical data.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-blue-300">Model Details</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>Linear Regression model</li>
                  <li>Historical funding data (2015-2024)</li>
                  <li>Time series analysis</li>
                  <li>Evaluation metrics: R², MAE, RMSE</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-blue-300">Forecast Period</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  <li>5-year projection (2025-2029)</li>
                  <li>Confidence intervals</li>
                  <li>Comparison with historical trends</li>
                  <li>Sensitivity analysis</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Funding Trend Analysis</h2>
            <CustomLineChart 
              data={fundingTrendData} 
              dataKeys={[
                { key: 'actual', name: 'Actual Funding', color: '#3b82f6' },
                { key: 'predicted', name: 'Predicted Funding', color: '#10b981' }
              ]}
              title="Historical and Predicted Startup Funding Trends (USD)"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Model Performance</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">R² Score</span>
                  <span className="text-blue-300 font-medium">0.85</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">Mean Absolute Error</span>
                  <span className="text-blue-300 font-medium">12.5%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">Root Mean Square Error</span>
                  <span className="text-blue-300 font-medium">15.2%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">5-Year Forecast</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">2025</span>
                  <span className="text-blue-300 font-medium">↑ 18.2% growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">2026</span>
                  <span className="text-blue-300 font-medium">↑ 16.8% growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">2027</span>
                  <span className="text-blue-300 font-medium">↑ 15.4% growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">2028</span>
                  <span className="text-blue-300 font-medium">↑ 14.1% growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">2029</span>
                  <span className="text-blue-300 font-medium">↑ 12.7% growth</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Key Insights</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  The model predicts <span className="text-blue-300 font-medium">steady growth</span> in startup 
                  funding over the next five years, with an average annual increase of 15%.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Conservative estimates</span> suggest the total 
                  startup funding could reach $25B by 2029, assuming current trends continue.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Digital transformation initiatives</span> by the 
                  government and private sector are expected to be key drivers of this growth.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">•</div>
                <p className="text-slate-300">
                  <span className="text-blue-300 font-medium">Emerging sectors</span> like fintech, healthtech, 
                  and edtech are projected to attract significant investment in the coming years.
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