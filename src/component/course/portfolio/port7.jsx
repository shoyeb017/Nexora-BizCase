import React from "react";
import { FaGraduationCap, FaArrowRight, FaDownload } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./port7.css";

const recommendations = [
  {
    path: "Frontend",
    milestone: "Master ReactJS and UI/UX design",
    progress: 70,
  },
  {
    path: "Backend",
    milestone: "Focus on NodeJS and databases",
    progress: 60,
  },
//   {
//     path: "Full Stack Developer",
//     milestone: "Combine frontend and backend expertise",
//     progress: 80,
//   },
  {
    path: "DevOps",
    milestone: "Learn about CI/CD and cloud technologies",
    progress: 50,
  },
//   {
//     path: "Data Scientist",
//     milestone: "Master machine learning and data analysis",
//     progress: 40,
//   },
];

const jobSuggestions = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    salary: "$70k - $100k",
    skills: "JavaScript, React, Node.js",
  },
//   {
//     title: "Data Analyst",
//     company: "DataPro",
//     salary: "$50k - $80k",
//     skills: "Python, SQL, Tableau",
//   },
  {
    title: "Cloud Engineer",
    company: "Cloudify",
    salary: "$80k - $120k",
    skills: "AWS, Kubernetes, Docker",
  },
];

const Port7 = () => {
  return (
    <div className="port7-container">
      {/* <h2 className="port7-title">Your Opportunities</h2> */}
      <p className="port7-feedback">
        [Contact Us for MVP Development Support" (For users who want direct assistance)]
      </p>

      <div className="port7-recommendation-section">
        <h3 className="port7-subtitle">Here’s Your Learning Path!</h3>
        <p className="port7-feedback2">
        You're on the right path, but there's still more to achieve before
        you're 100% ready for this your journey. Let's kickstart your journey with
        Nexora, an app offering generative AI courses with dynamic, customizable
        progress. We'll guide you through the learning process, tailoring each
        step to help you develop the skills needed to excel.
      </p>
        <div className="port7-recommendation-list">
          {recommendations.map((rec, index) => (
             <Link to="/course/dashboard" className="navbar-button">
            <div key={index} className="port7-recommendation-card">
              <FaGraduationCap className="port7-icon" />
              <h4>{rec.path}</h4>
              <p>{rec.milestone}</p>
              <div className="port7-progress-bar">
                <div
                  className="port7-progress"
                  style={{ width: `${rec.progress}%` }}
                ></div>
              </div>
              <p className="port7-progress-text">{rec.progress}% Ready</p>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="port7-job-section">
        <h3 className="port7-subtitle">AI-Powered Job Recommendations</h3>
        <div className="port7-job-list">
          {jobSuggestions.map((job, index) => (
            <div key={index} className="port7-job-card">
              <h4>{job.title}</h4>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <button className="port7-job-apply-btn">
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div> */}

      <button className="port7-download-button">
        Download Action Plan <FaDownload />
      </button>
    </div>
  );
};

export default Port7;
