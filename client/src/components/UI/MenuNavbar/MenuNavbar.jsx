import React from 'react';
import './MenuNavbar.css';

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
              <a href={item.href}>{item.value}</a>
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
