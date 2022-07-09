import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const { users } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (users) {
      navigate('/');
    }
  }, []);

  console.log(users);

  return <div>{children}</div>;
}

export default AuthRoute;
