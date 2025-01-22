import React, { useState } from 'react';
import './port5.css';

const Port5 = () => {
  const [learningStyles, setLearningStyles] = useState([]);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  const handleLearningStyleChange = (style) => {
    setLearningStyles((prevState) =>
      prevState.includes(style)
        ? prevState.filter((item) => item !== style)
        : [...prevState, style]
    );
  };

  return (
    <div className="port5-learning-style">

      <div className="port5-learning-options">
        {['Video', 'Text', 'Interactive', 'Audio', 'Hands-On'].map((style) => (
          <button
            key={style}
            className={`port5-style-button ${learningStyles.includes(style.toLowerCase()) ? 'port5-selected' : ''}`}
            onClick={() => handleLearningStyleChange(style.toLowerCase())}
          >
            {style}
          </button>
        ))}
      </div>
      <div className="port5-slider-container">
        <label>Availability (Hours per week): {hoursPerWeek} hrs</label>
        <input
          type="range"
          min="1"
          max="40"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
          className="port5-slider"
        />
      </div>
    </div>
  );
};

export default Port5;
