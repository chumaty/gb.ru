//custom
import { ADD_MESSAGE, DEL_MESSAGE } from "./actions";

const initialState = {
    answer: {}
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.answer[action.payload.chatId] !== undefined) {
            return {
                ...state,
                answer:{
                    ...state.answer,
                    [action.payload.chatId]:
                        [
                            ...state.answer[action.payload.chatId],
                            {
                                ...action.payload,
                            }
                        ]
                },
            };
            } else {
                return {
                    ...state,
                    answer:{
                        ...state.answer,
                        [action.payload.chatId]:
                            [
                                {
                                    ...action.payload,
                                }
                            ]
                    },
                };                
            }
        }
        case DEL_MESSAGE: {
            return {
                answer:action.payload
            }
        }
        default:
            return state;
    }
}
