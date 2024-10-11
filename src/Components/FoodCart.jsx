import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Delivery from "./Delievery";
import Buttona from "../Useables/Buttona";

const FoodCart = () => {
  const [vegQuantity, setVegQuantity] = useState(1);
  const [nonVegQuantity, setNonVegQuantity] = useState(1);
  const [isVegFresh, setIsVegFresh] = useState(false);
  const [isNonVegFresh, setIsNonVegFresh] = useState(false);
  const [address, setAddress] = useState("SLRTCE, Lab 311 ");
  const [pointsFromItems, setPointsFromItems] = useState(20);
  const [totalPoints, setTotalPoints] = useState(30);
  
  

  const handleVegQuantityChange = (operation) => {
    if (operation === "increment") {
      setVegQuantity(vegQuantity + 1);
    } else if (operation === "decrement" && vegQuantity > 0) {
      setVegQuantity(vegQuantity - 1);
    }
    updatePoints();
  };

  const handleNonVegQuantityChange = (operation) => {
    if (operation === "increment") {
      setNonVegQuantity(nonVegQuantity + 1);
    } else if (operation === "decrement" && nonVegQuantity > 0) {
      setNonVegQuantity(nonVegQuantity - 1);
    }
    updatePoints();
  };

  const handleVegFreshChange = () => {
    setIsVegFresh(!isVegFresh);
  };

  const handleNonVegFreshChange = () => {
    setIsNonVegFresh(!isNonVegFresh);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const updatePoints = () => {
    const newPointsFromItems = (vegQuantity + nonVegQuantity) * 10;
    setPointsFromItems(newPointsFromItems);
    setTotalPoints(newPointsFromItems + 10);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center bg-gray-50 py-2 shadow-black-900">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-6">Your Food Cart</h1>
          <div className="bg-pink-100 rounded-lg p-4 mb-6 shadow-md">
            <p className="text-gray-500">Pick up from</p>
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              className="w-full bg-transparent border-none outline-none text-black mt-2"
            />
          </div>
          <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Items</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img
                    alt="Vegetarian dish"
                    src="https://storage.googleapis.com/a1aa/image/CE2C3CLbWArCGZeUEdtcsX9Dpnm2eyrYjxTbXAp9ycbM1HlTA.jpg"
                    width={50}
                    height={50}
                    className="rounded-lg mr-4"
                  />
                  <p className="font-bold">Veg</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg"
                    onClick={() => handleVegQuantityChange("decrement")}
                  >
                    -
                  </button>
                  <p className="mx-2">{vegQuantity}</p>
                  <button
                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg"
                    onClick={() => handleVegQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center ml-4">
                  <p className="text-gray-500 mr-2">Fresh</p>
                  <input
                    type="checkbox"
                    checked={isVegFresh}
                    onChange={handleVegFreshChange}
                    className="h-4 w-4"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img
                    alt="Non-vegetarian dish"
                    src="https://storage.googleapis.com/a1aa/image/SXTeTYdEaXy4EKPBYLfwrpDSiRk0ZSnb4fAhqregfzVtpeR5E.jpg"
                    width={50}
                    height={50}
                    className="rounded-lg mr-4"
                  />
                  <p className="font-bold">Non-Veg</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg"
                    onClick={() => handleNonVegQuantityChange("decrement")}
                  >
                    -
                  </button>
                  <p className="mx-2">{nonVegQuantity}</p>
                  <button
                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-lg"
                    onClick={() => handleNonVegQuantityChange("increment")}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center ml-4">
                  <p className="text-gray-500 mr-2">Fresh</p>
                  <input
                    type="checkbox"
                    checked={isNonVegFresh}
                    onChange={handleNonVegFreshChange}
                    className="h-4 w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-100 rounded-lg p-4 mb-6 shadow-sm">
          <span className="font-bold text-black pr-40 ">Delivery Charges</span>
          <span className="font-bold text-black p-0 mr-0 ">₹15</span>

          </div>

          <div className="bg-blue-100 rounded-lg p-4 mb-6 shadow-sm">
            <p>Each item gives 10 points</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Points from items</p>
              <p className="text-blue-500">{pointsFromItems}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Other points</p>
              <p className="text-blue-500">10</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total points</p>
              <p>{totalPoints}</p>
            </div>
          </div>

          <Buttona />


          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodCart;
