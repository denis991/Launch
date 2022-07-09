import { GET_USER_ID } from '../constants/constants';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_ID:
      return { ...state, userId: payload };
    default:
      return state;
  }
};
