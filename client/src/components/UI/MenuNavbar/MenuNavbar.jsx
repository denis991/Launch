import React, { useState } from 'react';
import './MenuNavbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogoutThunk } from '../../../redux/actions/AuthAction';

function MenuNavbar(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const renderLogout = () => <button type="button" className="btn btn-secondary" onClick={() => dispatch(userLogoutThunk())}>Выйти</button>;

  const closeHandler = () => setOpen(false);
  return (
    <div>

      <input onClick={() => setOpen(true)} type="checkbox" checked={open} className="bx" id="active" />
      <label htmlFor="active" className="menu-btn" {...props}>
        <i className="fas fa-bars" />
      </label>
      <div className="wrapper">
        <ul>
          <li><Link onClick={closeHandler} to="/account">Мой профиль</Link></li>
          <li><Link onClick={closeHandler} to="/account/cvs/new">Добавить резюме</Link></li>
          <li><Link onClick={closeHandler} to="/account/vacancies/new">Добавить вакансию</Link></li>
          { renderLogout()}
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
