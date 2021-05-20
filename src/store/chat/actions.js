//constants
export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DEL_CHAT = 'CHAT::DEL_CHAT';
export const READ_CHAT = 'CHAT::READ_CHAT';

//actions
export const addChat = () => ({
  type: ADD_CHAT,
});

export const delChat = (newChat) => ({
  type: DEL_CHAT,
  payload: newChat,
});

export const readChat = (chatState) => ({
  type: READ_CHAT,
  payload: chatState,
});

export const readChatWithThunk = (chatState) => (
  dispatch,
) => {
  setTimeout(() => {
    dispatch(readChat(chatState));
  }, 3000);
}