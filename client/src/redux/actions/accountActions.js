import { GET_USER_ACCOUNT_INFO } from '../types/accountTypes';

export const getInfoAccountUser = (data) => ({ type: GET_USER_ACCOUNT_INFO, payload: data });

export const getInfoAccountUserThunk = () => async (dispatch) => {
  const response = await fetch('/account');
  const data = await response.json();
  if (response.ok) {
    dispatch(getInfoAccountUser(data));
  }
};
