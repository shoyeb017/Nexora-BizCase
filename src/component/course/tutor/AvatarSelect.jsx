import React from "react";
import "./AvatarSelect.css";

import bot1 from "./bot1.png";
import bot2 from "./bot2.png";

const AvatarSelect = ({ selectedAvatar, setSelectedAvatar }) => {
  const avatars = [
    {
      id: 1,
      name: "AI Tutor Alex",
      description: "A friendly and knowledgeable AI with a focus on STEM topics.",
      image: bot1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "AI Tutor Mia",
      description: "A creative AI tutor specializing in arts and humanities.",
      image: bot2, // Replace with actual image URL
    },
  ];

  return (
    <div className="avatar-select">
      <h3>Select Your AI Tutor</h3>
      <div className="avatars-container">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`avatar-card ${
              selectedAvatar?.id === avatar.id ? "selected" : ""
            }`}
            onClick={() => setSelectedAvatar(avatar)}
          >
            <img src={avatar.image} alt={avatar.name} className="avatar-image" />
            <h4>{avatar.name}</h4>
            <p>{avatar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelect;
