import React from 'react';
import NavBar from './NavBar';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <section className="content-section">
                <h2>Our Services</h2>
                <p>We offer a wide range of services to meet all your needs.</p>
            </section>
        </div>
    );
};

export default Home;
