// src/components/Dashboard.js
import React from 'react';
import AdminView from './Views/AdminView';
import ManagerView from './Views/ManagerView';
import UserView from './Views/UserView';

const Dashboard = ({ user }) => {
  const { role } = user;

  console.log(role,"ROLE")

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        {role === 'Admin' && <AdminView />}
        {role === 'Manager' && <ManagerView />}
        {role === 'User' && <UserView />}
      </div>
    </div>
  );
};

export default Dashboard;
