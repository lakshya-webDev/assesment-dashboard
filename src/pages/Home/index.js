import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard App</h1>
    <Link to="/login" className="text-blue-500 underline">
      Go to Login
    </Link>
  </div>
);

export default Home;