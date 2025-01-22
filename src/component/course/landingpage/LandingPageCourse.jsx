import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";
import { Menu, X, CheckCircle2 } from "lucide-react";
import video1 from "../../../assets/course_video1.mp4";
import video2 from "../../../assets/video1.mp4";
import video3 from "../../../assets/video2.mp4";

import Toggle from "react-toggle";

import nexora_logo from "./nexora_logo_white.png";

import "./LandingPageCourse.css";

const LandingPageCourse = () => {
  return (
    <div>
      <div className="hero-upper">
        {/* <div className="hero-upper-content-upper">
          <img className="hero-upper-image" src={nexora_logo} alt="Code" />
          <div className="switch">
            <span>Switch to MVP</span>
            <Toggle
              defaultChecked={false}
              icons={false}
              onChange={toggleMode}
            />
          </div>
        </div> */}

        <div className="hero-upper-content-lower">
          <div className="hero-upper-content-lower-left">
            <h1 className="hero-upper-title">
              AI-Powered Learning for Your Career Growth and Lifelong Success
              {/* <span className="hero-upper-highlight"> for developers</span> */}
            </h1>
            <p className="hero-upper-description">
              Unlock your full potential with Nexora's AI-driven learning
              platform. Our personalized, dynamic courses adapt to your unique
              skills and career goals, offering tailored guidance and feedback.
              Whether you're enhancing your current expertise or exploring new
              fields, Nexora empowers you to succeed in today's competitive
              world
            </p>
            <div className="hero-upper-actions">
              <Link
                to={`/course/portfolio`}
                className="hero-upper-actions-link"
              >
                <button className="hero-upper-actions-btn">
                  <span>Lets Start Your NEXORA</span>
                </button>
              </Link>
              {/* <a href="#" className="doc-btn">
            Documentation
          </a> */}
            </div>
          </div>
          <div className="hero-upper-content-lower-right">
            <div className="hero-upper-content-lower-right-content1">
              <div className="hero-upper-content-lower-right-video-title1">
                Unlock Your Potential with AI-Driven Learning
              </div>
              <video
                autoPlay
                loop
                muted
                className="hero-upper-content-lower-right-video1"
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="hero-upper-content-lower-right-content2">
              <video
                autoPlay
                loop
                muted
                className="hero-upper-content-lower-right-video2"
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="hero-upper-content-lower-right-video-title2">
                Your Skills. Your Career. Our AI
              </p>
            </div>
            <div className="hero-upper-content-lower-right-content3">
            <p className="hero-upper-content-lower-right-video-title3">
            Personalized Education, Tailored for Your Success.
              </p>
              <video
                autoPlay
                loop
                muted
                className="hero-upper-content-lower-right-video3"
              >
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCourse;
