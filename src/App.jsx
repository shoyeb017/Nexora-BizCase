import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavbarCourse from "./component/course/navbar/NavbarCourse";
import LandingPageCourse from "./component/course/landingpage/LandingPageCourse";
import CourseDashboard from "./component/course/dashboard/CourseDashboard";
import LandingPageMVP from "./component/mvp/landingpage/LandingPageMVP";
import NavbarMVP from "./component/mvp/navbar/NavbarMVP";
import Portfolio from "./component/course/portfolio/Portfolio";
import Tutor from "./component/course/tutor/Tutor";
import MVPDashboard from "./component/mvp/dashboard/MVPDashboard";
import "react-toggle/style.css"; // Import default toggle styles
import "./App.css";

function App() {
  // Get the user type from localStorage
  const initialUserType = localStorage.getItem("userType") || "course"; // Default to 'course'
  const [isCourse, setIsCourse] = useState(initialUserType === "course");

  const toggleMode = () => {
    const newUserType = isCourse ? "mvp" : "course";
    localStorage.setItem("userType", newUserType); // Save new userType to localStorage
    setIsCourse(!isCourse); // Update the state
  };

  return (
    <Router>
      <div className="container">
        {isCourse ? (
          <>
            <NavbarCourse toggleMode={toggleMode} />
            <Routes>
              <Route path="/course/landingpage" element={<LandingPageCourse />} />
              <Route path="/course/portfolio" element={<Portfolio />} />
              <Route path="/course/dashboard" element={<CourseDashboard />} />
              <Route path="/course/tutor" element={<Tutor />} />

              <Route path="*" element={<Navigate to="/course/landingpage" />} />
            </Routes>
          </>
        ) : (
          <>
            <NavbarMVP toggleMode={toggleMode} />
            <Routes>
              <Route path="/mvp/landingpage" element={<LandingPageMVP />} />
              <Route path="/mvp/dashboard" element={<MVPDashboard />} />
              <Route path="*" element={<Navigate to="/mvp/landingpage" />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
