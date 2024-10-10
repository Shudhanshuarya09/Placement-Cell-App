import React from 'react';
import './HomePage.css'; // External CSS file for styling
import { Carousel } from 'react-bootstrap'; // For image carousel

import user_icon from "../assets/sliet logo.jpeg";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four  from "../assets/four.jpg";


const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={user_icon} alt="Logo" className="navbar-logo" /> {/* Logo Image */}
        </div>
        <ul className="navbar-center">
          <li><a href="#">Company</a></li>
          <li><a href="#">Alumni</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Professors</a></li>
          <li><a href="#">Documentation</a></li>
        </ul>
        <div className="navbar-right">
          <span>Admin</span> | <span>SignUp</span>
        </div>
      </nav>

      {/* Image Carousel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={one} alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={two} alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={three} alt="Slide 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={four} alt="Slide 4" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={user_icon} alt="SLIET" className="footer-logo" />
            <p>Sant Longowal Institute of Engineering and Technology</p>
            <p>Longowal - 148106, Distt. Sangrur (Pb.), India</p>
            <p>Phone: +91-1672-280057</p>
          </div>
          <div className="footer-section">
            <h3>General Info</h3>
            <ul>
              <li>Contact us</li>
              <li>Website team</li>
              <li>Downloads</li>
              <li>Vacancy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Employee Corner</h3>
            <ul>
              <li>Rule & Regulation</li>
              <li>Office Order</li>
              <li>Grievance Committee</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Cells</h3>
            <ul>
              <li>Scholarship Cell</li>
              <li>IQAC</li>
              <li>SPIC MACAY</li>
              <li>Nodal Officer (Anti-Ragging)</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li>RTI</li>
              <li>Alumni</li>
              <li>DASA Admission</li>
              <li>NAD</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
