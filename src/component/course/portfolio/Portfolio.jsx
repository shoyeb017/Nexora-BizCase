import React, { useState } from "react";
import "./Portfolio.css";
import Port1 from "./port1.jsx";
import Port2 from "./port2.jsx";
import Port3 from "./port3.jsx";
import Port4 from "./port4.jsx";
import Port5 from "./port5.jsx";
import Port6 from "./port6.jsx";
import Port7 from "./port7.jsx";

import { TiTick } from "react-icons/ti";
import {
  FaUser,
  FaBrain,
  FaSuitcase,
  FaClipboardList,
  FaBook,
  FaChartBar,
  FaComment,
} from "react-icons/fa";

const Portfolio = () => {
  const steps = [
    {
      label: "Idea Submission",
      description: "Tell Us About Your Idea!",
      icon: <FaUser />,
    },
    {
      label: "Skill Assessment",
      description: "Evaluate your skills",
      icon: <FaBrain />,
    },
    {
      label: "Skill Gap Analysis",
      description: "Analyze your skill gaps",
      icon: <FaChartBar />,
    },
    {
      label: "Learning Style",
      description: "Understand your learning style",
      icon: <FaBook />,
    },
    {
      label: "Suggested courses",
      description: "Start Your Learning Journey based on your personalized course recommendations",
      icon: <FaClipboardList />,

    },
    // {
    //   label: "Career Preferences",
    //   description: "Define your career preferences",
    //   icon: <FaSuitcase />,
    // },
    // {
    //   label: "Experience Collection",
    //   description: "Collect work experience",
    //   icon: <FaComment />,
    // },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="step-title">Idea Submission</h3>
            <Port1 />
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="step-title">Skill Assessment</h3>
            <Port2 />
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="step-title">Skill Gap Analysis</h3>
           
            <Port6 />
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="step-title">Learning Style</h3>
            
            <Port5 />
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="step-title">Suggested courses</h3>
            <Port7 />
          </div>
        );
      case 6:
        return (
          <div>
             <h3 className="step-title">Experience Collection</h3>
            <Port6 />
          </div>
        );
      case 7:
        return (
          <div>
            <h3 className="step-title">Your opportuniteis</h3>
            <Port7 />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="steps-ui-container">
      <div className="steps-sidebar">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${
              currentStep === index + 1 ? "active" : ""
            } ${index + 1 < currentStep ? "completed" : ""}`}
          >
            <div className="step-text">
              <p className="step-label">{step.label}</p>
              <p className="step-description">{step.description}</p>
            </div>
            <div
              className={`step-icon ${
                currentStep === index + 1 ? "active" : ""
              }`}
            >
              {step.icon}
            </div>
            <div
              className={`step-icon2 ${
                currentStep === index + 1 ? "active" : ""
              }`}
            >
              ⦁
            </div>
          </div>
        ))}
        <div className="vertical-line"></div>
      </div>
      <div className="step-content">
        <div className="step-content2">
          <div className="step-content2-upper">
            <div className="step-number">
              Step {currentStep}/{steps.length}
            </div>
            <div className="step-controls">
              <button onClick={handlePrev} disabled={currentStep === 1}>
                Back
              </button>
              <button onClick={handleNext}>
                {currentStep === steps.length ? "Finish" : "Next"}
              </button>
            </div>
          </div>
          {renderStepContent(currentStep)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
