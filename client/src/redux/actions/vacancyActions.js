import { ADD_VACANCY } from '../types/vacancyTypes';

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
