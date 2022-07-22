/* eslint-disable import/extensions */
import React from 'react';
import './CreateMenu.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogoutThunk } from '../../../redux/actions/AuthAction';

function UserMenu({
  header, items, active, setActive,
}) {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={active ? 'create' : 'menu-create active'} onClick={() => setActive(false)}>
      <div className="create-menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="content">
          {items.map((item) => (
            <div key={Date.now() + Math.random()}>
              <Link className="content-link" to={item.href}>
                {item.value}
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default UserMenu;
