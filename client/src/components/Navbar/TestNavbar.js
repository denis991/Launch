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
      <UserMenu />
      {user ? renderUserMenu() : <Link className="reg" to="/auth">Войти</Link>}
    </div>

  );
}

export default TestNavbar;
