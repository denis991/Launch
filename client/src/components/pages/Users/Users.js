import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getUsersThunk } from '../../../redux/actions/usersActions';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  let counter = 0;
  console.log('users =>>>', users);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <div className="container my-4 w-75">
      <h1>Рейтинг</h1>
      <Table
        striped
      >
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Имя
            </th>
            <th>
              Комментарии
            </th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line no-return-assign */}
          {users?.map((user) => (
            <tr key={user.id}>
              <th scope="row">
                {counter += 1}
              </th>
              <td>
                <Link to={`${user.id}`}>
                  {user.name}
                  {' '}
                  {user.surname}
                </Link>
              </td>
              <td>
                {user.CVComms.length}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
