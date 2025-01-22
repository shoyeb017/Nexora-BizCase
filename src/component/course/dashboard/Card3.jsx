import React from "react";
import "./Card3.css";
import java from "./java.jpg";

const Card3 = () => {
  return (
    <div className="card3-container">
      <div>
        <img src={java} alt="java" className="card3-image-placeholder" />
      </div>
      <div className="card3-content">
        <h3 className="card3-title">Java Fundamentals</h3>
        <p className="card3-details">
          <span className="card3-dot"></span> Illustrations • 12 hours • Beginner
        </p>
        <p className="card3-author">AI Toutor</p>
      </div>
    </div>
  );
};

export default Card3;
