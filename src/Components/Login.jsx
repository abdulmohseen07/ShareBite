import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Login = () => {
  // State for managing form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as API calls
    console.log("Email:", email, "Password:", password);
  };

  // Function to navigate to the Register page
  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <>
      {/* Header */}
      <Navbar />

      {/* Login Form */}
      <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-vector/charity-doodle-vector-background-donation-concept_53876-143434.jpg?t=st=1728577108~exp=1728580708~hmac=0cbfd7ff7cad3a9dca2f31bd71ce4ba7538b48fe95530d2dec1d560f82085b7b&w=1800" // Replace with your background image path
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg shadow-md transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-center text-green-600">Login to ShareBite</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Link to the Register Page */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">New to ShareBite?</p>
            <button
              onClick={navigateToRegister}
              className="text-green-600 hover:underline mt-2"
            >
              Register here
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Login;
