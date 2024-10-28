import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="flex-1 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md h-full">
      {children}
      </div>
    </div>
  );
};

export default MainContent;
