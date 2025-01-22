import React, { useState } from "react";
import Toggle from "react-toggle";
import { Link, useLocation } from "react-router-dom";
import "./NavbarMVP.css";

import nexora_logo from "./nexora_logo_white.png";
import DropCard1 from "./DropCard1"; // Import DropCard1
import DropCard2 from "./DropCard2"; // Import DropCard2
import DropCard3 from "./DropCard3"; // Import DropCard3

function NavbarMVP({ toggleMode }) {
  const location = useLocation();
  const hideButtons = location.pathname.endsWith("/mvp/landingpage");

  const [activeDropdown, setActiveDropdown] = useState("");

  return (
    <div className="navbar1">
      <div className="navbar1-logo">
        <img src={nexora_logo} alt="Logo" className="navbar1-logo" />
      </div>

      {/* {!hideButtons && <div className="navbar1-background"></div>} */}

      <div className="navbar1-right">
        {!hideButtons && (
          
          <div className="navbar1-buttons">
            {/* <div className="navbar1-background"></div> */}
            {/* Dropdown for Industries */}
            <div
              className={`dropdown ${activeDropdown === "industries" ? "active" : ""}`}
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown("")}
            >
              <button className="navbar1-button">Industries</button>
              {activeDropdown === "industries" && (
                <div className="dropdown-overlay">
                  <DropCard1 />
                </div>
              )}
            </div>

            {/* Dropdown for Competencies */}
            <div
              className={`dropdown ${activeDropdown === "competencies" ? "active" : ""}`}
              onMouseEnter={() => setActiveDropdown("competencies")}
              onMouseLeave={() => setActiveDropdown("")}
            >
              <button className="navbar1-button">Competencies</button>
              {activeDropdown === "competencies" && (
                <div className="dropdown-overlay">
                  <DropCard2 />
                </div>
              )}
            </div>

            {/* Dropdown for Insights */}
            <div
              className={`dropdown ${activeDropdown === "insights" ? "active" : ""}`}
              onMouseEnter={() => setActiveDropdown("insights")}
              onMouseLeave={() => setActiveDropdown("")}
            >
              <button className="navbar1-button">Insights</button>
              {activeDropdown === "insights" && (
                <div className="dropdown-overlay">
                  <DropCard3 />
                </div>
              )}
            </div>

            {/* Public Sector */}
            <button className="navbar1-button">Public Sector</button>
          </div>
        )}
        <div className="switch">
          <span className="switch-title1">
            Switch To <span className="switch-title2">Generative AI Courses</span>{" "}
          </span>
          <Toggle defaultChecked={true} icons={false} onChange={toggleMode} />
        </div>
      </div>
    </div>
  );
}

export default NavbarMVP;
