import React from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';

function MenuNavbar(props) {
  return (
    <div>
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon" />
      <nav className="nav1">
        <ul className="pt-5">
          <li><Link to="/news">News</Link></li>
          <li><Link to="/relocation">Relocation</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNavbar;
