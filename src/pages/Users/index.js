import React, { useState } from 'react';
import { ROLES } from '../../utils/constants';
import DashboardLayout from '../../layout/DashboardLayout';

const Users = ({ user }) => {
    const { role } = user;
  // Initial user data with roles
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'User' },
    { id: 2, name: 'Bob', role: 'Manager' },
    { id: 3, name: 'Charlie', role: 'Admin' },
  ]);


  // Function to handle role change
  const handleRoleChange = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <DashboardLayout user={user} title="User Management">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">S.No.</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="p-2 border rounded-md bg-gray-50"
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default Users;
