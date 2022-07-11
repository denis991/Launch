/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MenuNavbar from '../UI/MenuNavbar/MenuNavbar';
import UserMenu from '../UI/UserMenu/UserMenu';
import CreateMenu from '../UI/CreateMenu/CreateMenu';
import './Navbar.css';

function Navbar() {
  const title = 'Launch';
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [createdMenu, setCreatedMenu] = useState(false);
  const items = [
    { value: 'Резюме', href: '/cvs', icon: '/img/time.svg' },
    { value: 'Вакансии', href: '/', icon: '/img/Mac.svg' },
    { value: 'Рейтинг', href: '/rating', icon: '/img/Mony.svg' },
    { value: 'Релокация', href: '/relocation', icon: '/img/Mony.svg' },
    { value: 'Новости', href: '/news', icon: '/img/Mony.svg' }
  ];
  const item = [
    { value: 'Мои резюме', href: '/account/cvs', icon: '/img/time.svg' },
    { value: 'Мои вакансии', href: '/account/vacancies', icon: '/img/Mac.svg' },
    { value: 'Мой профиль', href: '/account', icon: 'img/mac.svg' }
  ];
  const itemss = [
    { value: 'Создать резюме', href: '/account/cvs/new', icon: '/img/time.svg' },
    { value: 'Создать вакансию', href: '/account/vacancies/new', icon: '/img/Mac.svg' },
  ];

  const renderUserMenu = () => (
    <div className="userMenu" onClick={() => setUserMenuActive(!userMenuActive)}>
      <img src="/img/prev.jpeg" alt="user" />
      <UserMenu active={userMenuActive} setActive={setUserMenuActive} header={title} items={item} />
    </div>
  );
  const createMenu = () => (
    <div className="createMenu" onClick={() => setCreatedMenu(!createdMenu)}>
      <span>Добавить ▼</span>
      <CreateMenu active={createdMenu} setActive={setCreatedMenu} header={title} items={itemss} />
    </div>
  );
  const notif = () => (
    <Link className="notif" to="/notification">
      🔔
    </Link>
  );
  return (
    <div className="navbar">
      <div className="links">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <div className="created">
          {user ? notif() : null}
          {user ? createMenu() : null}
          {user ? renderUserMenu() : <Link className="reg" to="/auth">Sign Up</Link> }
        </div>
        <MenuNavbar active={menuActive} setActive={setMenuActive} header={title} items={items} />

      </div>
    </div>

  );
}
// key={Date.now + Math.random()}
export default Navbar;
