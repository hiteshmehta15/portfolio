import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-text">HM</span>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
