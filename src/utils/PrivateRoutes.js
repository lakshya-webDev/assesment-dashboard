import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, user, requiredRole }) {
  if (user === undefined || user === null) {
    return <div>Loading...</div>; 
  }

  console.log('PrivateRoute check:', requiredRole, user.role, "PRIVATE"); 
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return children;
}
