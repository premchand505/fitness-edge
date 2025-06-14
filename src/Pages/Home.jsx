import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="hero-wrapper">
      <div className="topbar">
        Premium Fitness Experience
      </div>

      <div className="hookline">
        <h1>Transform your body, achieve your goals</h1>
        <h2>
          Experience state-of-the-art fitness equipment, expert personal training,
          and a supportive community. Start your fitness journey today.
        </h2>
      </div>

      <div className="buttons">
        <button>Join Now</button>
        <button>View Classes</button>
      </div>
    </div>
  );
};

export default Home;
