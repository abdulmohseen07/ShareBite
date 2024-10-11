import React, { useState } from 'react';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from './Login';


const Navbar = () => {
  // State for the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-green-600">
              ShareBite
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-green-600 transition duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-green-600 transition duration-300">
              What is ShareBite?
            </a>
            <a href="#impact" className="text-gray-800 hover:text-green-600 transition duration-300">
              How It Helps
            </a>
            <a href="#contact" className="text-gray-800 hover:text-green-600 transition duration-300">
              Contact Us
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <button  onClick={()=>navigate("/login")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              Login
            </button>
            <button onClick={()=>navigate("/Register")} className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-300">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-600 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <a href="/" className="block text-gray-800 hover:text-green-600 transition duration-300">
            Home
          </a>
          <a href="#about" className="block text-gray-800 hover:text-green-600 transition duration-300">
            What is ShareBite?
          </a>
          <a href="#impact" className="block text-gray-800 hover:text-green-600 transition duration-300">
            How It Helps
          </a>
          <a href="#contact" className="block text-gray-800 hover:text-green-600 transition duration-300">
            Contact Us
          </a>
          <div className="mt-4 space-y-2">
          <button onClick={()=>navigate("/login")}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300" >
            Login
          </button>
            <button onClick={()=>navigate("/Register")}className="w-full px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
