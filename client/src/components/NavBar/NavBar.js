import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import MenuNavbar from '../UI/MenuNavbar/MenuNavbar';
import './Navbar.css';
// import list from '../../../public/img/Tilda_Icons_3st_round-the-clock.svg';

function Navbar() {
  const title = 'SOCITE';
  const [menuActive, setMenuActive] = useState(false);
  const items = [{ value: 'Главная', href: '/', icon: '' }, { value: 'Создать резюме', href: '/main', icon: 'anchor' }, { value: 'Создать вакансию', href: '/xyi', icon: 'anchor' }];
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
