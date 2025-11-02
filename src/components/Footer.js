import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          Designed & Built with <FaHeart className="heart-icon" /> by Hitesh Mehta
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
