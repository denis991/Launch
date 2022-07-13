import { GET_ALL_USERS, GET_USER } from '../types/userTypes';

const userReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return payload;
    case GET_USER:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
