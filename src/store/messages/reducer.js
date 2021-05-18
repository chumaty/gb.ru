//custom
import { ADD_MESSAGE } from "./actions";

const initialState = {
    answer: {},
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            // console.log(state);
            // console.log(action);
            return {
                answer: action.payload
            }
        }
        default:
            return state;
    }
}
