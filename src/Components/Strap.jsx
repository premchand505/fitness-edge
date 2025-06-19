import React from 'react';
import './Strap.css';

const Strap = () => {
  const items = [
    'Cardio',
    'Cross-Fit',
    'Strength-Training',
    'Weightloss',
    'Musclebuilding',
    'Weightgain',
  ];

  // Duplicate items for seamless looping
  const doubledItems = [...items, ...items];

  return (
    <div className="strap-container">
      <div className="strap-content">
        {doubledItems.map((item, index) => (
          <div key={index} className="strap-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strap;