import { ADD_CV } from '../types/cvsTypes';

export const addCV = () => ({ type: ADD_CV });

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
