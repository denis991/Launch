import { GET_SKILLS } from '../constants/constants';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SKILLS:
      return payload;
    default:
      return state;
  }
};
