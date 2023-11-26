import React from 'react';
import './HeroSection.css'; // Import the CSS file
import myImage from "./DALL·E 2023-11-26 12.43.28 - A 3D animated character with a cheerful expression, waving hello. The character has an oval-shaped face, dark hair, glasses, and is dressed in a moder.png"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-greeting">Hey! I'm Desmond 👋</h2>
        <br></br>
        <br></br>
        <h1 className="hero-name-title">Full Stack Engineer</h1>
        <h1 className="hero-name-title">& AI/ML Engineer</h1>
        <h1 className="hero-name-title">@ <a href="http://www.caseguard.com" target="_blank" rel="noopener noreferrer" className="hero-company-link">CaseGuard</a></h1>
        <br/>
        <br></br>
        <p className="hero-subtitle">Developing stuff since 2020</p>
        <br/>
        <br></br>
        <br/>
        <br></br>
        <button className="hero-cta-button" onClick={() => { /* Scroll function or other action */ }}>Take a Look</button>
      </div>
      <div className="hero-image-container">
        <img src={myImage} alt="Desmond waving" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;