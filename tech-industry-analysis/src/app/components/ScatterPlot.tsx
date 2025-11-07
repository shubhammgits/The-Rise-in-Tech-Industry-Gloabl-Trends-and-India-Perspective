'use client';

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ScatterPlotProps {
  data: any[];
  title: string;
  xDataKey: string;
  yDataKey: string;
  zDataKey?: string;
}

export default function ScatterPlot({ data, title, xDataKey, yDataKey, zDataKey }: ScatterPlotProps) {
  return (
    <div className="w-full h-80">
      <h3 className="text-lg font-medium text-center mb-4 text-slate-200">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 60,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            type="number" 
            dataKey={xDataKey} 
            name="ICT Score"
            tick={{ fill: '#cbd5e1', fontSize: 12 }}
            label={{ 
              value: 'ICT Composite Score', 
              position: 'bottom',
              fill: '#94a3b8',
              fontSize: 14
            }}
          />
          <YAxis 
            type="number" 
            dataKey={yDataKey} 
            name="Funding"
            tick={{ fill: '#cbd5e1', fontSize: 12 }}
            tickFormatter={(value: number) => {
              if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
              return value.toString();
            }}
            label={{ 
              value: 'Startup Funding (USD)', 
              angle: -90, 
              position: 'left',
              fill: '#94a3b8',
              fontSize: 14
            }}
          />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              borderColor: '#334155',
              borderRadius: '0.5rem',
              color: '#f1f5f9'
            }}
            formatter={(value) => [`${Number(value).toLocaleString()}`, '']}
          />
          <Scatter 
            name="City-Year Data" 
            data={data} 
            fill="#3b82f6" 
            stroke="#1d4ed8"
            strokeWidth={1}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}