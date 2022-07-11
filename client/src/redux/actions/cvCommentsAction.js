import { ADD_CV_COMMENT, GET_CV_COMMENT } from '../types/cvComenntsTypes';

export const addCVComment = (data) => ({ type: ADD_CV_COMMENT, payload: data });
export const getCVComment = (data) => ({ type: GET_CV_COMMENT, payload: data });

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
    const { body } = form;
    const userData = await response.json();
    const { idComms, name } = userData;
    dispatch(addCVComment({
      cvId, body, id: idComms, name
    }));
  }
};

export const getCVCommentThunk = (cvId) => async (dispatch) => {
  const response = await fetch(`/comments/${cvId}`);
  const data = await response.json();

  if (response.ok) {
    dispatch(getCVComment(data));
  }
};
