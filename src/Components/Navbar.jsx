import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-shrink' : ''}`}>
      <div className="logo">

        <h1 className="brand">fitness-edge</h1>
        </div>
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><button className="join-btn">Join Now</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
