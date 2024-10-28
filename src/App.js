import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Dashboard from './pages/Dashboard';

const Login = React.lazy(() => import('./pages/Login'));

function App() {
  const { user, login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      login(token); 
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-xl font-semibold">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
