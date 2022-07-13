import { GET_CVS } from '../types/cvsTypes';

export const getCVs = (data) => ({ type: GET_CVS, payload: data });

export const getCVsThunk = () => async (dispatch) => {
  const response = await fetch('/cvs');
  const data = await response.json();
  if (response.ok) {
    dispatch(getCVs(data));
  }
};
