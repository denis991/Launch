import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../../redux/actions/userAction';

import './SignIn.css';

function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/' };
  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(userSignIn, navigate,));
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center bg-light text-dark p-3 border rounded-3"
      >
        <legend className="text-center mb-4">User Sign In</legend>
        <div className="mb-3">
          <input
            onChange={changeHandler}
            value={userSignIn.email}
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={changeHandler}
            value={userSignIn.password}
            className="form-control"
            type="password"
            name="password"
            placeholder="Pass"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
