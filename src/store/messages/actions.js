//constants
export const ADD_MESSAGE = 'CHAT:ADD_MESSAGE';
export const DEL_MESSAGE = 'CHAT:DEL_MESSAGE';

//actions
export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
})

export const addMessageWithThunk = (newMessage) => (
  dispatch,
) => {
  // будет аля ответ от робота
  // задержка при появлении сообщения в чате, чтобы добавить эффект уведомления при переключении чатов о новом сообщении
  setTimeout(() => {
    dispatch(addMessage(newMessage));
  }, 2000);
}

export const delMessage = (newObj) => ({
  type: DEL_MESSAGE,
  payload: newObj,
})

export const delMessageWithThunk = (newObj) => (
  dispatch,
) => {
  setTimeout(() => {
    dispatch(delMessage(newObj));
  }, 200);
}