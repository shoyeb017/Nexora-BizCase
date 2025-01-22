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
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";

import Toggle from "react-toggle";

import nexora_logo from "./nexora_logo_white.png";

import "./LandingPageMVP.css";

const LandingPageMVP = () => {
  return (
    <div>
      <div className="mvp-hero-upper">
        {/* <div className="mvp-hero-upper-content-upper">
          <img className="mvp-hero-upper-image" src={nexora_logo} alt="Code" />
        </div> */}

        <div className="mvp-hero-upper-content-lower">
          <div className="mvp-hero-upper-content-lower-right">
            <p className="mvp-hero-upper-content-lower-right-video-title1">
            Empowering startups with cost-effective and stronger
            </p>
            <video
              autoPlay
              loop
              muted
              className="mvp-hero-upper-content-lower-right-video1"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mvp-hero-upper-content-lower-right-video-title2">
            Turn your innovative ideas into functional
            </p>
            <video
              autoPlay
              loop
              muted
              className="mvp-hero-upper-content-lower-right-video2"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mvp-hero-upper-content-lower-left">
            <h1 className="mvp-hero-upper-title">
            Bring Your Vision to Life with Scalable MVP Solutions
              {/* <span className="mvp-hero-upper-highlight"> for developers</span> */}
            </h1>
            <p className="mvp-hero-upper-description">
            From idea to market-ready product, our tailored MVP development 
            services empower startups to validate, iterate, and succeed faster 
            with expert guidance and cutting-edge technology.
            </p>
            <div className="mvp-hero-upper-actions">
              <Link to={`/mvp/dashboard`} className="mvp-hero-upper-actions-link">
                <button className="mvp-hero-upper-actions-btn">
                  <span>Lets Start Your NEXORA</span>
                </button>
              </Link>
              {/* <a href="#" className="doc-btn">
            Documentation
          </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageMVP;
