import React, { useState } from 'react';
import './port4.css';

const Port4 = () => {
  const [experiences, setExperiences] = useState([
    { title: 'Internship at TechCorp', description: 'Worked on frontend development using ReactJS.', link: 'https://github.com/dummy' },
  ]);
  const [newExperience, setNewExperience] = useState({ title: '', description: '', link: '' });

  const handleAddExperience = () => {
    setExperiences([...experiences, newExperience]);
    setNewExperience({ title: '', description: '', link: '' });
  };

  return (
    <div className="experience-collection">
      <div className="experience-form">
        <input
          type="text"
          placeholder="Title"
          value={newExperience.title}
          onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newExperience.description}
          onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
        />
        <input
          type="url"
          placeholder="Link (e.g., GitHub, LinkedIn)"
          value={newExperience.link}
          onChange={(e) => setNewExperience({ ...newExperience, link: e.target.value })}
        />
        <button onClick={handleAddExperience}>Add Experience</button>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            {exp.link && (
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Port4;
