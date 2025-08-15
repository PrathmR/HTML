import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src="https://via.placeholder.com/1920x600" alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h1>Welcome to Our Website</h1>
                <p>Discover amazing content and enjoy your stay!</p>
            </div>
        </div>
    );
};

export default HeroSection;
