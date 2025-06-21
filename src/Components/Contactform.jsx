import React, { useState } from 'react';
import './Contactform.css';

const Contactform = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '' });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setIsError(false);
        setFormData({ name: '', mobile: '' });
      } else {
        setMessage(data.error || 'Something went wrong');
        setIsError(true);
      }
    } catch (error) {
      setMessage('Failed to submit form');
      setIsError(true);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className={isError ? 'error' : ''}>{message}</p>}
    </div>
  );
};

export default Contactform;