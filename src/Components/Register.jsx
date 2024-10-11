import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Register = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submit-form", formData);
      console.log(response.data); // Success message from server
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-vector/charity-doodle-vector-background-donation-concept_53876-143434.jpg?t=st=1728577108~exp=1728580708~hmac=0cbfd7ff7cad3a9dca2f31bd71ce4ba7538b48fe95530d2dec1d560f82085b7b&w=1800" // Replace with your background image path
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              Register
            </button>
          </form>

          {/* Already have an account */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => (window.location.href = '/login')}
              className="text-green-600 hover:underline"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
