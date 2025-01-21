import React from 'react';
import Toggle from 'react-toggle'; // Import react-toggle
import './Navbar.css';

function NavbarManagement({ toggleMode }) {
  return (
    <nav className="navbar management">
      <div className="navbar-content">
        <h2>Management Dashboard</h2>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Home</li>
          <li>Review Learners</li>
        </ul>
      </div>
      <div className="switch">
        <span>Switch to Learner</span>
        <Toggle defaultChecked={true} icons={false} onChange={toggleMode} />
      </div>
    </nav>
  );
}

export default NavbarManagement;
