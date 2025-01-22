import React from "react";
import "./MVPDashboard.css";

import FeaturedContent from "./FeaturedContent";

const Dashboard = () => {
  return (
    <div className="Cont">

<FeaturedContent />

      {/* Top Section */}
      <div className="dashboard-top">
        <h1 className="dashboard-title">"Transforming imagination into experiences"</h1>
        <div className="dashboard-content">
          {/* Prized Alliances */}
          <div className="dashboard-column">
            <h2 className="dashboard-subtitle">Prized Alliances</h2>
            <div className="dashboard-logos">
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/ibm.png" alt="IBM Business Partner" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/aws.png" alt="AWS" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/wvip.png" alt="WordPress VIP" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/microsoft.png" alt="Microsoft Gold Partner" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/kentico.png" alt="Kentico" />
            </div>
          </div>
          {/* Certifications */}
          <div className="dashboard-column">
            <h2 className="dashboard-subtitle">Certifications</h2>
            <div className="dashboard-logos">
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/certifications-2.png" alt="SBA WOSB" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/certifications-1.png" alt="NMSDC MBE Certified" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/certifications-3.png" alt="WBENC" />
              <img src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/partners-logo/certifications-4.png" alt="CMMI Level 5" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <video
        className="dashboard-video"
        width="100%"
        autoPlay
        muted
        loop
        aria-label="Transforming imagination into experiences"
      >
        <source
          src="https://infostride.com/wp-content/themes/infostride/assets-v5/images/video-bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Dashboard;
