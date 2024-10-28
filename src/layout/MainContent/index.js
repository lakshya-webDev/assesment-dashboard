import React from 'react';

const MainContent = ({ title,children }) => {
  return (
    <div className="flex-1 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
      {children}
      </div>
    </div>
  );
};

export default MainContent;
