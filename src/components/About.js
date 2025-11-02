import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Full-Stack Developer</strong> with expertise in building modern, 
              responsive web and mobile applications. I specialize in the MERN stack (MongoDB, Express.js, 
              React.js, Node.js) and have experience with Flutter for mobile development.
            </p>
            <p>
              My journey in software development has been driven by a love for problem-solving and 
              analytical thinking. I enjoy creating efficient, scalable solutions that make a real 
              impact. Whether it's implementing real-time features with Socket.io, building RESTful APIs, 
              or crafting beautiful user interfaces, I'm committed to delivering high-quality code.
            </p>
            <p>
              Currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at Jain University, 
              I'm always eager to learn new technologies and take on challenging projects. I believe in 
              continuous learning and staying updated with the latest industry trends.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
