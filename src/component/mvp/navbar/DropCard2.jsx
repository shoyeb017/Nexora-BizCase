import React from "react";
import "./DropCard2.css";

const DropCard2 = () => {
  return (
    <div className="dropcard2-container">
      <div className="dropcard2-overview">
        <h1>Overview</h1>
        <p>
          We are ready for your different technology requirements, have a look
          at our core competencies
        </p>
        <button className="dropcard2-button">
          Explore More <span className="dropcard2-arrow">➔</span>
        </button>
      </div>
      <div className="dropcard2-services">
        <ul>
          <li>Digital Transformation</li>
          <li>Cybersecurity</li>
          <li>Data Analytics</li>
          <li>Web Development Services</li>
          <li>Offshore Development Center</li>
        </ul>
        <ul>
          <li>QA & Performance testing</li>
          <li>Cloud Computing</li>
          <li>Accessibility Services</li>
          <li>Software Development Services</li>
        </ul>
        <ul>
          <li>Application Dev. & Maintenance</li>
          <li>Staff Augmentation</li>
          <li>Marketing as a Service</li>
          <li>AI Development Services</li>
        </ul>
      </div>
    </div>
  );
};

export default DropCard2;
