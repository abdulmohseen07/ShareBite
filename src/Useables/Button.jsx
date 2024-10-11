import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FoodCart from "../Components/FoodCart";


const Button = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleDonateClick = () => {
    navigate('/foodcart');
  };

  return (
    <StyledWrapper>
      <button className="button type1" onClick={handleDonateClick}></button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 50px;
    width: 150px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  .button:hover {
    box-shadow: .5px .5px 150px rgba(0, 128, 128, 0.6);
  }

  .type1::after {
    content: "❤️";
    height: 50px;
    width: 150px;
    background-color: rgb(22 163 74 );
    color: #fff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(50px);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1::before {
    content: "DONATE";
    height: 50px;
    width: 150px;
    background-color: #fff;
    color: #008080;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0px) scale(1.2);
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }

  .type1:hover::after {
    transform: translateY(0) scale(1.2);
  }

  .type1:hover::before {
    transform: translateY(-50px) scale(0) rotate(120deg);
  }
`;

export default Button;
