/* eslint-disable import/extensions */
import React from 'react';
import './UserMenu.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogoutThunk } from '../../../redux/actions/AuthAction';

function UserMenu({
  header, items, active, setActive,
}) {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const renderLogout = () => <button type="button" onClick={() => dispatch(userLogoutThunk())}>Logout</button>;

  return (
    <div className={active ? 'menu-user active' : 'user'} onClick={() => setActive(false)}>
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          {header}
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
