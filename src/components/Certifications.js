import React from 'react';
import './Certifications.css';
import { FaCertificate, FaCalendar } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Programming for Everybody',
      issuer: 'University of Michigan',
      date: 'Jan \'25',
      link: '#'
    },
    {
      title: 'Modern Web Development with Laravel & PHP',
      issuer: 'Board Infinity',
      date: 'May \'25',
      link: '#'
    },
    {
      title: 'Backend Development: Node.js, Express, MongoDB & REST APIs',
      issuer: 'Board Infinity',
      date: 'Oct \'25',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">
                <FaCertificate />
              </div>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <div className="certification-date">
                  <FaCalendar /> {cert.date}
                </div>
              </div>
              <a href={cert.link} className="certification-link" target="_blank" rel="noopener noreferrer">
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
