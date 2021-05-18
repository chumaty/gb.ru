//constants
export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DEL_CHAT = 'CHAT::DEL_CHAT';

//actions
export const addChat = () => ({
  type: ADD_CHAT,
});

export const delChat = (newChat) => ({
  type: DEL_CHAT,
  payload: newChat,
});