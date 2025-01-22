import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMVP from "../component/mvp/navbar/NavbarMVP.jsx";
import "./Layout.css";

const LayoutMVP = ({ isCourse, toggleMode }) => {
  return (
    <div className="layout">
      <NavbarMVP isCourse={isCourse} toggleMode={toggleMode} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutMVP;
