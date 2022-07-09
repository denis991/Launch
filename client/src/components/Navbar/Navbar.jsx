import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuNavbar from '../UI/MenuNavbar/MenuNavbar';
import './Navbar.css';

function Navbar() {
  const title = 'Launch';
  const [user, setUser] = useState({});
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: 'Резюме', href: '/signup', icon: '/img/time.svg' },
    { value: 'Вакансии', href: '/main', icon: '/img/Mac.svg' },
    { value: 'Рейтинг', href: '/rating', icon: '/img/Mony.svg' },
    { value: 'Релокация', href: '/reloc', icon: '/img/Mony.svg' },
    { value: 'Новости', href: '/news', icon: '/img/Mony.svg' }
  ];

  const renderLogout = () => (
    <button className="logout_btn" type="button">Logout</button>
  );
  return (
    <div className="navbar">
      <div className="links">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <div className="linki">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/auth">signup</Link>
          <Link className="link" to="/resumes">resumes</Link>
          <Link className="link" to="/account">account</Link>
        </div>
        {user.id ? renderLogout() : <Link className="reg" to="/signup">Regis</Link> }
        <MenuNavbar active={menuActive} setActive={setMenuActive} header={title} items={items} />
      </div>
    </div>

  );
}
// key={Date.now + Math.random()}
export default Navbar;
