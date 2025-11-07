'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  dataKeys: { key: string; name: string; color: string }[];
  title: string;
}

export default function CustomLineChart({ data, dataKeys, title }: LineChartProps) {
  return (
    <div className="w-full h-80">
      <h3 className="text-lg font-medium text-center mb-4 text-slate-200">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
            dataKey="year" 
            angle={-45} 
            textAnchor="end" 
            height={60}
            tick={{ fill: '#cbd5e1', fontSize: 12 }}
          />
          <YAxis 
            tick={{ fill: '#cbd5e1', fontSize: 12 }}
            tickFormatter={(value: number) => {
              if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
              return value.toString();
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
          {dataKeys.map((item, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={item.key}
              name={item.name}
              stroke={item.color}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}