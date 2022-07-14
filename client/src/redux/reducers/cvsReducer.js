import { GET_CVS } from '../types/cvsTypes';

const cvsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CVS:
      return [...state, payload];
    default:
      return state;
  }
};

export default cvsReducer;
