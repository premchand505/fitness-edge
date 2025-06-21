import React from 'react';
import './Nutrition.css';

const plans = [
  {
    duration: '1 Month',
    total: 3000,
  },
  {
    duration: '3 Months',
    total: 9000,
  },
  {
    duration: '6 Months',
    total: 18000,
  },
  {
    duration: '12 Months',
    total: 36000,
  },
];

const NutritionCard = () => {
  return (
    <div id='nutrition' className="nutrition-container">
      {plans.map((plan, index) => (
        <div key={index} className="nutrition-card">
          <h3 className="plan-title">{plan.duration} Plan</h3>
          <ul className="plan-details">
            <li>Duration: {plan.duration}</li>
            <li>Mentorship: 1:1 Personalized Coaching</li>
            <li>Daily Nutrition Advice: Tailored to Preferences</li>
            <li>Total: <span className="price total">₹{plan.total}</span></li>
          </ul>
          <button className="join-button" aria-label={`Join ${plan.duration} nutrition plan`}>
            Join Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default NutritionCard;