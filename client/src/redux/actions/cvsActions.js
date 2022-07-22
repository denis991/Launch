import { DELETE_CV, GET_CVS } from '../types/cvsTypes';

export const getCVs = (data) => ({ type: GET_CVS, payload: data });
export const deleteCV = (id) => ({ type: DELETE_CV, payload: id });

export const getCVsThunk = () => async (dispatch) => {
  const response = await fetch('/cvs');
  const data = await response.json();
  if (response.ok) {
    dispatch(getCVs(data));
  }
};

export const deleteCVThunk = (id) => async (dispatch) => {
  const response = await fetch('/cvs', {
    method: 'delete',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(id),
  });
  if (response.ok) {
    dispatch(deleteCV(id));
  }
};
