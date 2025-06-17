import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>🏋️‍♂️ Fitness Edge</h3>
          <p>Push your limits. Achieve your goals.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#facilities">Facilities</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="footer-contact">
          <p>Email: contact@fitnessedge.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Fitness Edge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
