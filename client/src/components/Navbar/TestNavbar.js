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
      <div>
        <img className="logoRocket" src="https://cliply.co/wp-content/uploads/2019/09/371909290_ROCKET_400px.gif" width="90px" alt="logo" />
      </div>
      <UserMenu />
      {user ? renderUserMenu() : <Link className="reg" to="/auth">Войти</Link>}
    </div>

  );
}

export default TestNavbar;
