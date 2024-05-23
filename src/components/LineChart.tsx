import React from 'react';
import { useQuery } from 'react-query';
import { fetchHistoricalData } from '../api';
import { Line } from 'react-chartjs-2';

const LineChart: React.FC = () => {
  const { data, isLoading, error } = useQuery('historicalData', fetchHistoricalData);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data || !data.data) return <div>Error loading data</div>;

  const chartData = {
    labels: Object.keys(data.data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.data.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data.data.deaths),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Recovered',
        data: Object.values(data.data.recovered),
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
