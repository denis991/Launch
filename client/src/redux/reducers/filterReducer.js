import
GET_FILTER from '../types/relocationTypes';

const relocationReducer = (state = [], action) => {
  const { type, payload } = action;
  const {
    defaultState, city, langProg, levelVacancies
  } = payload;
  switch (type) {
    case GET_FILTER:
      state = defaultState.filter((el) => {
      })
      return payload;
    default:
      return state;
  }
};
export default relocationReducer;
