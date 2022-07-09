import { GET_USER_ID, GET_USER_ID_SUCCESS } from '../constants/constants';

export const getUserId = (userId) => ({ type: GET_USER_ID, payload: userId });
// \/test
export const getUserIdSuccess = (userId) => ({ type: GET_USER_ID_SUCCESS, payload: userId });
