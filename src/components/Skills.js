import React from 'react';
import './Skills.css';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'Dart', 'PHP']
    },
    {
      icon: <FaServer />,
      title: 'Frameworks & Libraries',
      skills: ['Node.js', 'React.js', 'Express.js', 'Flutter', 'Pandas', 'NumPy', 'Seaborn', 'Scikit-Learn']
    },
    {
      icon: <FaDatabase />,
      title: 'Databases & Tools',
      skills: ['MongoDB', 'Firebase', 'Git', 'GitHub', 'Vscode', 'Android Studio', 'Power BI', 'MySQL']
    },
    {
      icon: <FaTools />,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Analytical Thinking', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
