import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import PrivateRoute from './utils/PrivateRoutes';

const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Users = React.lazy(() => import('./pages/Users'));

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-xl font-semibold">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute user={user}>
                <Dashboard user={user} />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute user={user} requiredRole="Admin">
                <Users user={user} /> 
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
