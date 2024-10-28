import React from 'react';
import DashboardLayout from '../../layout/DashboardLayout';
import AdminView from '../../components/Views/AdminView';
import ManagerView from '../../components/Views/ManagerView';
import UserView from '../../components/Views/UserView';

const Dashboard = ({ user }) => {
  const { role } = user;

  // Define the title based on the role
  const title = role === 'Admin' ? 'Admin Dashboard' :
                role === 'Manager' ? 'Manager Dashboard' :
                'User Dashboard';

  return (
    <DashboardLayout title={title} user={user}>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        {role === 'Admin' && <AdminView />}
        {role === 'Manager' && <ManagerView />}
        {role === 'User' && <UserView />}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;