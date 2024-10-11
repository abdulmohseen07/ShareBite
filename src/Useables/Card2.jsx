import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card">
          <div className="img-content">
            {/* Image directly in the card */}
            <img
              src="https://img.freepik.com/free-photo/monochrome-street-food-entertainment_23-2151542697.jpg?t=st=1728578821~exp=1728582421~hmac=b0048eedc4c31e1a1041fbcbdb013e13efa5d9c94d51495e31dd0c5de7e2bd8e&w=1060" // Ensure this path is correct relative to your project structure
              alt="Card Image"
              className="card-image"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeMiterlimit={2}
              strokeLinejoin="round"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                fillRule="nonzero"
                d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"
              />
            </svg>
          </div>
          <div className="content">
            <p className="heading"></p>
            <p>
            Sharing food is sharing love; let’s nourish our community together!
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
    overflow: hidden; /* Ensure no overflow from rounded corners */
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: relative; /* Position relative for absolutely positioned elements */
    overflow: hidden; /* Prevent overflowing of child elements */
  }

  .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* Make sure the svg is positioned correctly */
    transition: scale 0.6s, rotate 0.6s, filter 1s;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the whole card */
    filter: blur(0); /* No blur for the image */
    transition: filter 0.6s; /* Smooth transition for filter effects */
  }

  .card .img-content svg {
    width: 50px;
    height: 50px;
    fill: #e8e8e8;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    position: absolute; /* Positioning the SVG on top of the image */
    z-index: 1; /* Bring it above the image */
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .img-content .card-image {
    filter: blur(5px); /* Optional blur effect on hover */
  }

  .card:hover .img-content svg {
    fill: transparent;
  }
`;

export default Card;
