import { ADD_CV, GET_CVS } from '../types/cvsTypes';

export const getCVs = (data) => ({ type: GET_CVS, payload: data });
export const addCV = () => ({ type: ADD_CV });

export const getCVsThunk = () => async (dispatch) => {
  const response = await fetch('/cvs');
  const data = await response.json();
  if (response.ok) {
    dispatch(getCVs(data));
  }
};

export const addCVThunk = (data) => async (dispatch) => {
  const response = await fetch(
    '/account/cvs/new',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  if (response.ok) {
    dispatch(addCV());
  }
};
