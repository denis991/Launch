import React, { useState } from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';

function MenuNavbar(props) {
  const [open, setOpen] = useState();
  const closeHandler = () => setOpen(false);
  return (
    <div>
      <input onClick={() => setOpen(true)} checked={open} className="menu-icon my" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon" />
      <nav className="nav1">
        <ul className="pt-5">

          <li><Link onClick={closeHandler} to="/">Вакансии</Link></li>
          <li><Link onClick={closeHandler} to="/users">Рейтинг</Link></li>
          <li><Link onClick={closeHandler} to="/cvs">Резюме</Link></li>
          <li><Link onClick={closeHandler} to="/news">Новости</Link></li>
          <li><Link onClick={closeHandler} to="/relocation">Релокация</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuNavbar;
