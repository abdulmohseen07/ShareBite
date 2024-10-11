import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa"; // Correct import

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Function to toggle the visibility of the scroll button based on the scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top and navigate to the home page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Adding a delay before navigating to ensure smooth scroll happens first
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  // Set up event listener on scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#38a169",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
          aria-label="Scroll to top and go to home"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Scroll;
