import { ADD_VACANCY, GET_VACANCIES, GET_VACANCIES_ALL } from '../types/vacancyTypes';

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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/`);
  if (response.ok) {
    const data = await response.json();
    // console.log(data, 'data<_____');
    dispatch(getVacanciesAll(data));
  }
};
