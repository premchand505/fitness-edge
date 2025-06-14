// src/Components/Slideshow.jsx
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  '/images/image1.webp',
  '/images/image2.webp',
  '/images/image3.webp',
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`slide ${index === current ? 'active' : ''}`}
          alt={`gym-interior-${index}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
