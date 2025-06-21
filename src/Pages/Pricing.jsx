import React from 'react'
import './Pricing.css';


const plans = [
  {
    duration: '1 Month',
    membership: 2500,
    personalTraining: 2500,
    total: 5000,
  },
  {
    duration: '3 Months',
    membership: 5000,
    personalTraining: 10000,
    total: 15000,
  },
  {
    duration: '6 Months',
    membership: 9000,
    personalTraining: 18000,
    total: 27000,
  },
  {
    duration: '12 Months',
    membership: 15000,
    personalTraining: 30000,
    total: 45000,
  },
];

const PricingCard = () => {
  return (
    <div id='pricing' className="pricing-container">
      {plans.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h3 className="plan-title">{plan.duration} Plan</h3>
          <ul className="plan-details">
            <li>Membership: <span className="price">&#8377;{plan.membership}</span></li>
            <li>Personal Training: <span className="price">&#8377;{plan.personalTraining}</span></li>
            <li>Total: <span className="price total">&#8377;{plan.total}</span></li>
          </ul>
          <button className="join-button" aria-label={`Join ${plan.duration} plan`}>
            Join Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;