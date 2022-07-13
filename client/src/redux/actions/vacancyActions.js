import {
  ADD_VACANCY, GET_USER_VACANCY, GET_VACANCIES, GET_VACANCIES_ALL, GET_VACANCIES_FILTER
} from '../types/vacancyTypes';

export const getUserVacancy = (data) => ({ type: GET_USER_VACANCY, payload: data });
export const getUserVacancyThunk = (id) => async (dispatch) => {
  const response = await fetch(`/vacancies/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getUserVacancy(data));
  }
};

export const addVacancy = () => ({ type: ADD_VACANCY });
export const addVacancyThunk = (data) => async (dispatch) => {
  const response = await fetch(
    '/account/vacancies/new',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  if (response.ok) {
    dispatch(addVacancy());
  }
};

export const getVacancies = (data) => ({ type: 'GET_VACANCIES', payload: data });
export const getVacanciesThunk = () => async (dispatch) => {
  const response = await fetch('/account/vacancies');
  if (response.ok) {
    const data = await response.json();
    dispatch(getVacancies(data));
  }
};

export const getVacanciesAll = (data) => ({
  type: GET_VACANCIES_ALL,
  payload: data,
});
export const getVacanciesAllThunk = () => async (dispatch) => {
  // console.log('ENV', process.env);
  // console.log('ENV', process.env.REACT_APP_API_URL);
  const response = await fetch(`${process.env.REACT_APP_API_URL}/`);
  if (response.ok) {
    const data = await response.json();
    // console.log(data, 'data<_____');
    dispatch(getVacanciesAll(data));
  }
};

export const getVacanciesFilter = (data) => ({ type: 'GET_VACANCIES_FILTER', payload: data });
export const getVacanciesFilterThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/`);
  if (response.ok) {
    const data = await response.json();
    // console.log(data, 'data<----');
    dispatch(getVacanciesFilter(data));
  }
};
