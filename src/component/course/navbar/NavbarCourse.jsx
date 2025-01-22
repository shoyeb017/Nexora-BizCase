import React from "react";
import Toggle from "react-toggle";
import { Link, useLocation } from "react-router-dom";
import "./NavbarCourse.css";

import nexora_logo from "./nexora_logo_white.png";

function NavbarCourse({ toggleMode }) {
  const location = useLocation();
  const hideButtons = location.pathname.endsWith("/course/landingpage");

  return (
    <div className="navbar">
      <div className="logo">
        <img src={nexora_logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        {!hideButtons && (
          <div className="navbar-buttons">
            <Link to="/course/portfolio" className="navbar-button">
              Get Courses
            </Link>
            <Link to="/course/dashboard" className="navbar-button">
              Dashboard
            </Link>
            <Link to="/course/tutor" className="navbar-button">
              AI Tutor
            </Link>
          </div>
        )}
        <div className="switch">
          <span className="switch-title1">
            Switch To <span className="switch-title2">MVP Service</span>{" "}
          </span>
          <Toggle defaultChecked={false} icons={false} onChange={toggleMode} />
        </div>
      </div>
    </div>
  );
}

export default NavbarCourse;
