import { jwtDecode } from 'jwt-decode';

export function decodeToken(token) {
    try {
      return JSON.parse(token);
    } catch (error) {
      console.error('Token decode error:', error); 
      return null;
    }
  }

export function isAuthorized(userRole, requiredRole) {
  return userRole === requiredRole || userRole === 'Admin';
}
