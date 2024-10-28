import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const Navbar = ({ user, onToggleSidebar, isSidebarCollapsed }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <button onClick={onToggleSidebar} className="text-gray-500">
        {isSidebarCollapsed ? (
          <Bars3Icon className="h-6 w-6" />
        ) : (
          <XMarkIcon className="h-6 w-6" />
        )}
      </button>

      <h1 className="text-xl font-bold text-gray-700">Welcome, {user.role}</h1>

      <div className="relative flex items-center">
        <UserIcon
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer w-8 h-8 text-gray-200 bg-gray-800 rounded-full p-1"
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <a
              href="#logout"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
