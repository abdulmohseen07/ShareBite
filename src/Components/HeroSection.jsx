import React from 'react';
import Button from '../Useables/Button';
import Scroll from '../Useables/Scroll'; // Import the Scroll component
import { FaArrowUp } from "react-icons/fa";
import FoodCart from './FoodCart';
import styled from 'styled-components';
import Card from '../Useables/Card';
import Card2 from '../Useables/Card2';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full text-center">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={
            window.innerWidth >= 768
              ? "https://videos.pexels.com/video-files/6893983/6893983-uhd_2560_1440_25fps.mp4" // Desktop video
              : "https://videos.pexels.com/video-files/6894530/6894530-uhd_1440_2560_25fps.mp4"  // Mobile video (6:19 aspect ratio)
          }
        />

        {/* Overlay for the content */}
        <div className="relative bg-black bg-opacity-50 p-4 rounded-md ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Make a Difference: Donate Excess Food to Reduce Hunger in Mumbai
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6 animate-slideUp">
            Connect with the community and help reduce food waste with ShareBite.
          </p>
          <Button />
        </div>
      </div>

    {/* "What is ShareBite?" Section */}
<div
  className="w-full py-16 px-4 md:px-8 opacity-90"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-photo/white-paper-texture_1194-2301.jpg?t=st=1728578115~exp=1728581715~hmac=43741d04613265d52473a352cdd092179cf779ae7488bc41e0827c57c619b019&w=1800')",
    backgroundAttachment: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div id="about">
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
      {/* Text Section */}
      <div className="pl-0 md:pl-12 flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-lg shadow-black transform transition duration-500 ease-in-out hover:shadow-2xl hover:translate-y-1">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center md:text-left">
          What is ShareBite?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center md:text-justify max-w-3xl mx-auto">
          ShareBite is an online application to reduce food wastage and make donating food easier by tying up with food delivery apps such as Swiggy, Zomato, and society management apps such as MyGate. The features that it has allows individuals to donate leftovers easily and efficiently so that the food reaches where it is mostly required. It will also provide an easy interface for a person to get registered and manage his donations along with tracking status of delivery in real time.
        </p>
      </div>
      {/* Card Section */}
      <div className="flex-1 flex justify-center">
        <Card />
      </div>
    </div>
  </div>

  {/* "How It Helps?" Section */}
  <div id="impact">
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 py-10">
      {/* Card Section */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <Card2 />
      </div>
      {/* Text Section */}
      <div className="pl-0 md:pl-12 flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-lg shadow-black transform transition duration-500 ease-in-out hover:shadow-2xl hover:translate-y-1">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center md:text-left">
          How It Helps?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center md:text-justify max-w-3xl mx-auto">
          ShareBite tackles food wastage and hunger by enabling a seamless food donation process. Our platform connects individuals and businesses with excess food to local distribution points and charities, ensuring that surplus food reaches those in need. By leveraging technology and existing delivery networks, ShareBite fosters community engagement and social responsibility, transforming food waste into a valuable resource for the underprivileged. Participating in ShareBite empowers users to make a meaningful difference in reducing food insecurity in Mumbai, creating a more compassionate and sustainable future for all.
        </p>
      </div>
    </div>
  </div>
</div>



      {/* Scroll Up Button */}
      <Scroll />

      {/* Additional Sections or Footer can be added here */}
    </div>
  );
};

export default HeroSection;
