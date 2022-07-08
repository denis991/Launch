import { DELETE_USER, SET_USER } from '../types/userTypes';
import * as endPoint from '../../config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUserFormServer = (id) => async (dispatch) => {
  dispatch(enableLoader);
  const response = await fetch(endPoint.getUser(id), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};

export const signUp = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoint.singUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/');
  } else {
    navigate('/signup');
  }
  dispatch(disableLoader());
};

export const signIn = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoint.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/');
  } else {
    navigate('/signin');
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const singOut = () => async (dispatch) => {
  const response = await fetch(endPoint.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoint.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};
