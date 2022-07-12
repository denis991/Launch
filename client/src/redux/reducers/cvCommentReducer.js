import { ADD_CV_COMMENT, GET_CV_COMMENT } from '../types/cvComenntsTypes';

const cvCommentReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CV_COMMENT:
      return [...state, payload];
    case GET_CV_COMMENT:
      return payload;
    default:
      return state;
  }
};

export default cvCommentReducer;
