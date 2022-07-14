import { ADD_CV_COMMENT, GET_CV_COMMENT } from '../types/cvComenntsTypes';

export const addCVComment = (data) => ({ type: ADD_CV_COMMENT, payload: data });
export const getCVComment = (data) => ({ type: GET_CV_COMMENT, payload: data });

export const addCVCommentThunk = (data) => async (dispatch) => {
  const { form, cvid } = data;
  console.log(cvid);
  const response = await fetch(
    `/comments/${cvid}`,
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
    const {
      idComms, name, createdAt, user_id
    } = userData;

    dispatch(addCVComment({
      cvid,
      body,
      id: idComms,
      User: { name },
      createdAt,
      user_id
    }));
  }
};

export const getCVCommentThunk = (cvid) => async (dispatch) => {
  const response = await fetch(`/comments/${cvid}`);
  const data = await response.json();

  if (response.ok) {
    dispatch(getCVComment(data));
  }
};
