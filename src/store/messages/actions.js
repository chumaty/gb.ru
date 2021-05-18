//constants
export const ADD_MESSAGE = 'CHAT:ADD_MESSAGE';

//actions
export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
})