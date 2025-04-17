import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo192.png" alt="PrepSprint Logo" className="logo-img" />
            <div className="logo-text">
              <h1>PrepSprint</h1>
              <p>Bridging Talent with Opportunity</p>
            </div>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#highlights">Highlights</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
