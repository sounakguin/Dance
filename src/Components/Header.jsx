import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define responsive breakpoints for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Header() {
  const [showArrows, setShowArrows] = useState(true);
  const [showDots, setShowDots] = useState(true);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setShowArrows(false);
      setShowDots(flase);
    } else {
      setShowArrows(true);
      setShowDots(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      arrows={showArrows}
      showDots={showDots}
    >
      <div className="handle5">
        <div>
          <img src="/Slider1.png" alt="Trial Class Girl" />
        </div>
        <div className="Header_text">
          <p className="herotext">DANCE STUDIO</p>
          <p className="herotext1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          </p>
          <button className="join_now_button">Join Now</button>
        </div>
      </div>
      <div className="handle5">
        <div>
          <img src="/Slider1.png" alt="Trial Class Girl" />
        </div>
        <div className="Header_text">
          <p className="herotext">DANCE STUDIO</p>
          <p className="herotext1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          </p>
          <button className="join_now_button">Join Now</button>
        </div>
      </div>
    </Carousel>
  );
}

// CSS Styles
const style = `
  .handle5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    padding: 0 20px;
  }

  .handle5 img {
    flex: 1;
    width: 100%;
    height: auto;
  }

  .Header_text {
    flex: 1;
    padding: 20px;
    text-align: left;
    color: #716c53;
    z-index: 1;
    position: relative;
  }

  .herotext {
    font-size: 5rem;
    font-weight: bold;
  }

  .herotext1 {
    font-size: 1.2rem;
  }

  .join_now_button {
    width: 200px;
    height: 40px;
    padding: 10px;
    text-align: center;
    background-color: #716c53;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .join_now_button:hover {
    background-color: #595447;
  }

  @media (max-width: 768px) {
    .handle5 {
      flex-direction: column;
      text-align: center;
    }

    .Header_text {
      width: auto;
      padding: 10px;
    }

    .herotext {
      font-size: 1.5rem;
    }

    .herotext1 {
      font-size: 1rem;
    }

    .join_now_button {
      width: 150px;
    }

    .react-multi-carousel-dot-list {
      display: block !important;
    }

    .react-multi-carousel-dot {
      margin: 0 2px;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 50%;
    }
  }

  @media (max-width: 480px) {
    .herotext {
      font-size: 1.2rem;
    }

    .herotext1 {
      font-size: 0.9rem;
    }

    .join_now_button {
      width: 120px;
    }
  }

  /* Hide arrows on mobile and tablet */
  @media (max-width: 1024px) {
    .react-multi-carousel-arrow {
      display: none !important;
    }
  }

  /* Styles for larger screens */
  @media (min-width: 1025px) {
    .handle5 {
      justify-content: center;
      align-items: center;
      gap: 450px;
    
    }

    .handle5 img {
      flex: 1;
      margin-left: 20px;
    }

    .Header_text {
      flex: 1;
      margin-left: 20px;
      text-align: left; 
      max-width: 500px; 
      padding: 20px; 
      background-color: rgba(255, 255, 255, 0.8); 
      border-radius: 8px; 
      
    }

    .herotext {
      font-size: 5rem;
      font-weight: bold;
        margin: 0 auto;
    }

    .herotext1 {
      font-size: 1.2rem;
    }

    .join_now_button {
      width: 200px;
    }
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);
