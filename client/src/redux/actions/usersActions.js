import { GET_ALL_USERS } from '../types/userTypes';

export const getUsers = (data) => ({ type: GET_ALL_USERS, payload: data });

export const getUsersThunk = () => async (dispatch) => {
  const response = await fetch('/users');
  const data = await response.json();
  if (response.ok) {
    dispatch(getUsers(data));
  }
};
