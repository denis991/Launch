import { ADD_VACANCY } from '../types/vacancyTypes';

const vacancyReducer = (state = false, action) => {
  switch (action.type) {
    case ADD_VACANCY:
      return true;
    default:
      return state;
  }
};

export default vacancyReducer;
