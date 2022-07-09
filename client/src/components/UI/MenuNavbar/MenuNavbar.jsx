import React from 'react';
import './MenuNavbar.css';
import { Link } from 'react-router-dom';

function MenuNavbar({
  header, items, active, setActive,
}) {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          {header}
        </div>
        <ul>
          {items.map((item) => (
            <li>
              <Link to={item.href}>
                {item.value}
              </Link>
              <span className="material-icons">
                <img className="icon" src={item.icon} alt="time" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
