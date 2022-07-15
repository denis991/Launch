import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UI/UserMenu/UserMenu';
import MenuNavbar from '../UI/MenuNavbar/MenuNavbar';
import './TestNavbar.css';

function TestNavbar() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderUserMenu = () => (
    <MenuNavbar />
  );
  return (
    <div className="header">
      <div className="logoRocket">
        <img src="https://i.pinimg.com/originals/9c/32/01/9c3201db56c2af73499b3f0c6e8c0cf4.gif" width="125px" alt="logo" />
      </div>
      <UserMenu />
      {user ? renderUserMenu() : <Link className="reg" to="/auth">Войти</Link>}
    </div>

  );
}

export default TestNavbar;
