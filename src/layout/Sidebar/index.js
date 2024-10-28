import React from 'react';
import { Link } from 'react-router-dom';
import { Squares2X2Icon , UserIcon, CogIcon, ChartBarIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } transition-all duration-300 bg-gradient-to-br from-[#1434A4] via-[#5D3FD3] to-[#6082B6] text-white h-screen p-4`}
    >
     <div className="flex items-center mb-6">
        <ChartBarSquareIcon className="h-6 w-6 mr-2" />
        {!isCollapsed && <h2 className="text-2xl font-bold">Dashboard UI</h2>}
      </div>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Squares2X2Icon className="h-5 w-5 mr-2" />
            {!isCollapsed && <Link to="#dashboard" className="hover:text-gray-300">Dashboard</Link>}
          </li>
          <li className="flex items-center">
            <UserIcon className="h-5 w-5 mr-2" />
            {!isCollapsed && <Link to="#profile" className="hover:text-gray-300">Profile</Link>}
          </li>
          <li className="flex items-center mt-auto">
            <CogIcon className="h-5 w-5 mr-2" />
            {!isCollapsed && <Link to="#settings" className="hover:text-gray-300">Settings</Link>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
