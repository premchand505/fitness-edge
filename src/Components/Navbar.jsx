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
        // When closing, focus back to menu button
        menuButtonRef.current?.focus();
      }
      return !prev;
    });
    console.log('Menu toggled:', !menuOpen); // Debug log (remove in production)
  };

  // Close sidebar on outside click (optional, improves UX)
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
        <nav ref={navRef} className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a className="link-item" href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a className="link-item" href="#facilities" onClick={toggleMenu}>
            Facilities
          </a>
          <a className="link-item" href="#pricing" onClick={toggleMenu}>
            Pricing
          </a>
          <a className="link-item" href="#nutrition" onClick={toggleMenu}>
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