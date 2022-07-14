import axios from 'axios';
import { CHECK_USER, CREATE_USER, LOGOUT_USER } from '../types/userTypes';

export const createUser = (data) => ({ type: CREATE_USER, payload: data });
export const checkUser = (data) => ({ type: CHECK_USER, payload: data });
export const userLogout = () => ({ type: LOGOUT_USER, payload: null });

export const userAuthThunk = (loginToggle, body, navigate) => async (dispatch) => {
  const response = await fetch(loginToggle ? '/signin' : '/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  if (response.status === 200) {
    navigate('/');
    dispatch(checkUser(result));
  } else {
    navigate('/auth');
    alert(result?.message);
  }
};

export const userCheckAuthThunk = (navigate) => async (dispatch) => {
  // const res = await axios.get('http://localhost:3006/auth', { withCredentials: true });
  const res = await fetch('http://localhost:3006/auth', { credentials: 'include', method: 'post' });
  const lol = await res.json();
  dispatch(checkUser(lol));
  // navigate('/');
};

export const userLogoutThunk = () => async (dispatch) => {
  await fetch('/logout');
  dispatch(userLogout());
};
