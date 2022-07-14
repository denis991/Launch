import React from 'react';
import './MenuNavbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogoutThunk } from '../../../redux/actions/AuthAction';

function MenuNavbar(props) {
  const dispatch = useDispatch();
  const renderLogout = () => <button type="button" className="btn btn-secondary" onClick={() => dispatch(userLogoutThunk())}>Выйти</button>;
  return (
    <div>

      <input type="checkbox" className="bx" id="active" />
      <label htmlFor="active" className="menu-btn" {...props}>
        <i className="fas fa-bars" />
      </label>
      <div className="wrapper">
        <ul>
          <li><Link to="/account">Profile</Link></li>
          <li><Link to="/account/cvs/new">Add resume</Link></li>
          <li><Link to="/account/vacancies/new">Add vacancies</Link></li>
          { renderLogout()}
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
