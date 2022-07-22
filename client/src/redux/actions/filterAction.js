/* eslint-disable max-len */
import { GET_FILTER } from '../constants/constants';

const getFilter = (defaultState, city, langProg, levelVacancies) => ({
  type: GET_FILTER,
  payload: {
    defaultState, city, langProg, levelVacancies
  }
});

export default getFilter;
