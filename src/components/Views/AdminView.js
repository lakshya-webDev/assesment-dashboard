import React from 'react';
import LineChartComponent from '../Charts/LineChart';

const AdminView = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <LineChartComponent data={data} />
    </div>
  );
};

export default AdminView;