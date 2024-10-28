import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { Date: dateString, Open, High, Low, Close, Volume } = payload[0].payload; // Destructure the data for display
    
    // Ensure the date string is in a format that can be parsed
    const date = new Date(dateString); 

    return (
      <div className="tooltip">
        <p>Date: {date.toLocaleDateString()}</p>
        <p>Open: {Open}</p>
        <p>High: {High}</p>
        <p>Low: {Low}</p>
        <p>Close: {Close}</p>
        <p>Volume: {Volume}</p>
      </div>
    );
  }
  return null;
};

const LineChartComponent = ({ data }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 

  // Filter state
  const [filter, setFilter] = useState('');

  // Handle pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle filter
  const filteredData = currentData.filter(item => 
    item.Date.toString().includes(filter) || 
    item.Open.toString().includes(filter) || 
    item.High.toString().includes(filter) || 
    item.Low.toString().includes(filter) || 
    item.Close.toString().includes(filter) || 
    item.Volume.toString().includes(filter)
  );

  // Pagination buttons
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="line-chart-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Filter by date or value" 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
      />
      
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={filteredData}>
          <XAxis 
            dataKey="Date" 
            tickFormatter={(dateString) => new Date(dateString).toLocaleDateString()} 
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="Close" stroke="#8884d8" strokeWidth={2} dot={{ stroke: '#8884d8', strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => paginate(index + 1)} 
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineChartComponent;
