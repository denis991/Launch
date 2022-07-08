import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { singOut } from '../../../../redux/actions/userAction';
import './SignOut.css';

function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(singOut());
    navigate('/');
  }, []);
  return null;
}

export default SignOut;
