import React from "react";
import "./DropCard1.css";

const DropCard1 = () => {
  return (
    <div className="dropcard1-container">
      <div className="dropcard1-overview">
        <h1>Overview</h1>
        <p>
          Diverse and inclusive, we offer a full range of tech support for a
          wide range of industries
        </p>
        <button className="dropcard1-button">
          Explore More <span className="dropcard1-arrow">➔</span>
        </button>
      </div>
      <div className="dropcard1-industries">
        <ul>
          <li>Real estate & Property</li>
          <li>Food & Beverages</li>
          <li>Social Networking</li>
          <li>Banking Finance & Insurance</li>
          <li>Education & E-learning</li>
        </ul>
        <ul>
          <li>E-Commerce</li>
          <li>Retail</li>
          <li>Travel & Hospitality</li>
          <li>Media & Entertainment</li>
          <li>Healthcare</li>
        </ul>
        <ul>
          <li>Automotive</li>
          <li>Gaming</li>
          <li>Fitness</li>
          <li>Logistics</li>
          <li>Aviation</li>
        </ul>
        <ul>
          <li>Transport</li>
          <li>On-demand solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default DropCard1;
