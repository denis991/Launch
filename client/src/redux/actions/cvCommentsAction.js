import { ADD_CV_COMMENT } from '../types/cvComenntsTypes';

export const addCVComment = () => ({ type: ADD_CV_COMMENT });

export const addCVCommentThunk = (data) => async (dispatch) => {
  const { form, cvId } = data;
  const response = await fetch(
    `/comments/${cvId}`,
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    },
  );

  if (response.ok) {
    dispatch(addCVComment());
  }
};
