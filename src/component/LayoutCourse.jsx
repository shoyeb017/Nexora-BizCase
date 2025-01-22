import React from "react";
import { Outlet } from "react-router-dom";
import NavbarCourse from "../component/course/navbar/NavbarCourse.jsx";
import "./Layout.css";

const LayoutCourse = ({ isCourse, toggleMode }) => {
  return (
    <div className="layout">
      <NavbarCourse isCourse={isCourse} toggleMode={toggleMode} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutCourse;
