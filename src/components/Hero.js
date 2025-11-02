import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in-up">
            Hi, I'm <span className="highlight">Hitesh Mehta</span>
          </h1>
          <h2 className="hero-subtitle fade-in-up">Full-Stack Developer</h2>
          <p className="hero-description fade-in-up">
            Skilled in building responsive web and mobile applications using React.js, Node.js, Express, 
            MongoDB, and Flutter. Experienced in RESTful APIs, real-time features with Socket.io, 
            and delivering efficient, scalable software solutions.
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-social fade-in">
            <a href="https://github.com/hiteshmehta15" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/hiteshmehta15" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:hiteshmehta1584@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
            <a href="tel:9535359249" className="social-icon">
              <FaPhone />
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="profile-circle">
            <div className="profile-initial">HM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
