import { GET_USER } from '../types/userTypes';

const userReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      console.log('payload USER', payload);
      return payload;
    default:
      return state;
  }
};

export default userReducer;
