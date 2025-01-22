import React, { useState } from "react";
import AvatarSelect from "./AvatarSelect";
import LanguageSelect from "./LanguageSelect";
import "./Tutor.css";

const Tutor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAvatar, setSelectedAvatar] = useState(null); // Avatar object includes name and image.
  const [languagePreferences, setLanguagePreferences] = useState({
    language: "",
    accent: "",
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <AvatarSelect
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
        );
      case 2:
        return (
          <LanguageSelect
            languagePreferences={languagePreferences}
            setLanguagePreferences={setLanguagePreferences}
          />
        );
      case 3:
        return (
          <div className="summary">
  
            <h3>Your AI Tutor Configuration</h3>
              {selectedAvatar?.image && (
                <img
                  src={selectedAvatar.image}
                  alt={selectedAvatar.name}
                  className="avatar-preview"
                />
              )}
              <p>
                <strong>Avatar:</strong> {selectedAvatar?.name || "AI Tutor Alex"}
              </p>
              <p>
              <strong>Language:</strong> {languagePreferences.language || "English"}
            </p>
            <p>
              <strong>Accent:</strong> {languagePreferences.accent || "American"}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tutor-container">
      <div className="tutor-content">
        <div className="step-controls">
          <button onClick={handlePrev} disabled={currentStep === 1}>
            Back
          </button>
          <button onClick={handleNext}>
            {currentStep === 3 ? "Finish" : "Next"}
          </button>
        </div>
        {renderStepContent(currentStep)}
      </div>
    </div>
  );
};

export default Tutor;
