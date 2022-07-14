import { GET_USER_ACCOUNT_INFO } from '../types/accountTypes';

const userReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_ACCOUNT_INFO:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
