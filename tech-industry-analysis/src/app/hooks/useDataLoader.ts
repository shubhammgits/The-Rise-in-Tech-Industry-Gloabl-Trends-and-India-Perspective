'use client';

import { useState, useEffect } from 'react';
import { loadCSVData, processGlobalData, processStartupData, processICTData, mergeDatasets } from '../utils/dataProcessor';

export function useDataLoader() {
  const [globalData, setGlobalData] = useState<any>(null);
  const [startupData, setStartupData] = useState<any>(null);
  const [ictData, setIctData] = useState<any>(null);
  const [mergedData, setMergedData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load all datasets
        const [globalRaw, startupRaw, ictRaw] = await Promise.all([
          loadCSVData('/data/Top 1000 technology companies.csv'),
          loadCSVData('/data/startup_funding.csv'),
          loadCSVData('/data/ICT_Subdimension_Dataset.csv')
        ]);
        
        // Process the data
        const globalProcessed = processGlobalData(globalRaw);
        const startupProcessed = processStartupData(startupRaw);
        const ictProcessed = processICTData(ictRaw);
        
        // Merge datasets for correlation analysis
        const merged = mergeDatasets(startupProcessed.rawData, ictProcessed.rawData);
        
        // Set state
        setGlobalData(globalProcessed);
        setStartupData(startupProcessed);
        setIctData(ictProcessed);
        setMergedData(merged);
        setError(null);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  return { globalData, startupData, ictData, mergedData, loading, error };
}