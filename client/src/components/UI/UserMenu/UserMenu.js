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
  const renderLogout = () => <button type="button" onClick={() => dispatch(userLogoutThunk())}>Logout</button>;
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
        <ul>
          {items.map((item) => (
            <li>
              <Link to={item.href}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
        {user ? renderLogout() : <Link className="reg" to="/auth">Sign Up</Link> }
      </div>
    </div>
  );
}

export default UserMenu;
