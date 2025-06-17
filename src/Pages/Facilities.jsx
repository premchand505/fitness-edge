import React from 'react'
import './Facilities.css';
const Section = () => {
  return (
    <section className="classes-section">
        <h2 className="section-title">Our Facilities</h2>
        <div className="class-grid">
          <div className="class-card">
            <h3>Strength Training</h3>
            <p>Build muscle and improve overall strength with guided workouts.</p>
          </div>
          <div className="class-card">
            <h3>Cardio Blast</h3>
            <p>High-intensity cardio workouts to boost stamina and burn fat.</p>
          </div>
          <div className="class-card">
            <h3>Functional Fitness</h3>
            <p>Real-life movement training to increase mobility and coordination.</p>
          </div>
        </div>
      </section>
  )
}

export default Section