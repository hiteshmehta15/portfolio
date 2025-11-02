import React from 'react';
import './Experience.css';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-info">
                <h3 className="experience-title">Web Developer/Flutter developer Intern</h3>
                <div className="experience-company">D'mark</div>
                <div className="experience-meta">
                  <span className="experience-duration">Nov '24 - Present</span>
                  <span className="experience-location">
                    <FaMapMarkerAlt /> Bangalore, India
                  </span>
                </div>
              </div>
            </div>
            <div className="experience-description">
              <ul>
                <li>
                  Gained expertise in the entire web and app development lifecycle, including HTML, CSS, 
                  JavaScript, and Tailwind CSS for frontend, while mastering backend services with 
                  Node.js, Express, and MongoDB.
                </li>
                <li>
                  Built a full-featured mobile application using Flutter with Firebase integration for 
                  backend services.
                </li>
                <li>
                  Implemented secure in-app payment gateway API for secure and seamless in-app payments.
                </li>
              </ul>
            </div>
            <div className="experience-skills">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
