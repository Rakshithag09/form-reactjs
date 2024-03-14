import React, { useState, useEffect } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from './Utils';
import './Form.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    address: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setFormData(savedData);
    }
  }, []);
 

  
  const handleChange = (e) => {
    // If the field is phone number, allow only numeric characters
    if (e.target.name === 'phone') {
      const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData({
        ...formData,
        [e.target.name]: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.dob &&
      formData.address &&
      formData.phone &&
      formData.message
    ) {
      saveToLocalStorage(formData); // Save form data to local storage
      console.log('Form submitted:', formData);
      // Display a toast message here
      alert('Form submitted successfully!');
    } else {
      // Display a toast message for incomplete form
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email" // Change type to "email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel" // Change type to "tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
         <label htmlFor="message">Message:</label>
        <textarea
        id="message"
         name="message"
            value={formData.message}
          onChange={handleChange}
                 required // Add the required attribute here
        ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
