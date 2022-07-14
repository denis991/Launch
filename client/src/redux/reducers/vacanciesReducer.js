import { GET_VACANCIES_ALL } from '../types/vacancyTypes';

const vacanciesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_VACANCIES_ALL:
      return [...state, payload];
    default:
      return state;
  }
};

export default vacanciesReducer;
