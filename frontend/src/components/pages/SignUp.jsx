import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [formData, setFormData] = useState({ Name: '', Email: '', Password: '', confirmPassword: '', Phone: '' });
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,  // Corrected to 'name' to match input name attributes
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (formData.Password !== formData.confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/Signup', formData);
  //     console.log('Signup success:', response.data);
  //     setSuccess('Account created successfully!');
  //     setError('');
  //   } catch (error) {
  //     console.error('Signup error:', error.response.data.message);
  //     setError(error.response.data.message || 'Signup failed');
  //   }
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      setSuccess(response.data.message);
      setError("");
      setFormData({ name: "", email: "", password: "", phone: "" }); // Reset form

      // Redirect to login page after successful signup
      navigate("/Login");
    } catch (err) {
      setError(err.response?.data.message || "Signup failed");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex">
      {/* Signup Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="App w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-300 text-center">
            Sign Up
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email address
              </label>
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
              <label className="block text-sm font-medium text-gray-300">
                Phone No.
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
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
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/Login" className="text-orange-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Left Section for Branding or Additional Info */}
      <div className="w-1/2 bg-gray-700 text-white flex items-center justify-center">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-orange-400">
            Welcome to Vishwakarma Vansaj Internation Federation
          </h1>
          <p className="text-lg">
            Join us and explore endless possibilities. Create an account to get
            started, and take advantage of all the features.
          </p>
        </div>
      </div>
    </div>
  );
};

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/signup",
//         formData
//       );
//       setSuccess(response.data.message);
//       setError("");
//     } catch (error) {
//       setError(error.response.data.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       {error && <p>{error}</p>}
//       {success && <p>{success}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm Password"
//         />
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

export default Signup;
