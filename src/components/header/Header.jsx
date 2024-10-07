import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Placement Cell</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#alumni">Alumni</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-button">
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
