import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './HeaderBar.css'; 

const HeaderBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-bar">
      <div className="brand-name">Dizzy</div>
      
      <div className="menu-container">
        <button className="menu-toggle" onClick={toggleMenu}>
            Menu
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
