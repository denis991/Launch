import initState from '../initState';
import {NEW_MESSAGE} from '../types/chatTypes';

export default (state = initState.chat, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return [...state, action.payload]
    default:
      return state;
  }
};
