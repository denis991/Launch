import { GET_VACANCIES_ALL } from '../types/vacancyTypes';

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
