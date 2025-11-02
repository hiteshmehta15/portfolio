import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-info">
              <h3 className="education-degree">B.Tech in Computer Science & Engineering</h3>
              <h4 className="education-institution">Jain University</h4>
              <div className="education-meta">
                <span className="education-duration">
                  <FaCalendar /> Aug '22 - Present
                </span>
                <span className="education-location">
                  <FaMapMarkerAlt /> Bengaluru, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
