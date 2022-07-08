import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuNavbar from '../UI/MenuNavbar/MenuNavbar';
import './Navbar.css';

function Navbar() {
  const title = 'SOCITE';
  const [menuActive, setMenuActive] = useState(false);
  const items = [{ value: 'Резюме', href: '/', icon: '/img/time.svg' }, { value: 'Вакансии', href: '/main', icon: '/img/Mac.svg' }, { value: 'Рейтинг', href: '/xyi', icon: '/img/Mony.svg' }, { value: 'Релокация', href: '/xyi', icon: '/img/Mony.svg' }, { value: 'Новости', href: '/xyi', icon: '/img/Mony.svg' }];
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/qwerty">XZ</Link>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <MenuNavbar active={menuActive} setActive={setMenuActive} header={title} items={items} />
      </div>
    </div>
  );
}
export default Navbar;
