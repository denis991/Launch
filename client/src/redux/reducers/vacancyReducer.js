import { ADD_VACANCY, GET_VACANCIES, GET_VACANCIES_ALL } from '../types/vacancyTypes';

const vacancyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_VACANCY:
      return true;
    case GET_VACANCIES:
      return action.payload;
    case GET_VACANCIES_ALL:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default vacancyReducer;
