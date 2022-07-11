import { ADD_CV, GET_CVS, GET_USER_CV } from '../types/cvsTypes';

const cvsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CV:
      return true;
    case GET_CVS:
      return [...state, payload];
    case GET_USER_CV:
      return [payload];
    default:
      return state;
  }
};

export default cvsReducer;
