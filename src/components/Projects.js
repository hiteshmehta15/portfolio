import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Social Media Site',
      description: 'Built a full-stack social media app with React (Vite), Node.js/Express, and MongoDB; implemented JWT auth, bcrypt hashing, profile management, follow systems, and secure image uploads. Designed real-time notifications using Socket.io and built a responsive React UI with infinite scroll and image previews; enforced security via Helmet, CORS, and rate limiting.',
      technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Helmet'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Expense Tracker',
      description: 'Developed a full-stack Expense Tracker using Node.js, Express, and MongoDB, featuring JWT-based authentication and secure REST API for data storage. Developed a React and Tailwind single-page application (SPA) for authentication and expense CRUD operations with filtering and pagination features. Added analytics and export (CSV) plus security hardening (helmet, rate-limiting).',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS', 'JWT', 'Helmet'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
