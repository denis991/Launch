import { ADD_VACANCY, GET_VACANCIES } from '../types/vacancyTypes';

const vacancyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_VACANCY:
      return true;
    case GET_VACANCIES:
      return action.payload;
    default:
      return state;
  }
};

export default vacancyReducer;
