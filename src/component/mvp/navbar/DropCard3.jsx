import React from "react";
import "./DropCard3.css";

const DropCard3 = () => {
  return (
    <div className="dropcard3-container">
      <div className="dropcard3-overview">
        <h1>Overview</h1>
        <p>
          Let's indulge you in a world of knowledge, innovation, and expertise,
          read our latest pearls of Tech-wisdom.
        </p>
        <button className="dropcard3-button">
          Explore More <span className="dropcard3-arrow">➔</span>
        </button>
      </div>
      <div className="dropcard3-links">
        <ul>
          <li>Blogs</li>
          <li>Whitepaper</li>
        </ul>
        <ul>
          <li>Case Studies</li>
          <li>On-Demand Webinars</li>
        </ul>
      </div>
    </div>
  );
};

export default DropCard3;
