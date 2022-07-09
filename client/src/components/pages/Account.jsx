import React from 'react';
import { useState } from 'react';

function Account() {
  const [usersAccountId, setUsersAccountId] = useState({});
  const [usetInfo, setUsetInfo] = useState({
    name: 'denis',
    surname: 'guzunov',
    email: 'd.99113@gmail.com',
    avatar: 'https://avatars.mds.yandex.net/get-pdb/18098/b8f8f8c0-f8f8-4f8f-b8f8-f8f8f8f8f8f8f/s1200?webp=false',
  });
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
}

export default Account;
