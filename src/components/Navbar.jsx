import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; 
import './Navbar.css'
import SiliconIcon from '../img/silicon-icon.svg'
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`navbar-container ${darkMode ? 'dark' : 'light'}`}>
        <div className="navbar-header-container">
          <a id="logo" href="/">
            <img src={SiliconIcon} alt="Silicon logo" />
            <h1>Silicon</h1>
          </a>
        </div>

      <nav id="main-menu" className="navbar-features">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="/contact">Contact</a>
      </nav>

      <div className="btn-toggle-switch">
        <span className="label">Dark Mode</span>
        <label className="switch">
          <input 
            type="checkbox" 
            id="colormode-toggle" 
            checked={darkMode}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>

      <a id="auth-signin" className="btn-primary" href="#">
        <i className="fa-regular fa-user"></i>
        <span>Sign in / up</span>
      </a>

      <button className="btn-mobile" onClick={() => setIsMobileMenuOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        darkMode={darkMode}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;