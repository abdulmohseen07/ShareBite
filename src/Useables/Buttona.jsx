import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleDonateClick = () => {
    navigate('/delievery');
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={handleDonateClick}>
        Proceed to Donate
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 50px; /* Adjusted height */
    width: 100%; /* Full width */
    border: none;
    border-radius: 9999px; /* Fully rounded */
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #6b46c1; /* Initial purple background */
    color: white; /* Text color */
    font-weight: bold; /* Bold text */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow effect */
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
  }

  .button:hover {
    background-color: #805ad5; /* Darker purple on hover */
    transform: translateY(-2px); /* Slight lift on hover */
  }

  .button:active {
    transform: translateY(1px); /* Push down effect when clicked */
  }
`;

export default Button;
