//constants
export const ADD_MESSAGE = 'CHAT:ADD_MESSAGE';

//actions
export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
})

export const addMessageWithThunk = (newMessage) => (
  dispatch,
) => {
  // будет аля ответ от робота
  // задержка при появлении сообщения в чате, чтобы добавить эффект мигания
  setTimeout(() => {
    dispatch(addMessage(newMessage));
  }, 3000);
}