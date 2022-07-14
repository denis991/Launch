const { NEW_MESSAGE } = require('../types/chatTypes');

export const addMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message,
});
export const testMassage = () => ({

});
