import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (users) {
  //     console.log(users);
  //     navigate('/');
  //   }
  // }, []);

  return <div>{children}</div>;
}

export default AuthRoute;
