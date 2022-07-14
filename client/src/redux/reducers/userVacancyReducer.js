import {
  ADD_VACANCY, GET_USER_VACANCY, GET_VACANCIES_FILTER
} from '../types/vacancyTypes';

const userVacancyReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_VACANCY:
      return true;
    case GET_USER_VACANCY:
      return payload;
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

export default userVacancyReducer;
