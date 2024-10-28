import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Navbar = ({  onToggleSidebar, isSidebarCollapsed }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const {logout,user}=useAuth()
  const navigate = useNavigate();
    const handleLogout =()=>{
        logout();
        navigate('/')
    }
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <button onClick={onToggleSidebar} className="text-gray-500">
        {isSidebarCollapsed ? (
          <XMarkIcon  className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <h1 className="text-xl font-bold text-gray-700">Welcome, {user?.role}</h1>

      <div className="relative">
        <UserIcon
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer w-8 h-8 text-gray-200 bg-gray-800 rounded-full p-1"
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <button
              className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
