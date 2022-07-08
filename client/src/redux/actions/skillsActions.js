import { GET_SKILLS } from '../constants/constants';

export const getSkill = (data) => ({
  type: GET_SKILLS,
  payload: data,
});
export const clearFavor = () => ({
  type: 'GET_SKILLS',
});

export const getFavorThunk = () => async (dispatch) => {
  try {
    dispatch(getSkill({}));
    const response = await fetch('/skills');
    if (response.ok) {
      const result = await response.json();
      dispatch(getSkill(result));
    }
  } catch (e) {
    console.log(e);
  }
};
