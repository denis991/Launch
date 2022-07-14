import { GET_USER } from '../types/userTypes';

const userReducer = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
