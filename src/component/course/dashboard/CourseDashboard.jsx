import React from "react";
import "./CourseDashboard.css";
import Card2 from "./Card2";
import Card3 from "./Card3";
import GraphCard from "./GraphCard.jsx";
import Card5 from "./Card5";

const CourseDashboard = () => {
  return (
    <div className="course-dashboard-container">
      <div className="course-dashboard-sidebar">
      <div class="course-dashboard-search-search">
            <input placeholder="Search Courses" type="text" />
            <button type="submit">Go</button>
          </div>
        <div className="course-dashboard-greeting">
          <h1>Good Morning,</h1>
          <p>Welcome, James!</p>
        </div>
        <div className="course-dashboard-last-opened">
          <h3>Last Opened Courses</h3>
          <div className="course-dashboard-carousel">
          <Card2 />
          <Card2 />
          </div>
        </div>
        <div className="course-dashboard-your-courses">
          <h3>Your Courses</h3>
          <div className="course-dashboard-course-list">
            <Card3 />

          </div>
        </div>
      </div>

      <div className="course-dashboard-main">
        <div className="course-dashboard-header">
          <h2>January 26, 2024</h2>
          <p>Wednesday, 10 Tasks Today</p>
        </div>
        <div className="course-dashboard-stats">
          <div className="learning-progress">
          <GraphCard completed={30} inProgress={25} notStarted={20} totalHours={75} />
          </div>
          <div className="course-task">
            <Card5 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
