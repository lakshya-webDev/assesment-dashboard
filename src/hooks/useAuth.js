import { useState, useEffect } from 'react';
import { decodeToken } from '../utils/auth';

export function useAuth() {
  const [user, setUser] = useState(null);

  const login = (token) => {
    const decoded = decodeToken(token);
    console.log('Logging in with token:', token);
    if (decoded) {
      setUser(decoded);
      localStorage.setItem('token', token);
      console.log('User set:', decoded);
    } else {
      console.log('Decoded token was null or undefined');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token, "TOKEN ");
    if (token) {
      const decoded = decodeToken(token);
      console.log('Decoded Token:', decoded);
      if (decoded) {
        setUser(decoded);
      } else {
        console.log('Failed to decode token from localStorage');
      }
    } else {
      console.log('No token found in localStorage');
    }
  }, []);

  return { user, login, logout };
}
