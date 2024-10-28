import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import userData from "../../data/credentials.json"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = userData.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
     const mockToken = JSON.stringify({ username: user.username, role: user.role });
      login(mockToken);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-6">
        <h2 className="text-3xl font-semibold text-white">Login</h2>
        <p className="text-gray-200">
          Welcome back! Please login to your account.
        </p>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-40 text-white placeholder-gray-200 focus:ring-2 focus:ring-purple-300"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-40 text-white placeholder-gray-200 focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-200"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
