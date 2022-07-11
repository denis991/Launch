import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <Link className="footer-content" to="/about">
        О нас
      </Link>
    </div>
  );
}

export default Footer;
