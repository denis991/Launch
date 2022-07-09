import { ADD_VACANCY, GET_VACANCIES } from '../types/vacancyTypes';

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
export const getVacancies = (data) => ({ type: 'GET_VACANCIES', data });
export const getVacanciesThunk = () => async (dispatch) => {
  const response = await fetch('/account/vacancies');

  if (response.ok) {
    const data = await response.json();
    dispatch(getVacancies(data));
  }
};
