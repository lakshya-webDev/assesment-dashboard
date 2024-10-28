import React, { useState } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = ({ title, children, user }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <Navbar user={user} onToggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed}/>
        <MainContent title={title}>
          {children}
        </MainContent>
      </div>
    </div>
  );
};

export default DashboardLayout;
