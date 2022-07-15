import React, { useState } from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';

function MenuNavbar(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <input className="menu-icon my" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon" />
      <nav className="nav1">
        <ul className="pt-5">

          <li><Link onClick={() => setVisible(!visible)} to="/">Vacancies</Link></li>
          <li><Link onClick={() => setVisible(!visible)} to="/users">Rating</Link></li>
          <li><Link onClick={() => setVisible(!visible)} to="/cvs">Resume</Link></li>
          <li><Link onClick={() => setVisible(!visible)} to="/news">News</Link></li>
          <li><Link onClick={() => setVisible(!visible)} to="/relocation">Relocation</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNavbar;
