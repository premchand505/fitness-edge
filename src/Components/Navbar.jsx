import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaDumbbell } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) {
        menuButtonRef.current?.focus();
      }
      return !prev;
    });
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
        toggleMenu();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  return (
    <div className="navbar-container">
      <div className="left-container">
        <FaDumbbell className="dumbell-icon" aria-hidden="true" />
        <h2 className="brand-name">Fitness Edge</h2>
      </div>
      <div className="right-container">
        <nav ref={navRef} className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
          <a className="link-item" href="#home" onClick={() => handleNavClick('home')}>
            Home
          </a>
          <a className="link-item" href="#facilities" onClick={() => handleNavClick('facilities')}>
            Facilities
          </a>
          <a className="link-item" href="#pricing" onClick={() => handleNavClick('pricing')}>
            Pricing
          </a>
          <a className="link-item" href="#nutrition" onClick={() => handleNavClick('nutrition')}>
            Nutrition
          </a>
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;