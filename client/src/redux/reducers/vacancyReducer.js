import {
  ADD_VACANCY, GET_VACANCIES, GET_VACANCIES_ALL, GET_VACANCIES_FILTER
} from '../types/vacancyTypes';

const vacancyReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (action.type) {
    case ADD_VACANCY:
      return true;
    case GET_VACANCIES:
      return action.payload;
    case GET_VACANCIES_ALL:
      console.log(action.payload);
      return [...state, action.payload];
    case GET_VACANCIES_FILTER:
      return {
        ...state,
      };
      // return {
    //   ...state,
    //   jokes: payload.favorite.map(e => {
    //     return {
    //       ...e,
    //       id: Math.random().toString(36).substring(7) + Date.now(),
    //     };
    //   }),
    // };
    default:
      return state;
  }
};

export default vacancyReducer;
