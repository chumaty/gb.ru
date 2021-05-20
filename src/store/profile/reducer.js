import { CHANGE_AUTHOR } from "./actions";

const initialState = {
    author: 'It\'s my redux name',
}

export const profileReducer = (state = initialState, action) => {
    
    //пока ничего не делаем
    switch(action.type) {
        case CHANGE_AUTHOR: {
            return {
                ...state,
                author: action.author
            }
        }
        default:
            return state;
    }
}