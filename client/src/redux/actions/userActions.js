import { GET_USER } from '../types/userTypes';

export const getUser = (data) => ({ type: GET_USER, payload: data });

export const getUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`/users/${id}`);
  const data = await response.json();
  console.log('=>>>>>response', data);
  if (response.ok) {
    dispatch(getUser(data));
  }
};
