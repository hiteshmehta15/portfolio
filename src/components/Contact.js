import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email sending functionality here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <div className="contact-methods">
              <a href="mailto:hiteshmehta1584@gmail.com" className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>hiteshmehta1584@gmail.com</p>
                </div>
              </a>
              <a href="tel:9535359249" className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>9535359249</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/hiteshmehta15" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">
                  <FaLinkedin />
                </div>
                <div className="method-info">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/hiteshmehta15</p>
                </div>
              </a>
              <a href="https://github.com/hiteshmehta15" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">
                  <FaGithub />
                </div>
                <div className="method-info">
                  <h4>GitHub</h4>
                  <p>github.com/hiteshmehta15</p>
                </div>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
