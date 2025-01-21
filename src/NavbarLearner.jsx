import React from 'react';
import Toggle from 'react-toggle'; // Import react-toggle
import './Navbar.css';

function NavbarLearner({ toggleMode }) {
  return (
    <nav className="navbar learner">
      <div className="navbar-content">
        <h2>Learner Dashboard</h2>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Home</li>
          <li>Review Others</li>
        </ul>
      </div>
      <div className="switch">
        <span>Switch to Management</span>
        <Toggle defaultChecked={false} icons={false} onChange={toggleMode} />
      </div>
    </nav>
  );
}

export default NavbarLearner;
