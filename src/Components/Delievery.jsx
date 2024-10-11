import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Delivery = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Reaching Your Destination...");

  // Simulate delivery status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 20;
        if (newProgress >= 100) {
          clearInterval(interval);
          setMessage("Your order is arriving shortly!");
        } else {
          setMessage(getStatusMessage(newProgress));
        }
        return newProgress;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Function to get status message based on progress
  const getStatusMessage = (progress) => {
    if (progress <= 20) return "Preparing your order...";
    if (progress <= 40) return "Order is being packed...";
    if (progress <= 60) return "Order is out for delivery...";
    if (progress <= 80) return "Your delivery partner is nearby...";
    return "Your order is arriving shortly!";
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow flex justify-center items-center bg-gradient-to-b from-green-50 to-white py-10">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">PickUp Status</h1>
          <div className="mb-6">
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-4 text-gray-700">{message}</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" // Sample delivery image
            alt="Delivery Truck"
            className="w-24 h-24 mx-auto mb-6 animate-bounce"
          />
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold mb-2">Hang tight!</h2>
            <p className="text-gray-600">
              Your order is on its way. You can track its progress here.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
