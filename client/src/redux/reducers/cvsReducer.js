import { ADD_CV } from '../types/cvsTypes';

const cvsReducer = (state = false, action) => {
  switch (action.type) {
    case ADD_CV:
      return true;
    default:
      return state;
  }
};

export default cvsReducer;
