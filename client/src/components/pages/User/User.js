import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk } from '../../../redux/actions/userActions';

function User() {
  const dispatch = useDispatch();
  const parseUrl = window.location.href.split('/');
  const id = parseUrl[parseUrl.length - 1];

  useEffect(() => {
    dispatch(getUserThunk(id));
  }, []);

  const user = useSelector((state) => state.statsUser);
  console.log('user =>>>', user);

  return (
    <div className="px-3 py-4 mb-3 bg-light rounded">
      <h1 className="text-center">0</h1>
      <p className="text-center" />
      <div className="d-flex justify-content-center mt-4">
        <div className="d-flex flex-column mx-1 mx-lg-3 text-center">
          <div className="h3 text-black-50">1</div>
          <div className="text-muted">ответов</div>
        </div>
        <div className="d-flex flex-column mx-3 text-center">
          <div className="h3 text-black-50">2</div>
          <div className="text-muted">комментариев</div>
        </div>
        <div className="d-flex flex-column mx-1 mx-lg-3 text-center">
          <div className="h3 text-black-50">3</div>
          <div className="text-muted">лайков</div>
        </div>
      </div>
    </div>
  );
}

export default User;
