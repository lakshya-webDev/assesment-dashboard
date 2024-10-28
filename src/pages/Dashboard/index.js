import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import AdminView from '../../components/Views/AdminView';
import ManagerView from '../../components/Views/ManagerView';
import UserView from '../../components/Views/UserView';
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const title = user && user.role === 'Admin' ? 'Admin Dashboard' :
  user && user.role === 'Manager' ? 'Manager Dashboard' :
  'User Dashboard';
  return (
    <DashboardLayout title={title}>
      <div className="w-full max-w-4xl ">
        {user && user.role === 'Admin' && <AdminView />}
        {user && user.role === 'Manager' && <ManagerView />}
        {user && user.role === 'User' && <UserView />}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;