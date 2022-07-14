import
GET_RELOCATION from '../types/relocationTypes';

const getRelocationThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/relocation`);

  if (response.ok) {
    const result = await response.json();
    dispatch({ type: GET_RELOCATION, payload: result });
  }
};

export default getRelocationThunk;
