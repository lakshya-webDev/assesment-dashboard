import React from 'react';
import LineChartComponent from '../Charts/LineChart';
import useWebSocket from '../../hooks/useWebSocket';
import mockData from '../../data/mockdata';

const AdminView = () => {
  const { data, status, error } = useWebSocket('http://localhost:4000', 'chartData');

  // Fallback to mock data if no WebSocket data is available
  const chartData = data.length > 0 ? data : mockData;

  return (
    <div className="p-4">
      {status === 'connected' && <p className="text-green-600">Connected</p>}
      {status === 'reconnecting' && <p className="text-yellow-600">Reconnecting...</p>}
      {status === 'error' && <p className="text-red-600">Error: {error}</p>}
      {data.length > 0 ? (
        <LineChartComponent data={chartData } />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default AdminView;
