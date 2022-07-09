import React from 'react';
import { useState } from 'react';

function Account() {
  const [usersAccountId, setUsersAccountId] = useState({});
  const [usetInfo, setUsetInfo] = useState({
    name: 'denis',
    surname: 'guzunov',
    email: 'd.99113@gmail.com',
    avatar: 'https://avatars.mds.yandex.net/get-pdb/18098/b8f8f8c0-f8f8-4f8f-b8f8-f8f8f8f8f8f8f/s1200?webp=false',
    answers: '10',
    comments: '13',
    liks: '15',
  });
  return (
    <div>

      <h1 className="text-center">Account</h1>
      <div className="px-3 py-4 mb-3 bg-light rounded">
        <h1 className="text-center">{usetInfo.name}</h1>
        <p className="text-center" />
        <div className="d-flex justify-content-center mt-4">
          <div className="d-flex flex-column mx-1 mx-lg-3 text-center">
            <div className="h3 text-black-50">{usetInfo.answers}</div>
            <div className="text-muted">ответов</div>
          </div>
          <div className="d-flex flex-column mx-3 text-center">
            <div className="h3 text-black-50">{usetInfo.comments }</div>
            <div className="text-muted">комментариев</div>
          </div>
          <div className="d-flex flex-column mx-1 mx-lg-3 text-center">
            <div className="h3 text-black-50">{usetInfo.liks }</div>
            <div className="text-muted">лайков</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
