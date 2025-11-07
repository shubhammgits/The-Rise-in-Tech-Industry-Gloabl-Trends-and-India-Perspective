'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: any[];
  dataKey: string;
  nameKey: string;
  title: string;
  color?: string;
}

export default function CustomBarChart({ data, dataKey, nameKey, title, color = '#3b82f6' }: BarChartProps) {
  return (
    <div className="w-full h-80">
      <h3 className="text-lg font-medium text-center mb-4 text-slate-200">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey={nameKey} 
            angle={-45} 
            textAnchor="end" 
            height={60}
            tick={{ fill: '#cbd5e1', fontSize: 12 }}
          />
          <YAxis 
            tick={{ fill: '#cbd5e1', fontSize: 12 }}
            tickFormatter={(value) => {
              if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
              return value;
            }}
          />
          <Tooltip
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              borderColor: '#334155',
              borderRadius: '0.5rem',
              color: '#f1f5f9'
            }}
            formatter={(value) => [`${Number(value).toLocaleString()}`, '']}
            labelStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
          />
          <Legend />
          <Bar 
            dataKey={dataKey} 
            fill={color} 
            name={title}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}