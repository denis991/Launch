import { DELETE_CV, GET_CVS } from '../types/cvsTypes';

const cvsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CVS:
      return [...state, payload];
    case DELETE_CV:
      return state.filter((el) => payload.id !== el.id);

    default:
      return state;
  }
};

export default cvsReducer;
