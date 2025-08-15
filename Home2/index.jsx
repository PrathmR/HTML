import React from "react";
import "./Home.css"; // Import styles (you can define your own styling)

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <img 
          className="hero-image" 
          src="https://via.placeholder.com/1200x600" 
          alt="Hero"
        />
        <div className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>
            Discover amazing content, great services, and opportunities to grow with us.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
