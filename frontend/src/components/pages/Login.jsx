import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            setSuccess(response.data.message);
            setError('');

            // Redirect to home page after successful login
            navigate("/Dashboard");
        } catch (error) {
            setError(error.response.data.message || 'Login failed');
            setSuccess('');
        }
    };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex">
      {/* Left Side Section */}
      <div className="w-1/2 bg-gray-800 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold text-center text-orange-500">Vishwakarma Vansaj International Federation</h1>
        <p className="mt-6 text-lg">
          Join Hands Together
        </p>
        <ul className="mt-4 text-sm list-disc list-inside space-y-2">
          <li>Take membership.</li>
          <li>Contribute to the NGO.</li>
          <li>Get Certificate and ID cards of your membership.</li>
          <li>Access your dashboard and many more.</li>
        </ul>
        <p className="mt-16 text-gray-400">© 2024, All rights reserved</p>
      </div>

      {/* Right Side Section - Login Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-300 text-center">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600">Forgot Password?</a>
            </div>

            <div className="flex items-center justify-center mt-4">
              <span className="h-px bg-gray-700 w-full"></span>
              <span className="px-2 text-sm text-gray-400">OR</span>
              <span className="h-px bg-gray-700 w-full"></span>
            </div>

            <p className="mt-4 text-sm text-center text-gray-400">
              Don’t have an account?{' '}
              <a href="/SignUp" className="text-orange-500 hover:text-orange-600">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;