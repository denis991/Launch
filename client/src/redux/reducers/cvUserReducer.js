import { ADD_CV, GET_USER_CV } from '../types/cvsTypes';

const cvUserReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CV:
      return true;
    case GET_USER_CV:
      return payload;
    default:
      return state;
  }
};

export default cvUserReducer;
