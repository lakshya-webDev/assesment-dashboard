import React from 'react';
import LineChartComponent from '../Charts/LineChart';
import useWebSocket from '../../hooks/useWebSocket';

const AdminView = () => {
  const { data, status, error } = useWebSocket('http://localhost:4000', 'chartData');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {status === 'connected' && <p className="text-green-600">Connected</p>}
      {status === 'reconnecting' && <p className="text-yellow-600">Reconnecting...</p>}
      {status === 'error' && <p className="text-red-600">Error: {error}</p>}
      {data.length > 0 ? (
        <LineChartComponent data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default AdminView;
