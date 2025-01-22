import React, { useState, useEffect } from "react";
import "./FeaturedContent.css";
import { Link } from "react-router-dom";

function FeaturedContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State for hover
  const [isHovered1, setIsHovered1] = useState(false);

  // Dummy data for featured items
  const dummyFeaturedItems = [
    {
      id: 1,
      title: "Harnessing the best IT talent for you",
      poster: "https://infostride.com/wp-content/themes/infostride/assets-v5/images/harnessing-the-best-it-talent-for-you.jpg",
      type: "Action",
      genre: "Adventure",
      description: "An exciting adventure of a hero saving the world."
    },
    {
      id: 2,
      title: "Scale Smartly with Offshore Development Expertise",
      poster: "https://infostride.com/wp-content/themes/infostride/assets-v5/images/offshore-development-services-carousel.png",
      type: "Drama",
      genre: "Romance",
      description: "A heartwarming tale of love and perseverance."
    },
    {
      id: 3,
      title: "Making digital accessibilityusabilityinclusivity the norm",
      poster: "https://infostride.com/wp-content/themes/infostride/assets-v5/images/making-digital-accessibility-the-norm.jpg",
      type: "Comedy",
      genre: "Family",
      description: "A hilarious journey with unexpected twists."
    },
  ];

  const [featuredItems, setFeaturedItems] = useState(dummyFeaturedItems);

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // Set up the interval for changing featured items
  useEffect(() => {
    if (featuredItems.length === 0) return; // Don't set an interval if there are no featured items

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredItems]); // Depend on the featuredItems array to set up the interval

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="featured-content">
      {featuredItems.length > 0 ? (
        <>
          <div className="allsection2">
            <div className="section12">
              <img
                src={featuredItems[currentIndex].poster}
                alt={featuredItems[currentIndex].title}
                className="movie-img"
              />
            </div>
            <div className="section22">
              <h1 className="featured-title">
                {featuredItems[currentIndex].title}
              </h1>
{/* 
              <p className="featured-desc">
                {truncateText(featuredItems[currentIndex].description, 250)}
              </p> */}
                  <button className="featured-button1">
                    <i className="fa fa-bars"></i> VIEW DETAILS
                  </button>
             
            </div>
          </div>
          <div className="dots-container">
            {featuredItems.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </>
      ) : (
        <p>Loading featured content...</p>
      )}
    </div>
  );
}

export default FeaturedContent;
