// Utility functions to process the data from CSV files
import Papa from 'papaparse';

// Function to load and parse CSV data
export async function loadCSVData(filePath: string): Promise<any[]> {
  try {
    const response = await fetch(filePath);
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data as any[]);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error loading CSV data:', error);
    return [];
  }
}

// Process global tech companies data
export function processGlobalData(data: any[]) {
  // Convert market cap to numeric values
  const processedData = data.map(item => {
    let marketCap = 0;
    const marketCapStr = item['Market Cap'] || item['MarketCap_BillionUSD'];
    
    if (typeof marketCapStr === 'string') {
      if (marketCapStr.includes('T')) {
        marketCap = parseFloat(marketCapStr.replace('$', '').replace('T', '')) * 1000;
      } else if (marketCapStr.includes('B')) {
        marketCap = parseFloat(marketCapStr.replace('$', '').replace('B', ''));
      } else {
        marketCap = parseFloat(marketCapStr.replace('$', '').replace(',', ''));
      }
    }
    
    return {
      ...item,
      MarketCap_BillionUSD: marketCap
    };
  });
  
  // Group by country
  const countries: {[key: string]: number} = {};
  processedData.forEach(item => {
    const country = item['Country'];
    if (country) {
      if (!countries[country]) {
        countries[country] = 0;
      }
      countries[country] += item.MarketCap_BillionUSD || 0;
    }
  });
  
  // Convert to array and sort
  const countryData = Object.entries(countries)
    .map(([country, marketCap]) => ({ country, marketCap }))
    .sort((a, b) => b.marketCap - a.marketCap);
  
  // Group by sector
  const sectors: {[key: string]: {count: number, totalMarketCap: number}} = {};
  processedData.forEach(item => {
    const sector = item['Sector'];
    if (sector) {
      if (!sectors[sector]) {
        sectors[sector] = { count: 0, totalMarketCap: 0 };
      }
      sectors[sector].count += 1;
      sectors[sector].totalMarketCap += item.MarketCap_BillionUSD || 0;
    }
  });
  
  // Convert to array and sort by market cap
  const sectorData = Object.entries(sectors)
    .map(([sector, data]) => ({ sector, ...data }))
    .sort((a, b) => b.totalMarketCap - a.totalMarketCap);
  
  return {
    rawData: processedData,
    topCountries: countryData.slice(0, 15),
    topSectors: sectorData.slice(0, 15)
  };
}

// Process startup funding data
export function processStartupData(data: any[]) {
  // Convert amount to numeric values and parse dates
  const processedData = data.map(item => {
    let amount = 0;
    const amountStr = item['Amount in USD'] || item['AmountUSD'];
    
    if (typeof amountStr === 'string') {
      amount = parseFloat(amountStr.replace(/,/g, '')) || 0;
    }
    
    // Parse date
    let dateObj = null;
    const dateStr = item['Date dd/mm/yyyy'] || item['Date'];
    if (dateStr) {
      // Handle dd/mm/yyyy format
      const parts = dateStr.split('/');
      if (parts.length === 3) {
        dateObj = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
      } else {
        dateObj = new Date(dateStr);
      }
    }
    
    const year = dateObj ? dateObj.getFullYear() : null;
    
    return {
      ...item,
      AmountUSD: amount,
      Date: dateObj,
      Year: year
    };
  }).filter(item => item.AmountUSD > 0 && item.Year);
  
  // Group by year
  const fundingByYear: {[key: number]: number} = {};
  processedData.forEach(item => {
    if (item.Year) {
      if (!fundingByYear[item.Year]) {
        fundingByYear[item.Year] = 0;
      }
      fundingByYear[item.Year] += item.AmountUSD;
    }
  });
  
  // Convert to array and sort
  const yearlyFundingData = Object.entries(fundingByYear)
    .map(([year, amount]) => ({ year: parseInt(year), amount }))
    .sort((a, b) => a.year - b.year);
  
  // Group by city
  const fundingByCity: {[key: string]: number} = {};
  processedData.forEach(item => {
    const city = item['City  Location'] || item['City'];
    if (city) {
      if (!fundingByCity[city]) {
        fundingByCity[city] = 0;
      }
      fundingByCity[city] += item.AmountUSD;
    }
  });
  
  // Convert to array and sort
  const cityFundingData = Object.entries(fundingByCity)
    .map(([city, amount]) => ({ city, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 20);
  
  return {
    rawData: processedData,
    yearlyFunding: yearlyFundingData,
    topCities: cityFundingData
  };
}

// Process ICT data
export function processICTData(data: any[]) {
  // Calculate composite score
  const processedData = data.map(item => {
    // Calculate ICT composite score from various metrics
    const metrics = [
      parseFloat(item['Household Internet Access (%)']) || 0,
      parseFloat(item['Fixed Broadband Subscriptions (%)']) || 0,
      parseFloat(item['Wireless Broadband Subscriptions (%)']) || 0,
      parseFloat(item['Wireless Broadband Coverage 3G (%)']) || 0,
      parseFloat(item['Wireless Broadband Coverage 4G (%)']) || 0,
      parseFloat(item['Open data (%)']) || 0,
      parseFloat(item['e-Government (%)']) || 0
    ];
    
    // Calculate average of available metrics
    const validMetrics = metrics.filter(m => m > 0);
    const compositeScore = validMetrics.length > 0 
      ? validMetrics.reduce((sum, val) => sum + val, 0) / validMetrics.length 
      : 0;
    
    return {
      ...item,
      ICT_CompositeScore: compositeScore
    };
  });
  
  // Group by city and calculate average composite score
  const cityScores: {[key: string]: number[]} = {};
  processedData.forEach(item => {
    const city = item['City'];
    if (city) {
      if (!cityScores[city]) {
        cityScores[city] = [];
      }
      cityScores[city].push(item.ICT_CompositeScore);
    }
  });
  
  // Calculate average scores and convert to array
  const cityICTData = Object.entries(cityScores)
    .map(([city, scores]) => {
      const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      return { city, averageScore };
    })
    .sort((a, b) => b.averageScore - a.averageScore)
    .slice(0, 15);
  
  return {
    rawData: processedData,
    topCities: cityICTData
  };
}

// Merge datasets for correlation analysis
export function mergeDatasets(startupData: any[], ictData: any[]) {
  // Group ICT data by city and year
  const ictLookup: {[key: string]: any} = {};
  ictData.forEach(item => {
    const key = `${item['City']}_${item['Year']}`;
    ictLookup[key] = item;
  });
  
  // Merge with startup data
  const merged = startupData.map(item => {
    const key = `${item['City  Location'] || item['City']}_${item['Year']}`;
    const ictItem = ictLookup[key];
    
    return {
      ...item,
      ICT_CompositeScore: ictItem ? ictItem.ICT_CompositeScore : null
    };
  }).filter(item => item.ICT_CompositeScore !== null);
  
  return merged;
}