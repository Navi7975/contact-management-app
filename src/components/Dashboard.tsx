import React from 'react';
import LineChart from './LineChart';
import Map from './Map';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <LineChart />
      <Map />
    </div>
  );
};

export default Dashboard;
