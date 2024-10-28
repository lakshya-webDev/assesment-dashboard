import { useState, useEffect } from 'react';
import { decodeToken } from '../utils/auth';

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (token) => {
    const decoded = decodeToken(token);
    setUser(decoded);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = decodeToken(token);
      // Check if decoded value is not null before setting user
      if (decoded) {
        setUser(decoded);
      }
    }
  }, []); // This only runs once when the component mounts

  return { user, login, logout };
}
