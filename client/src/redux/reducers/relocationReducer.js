import
GET_RELOCATION from '../types/relocationTypes';

const relocationReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RELOCATION:
      return payload;
    default:
      return state;
  }
};
export default relocationReducer;
