// src/Components/Slideshow.jsx
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow-container-fade-in">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`slide ${index === current ? 'active' : ''}`}
          alt={`gym-interior-${index}`}
        />
      ))}

      {/* Arrows */}
      <button className="arrow prev" onClick={prevSlide}>&#10094;</button>
      <button className="arrow next" onClick={nextSlide}>&#10095;</button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
