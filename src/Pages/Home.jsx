import React from 'react';
import './Home.css';
import Strap from '../Components/Strap';
import ContactForm from '../Components/Contactform';

const Home = () => {
  return (
    <>
      <div id="home" className="home-container">
        <div className="home-content">
          <h3 className="barhookline">Experience Premium Fitness</h3>
          <h1 className="hookline">
            Welcome to Fitness Edge<br />
            Unleash Your Inner Beast
          </h1>
          <h3>
            Step into Fitness Edge - where strength meets transformation. Whether you're just starting out or chasing elite performance, our expert trainers, modern equipment, and motivating environment will push you to crush every goal.
          </h3>
        </div>
        <ContactForm />
      </div>
      <Strap />
    </>
  );
};

export default Home;