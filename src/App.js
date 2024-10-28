import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      login(token); 
    }
  }, [login]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
