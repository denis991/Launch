import { GET_ALL_USERS, GET_USER } from '../types/userTypes';

export const getUsers = (data) => ({ type: GET_ALL_USERS, payload: data });
export const getUser = (data) => ({ type: GET_USER, payload: data });

export const getUsersThunk = () => async (dispatch) => {
  const response = await fetch('/users');
  const data = await response.json();
  if (response.ok) {
    dispatch(getUsers(data));
  }
};

export const getUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`/users/${id}`);
  const data = await response.json();
  if (response.ok) {
    dispatch(getUser(data));
  }
};
