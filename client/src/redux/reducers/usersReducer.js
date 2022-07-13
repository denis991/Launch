import { GET_ALL_USERS } from '../types/userTypes';

const usersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      console.log('payload USERS', payload);
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
