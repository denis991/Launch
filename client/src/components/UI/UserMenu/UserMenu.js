/* eslint-disable import/extensions */
import React from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogoutThunk } from '../../../redux/actions/AuthAction';

function UserMenu({
  header, items, active, setActi,
}) {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const renderLogout = () => <button type="button" className="btn btn-secondary" onClick={() => dispatch(userLogoutThunk())}>Выйти</button>;
  const fio = () => (
    <div className="fio">
      {user.name}
    </div>
  );

  return (
    <div className={active ? 'menu-user active' : 'user'} onClick={() => setActi(false)}>
      <div className="user-menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="headerUser">
          {user ? fio() : null}
        </div>
        <ul style={{ padding: '0px' }}>
          {items.map((item) => (
            <li key={item.id} style={{ listStyleType: 'none' }}>
              <Link to={item.href}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
        {user ? renderLogout() : <Link className="reg" to="/auth">Регистрация</Link> }
      </div>
    </div>
  );
}

export default UserMenu;
