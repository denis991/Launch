import { DELETE_USER, SET_USER } from '../types/userTypes';
import * as endPoint from '../../config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUp = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoint.signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/signin');
  } else {
    navigate('/signup');
  }
  dispatch(disableLoader());
};

export const signIn = (payload, navigate) => async (dispatch) => {
  console.log(payload);
  dispatch(enableLoader());
  const response = await fetch(endPoint.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoint.signOut(), {
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
