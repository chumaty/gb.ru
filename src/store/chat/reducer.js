//custom
import { ADD_CHAT, DEL_CHAT} from "./actions";
import { getColor, getName } from "../../helpers/Functions"

const initialState = {
    chatList: {
        chat1: {
            avatar: "H",
            classname: "orange",
            name: "Harrison Smith"
        },
        chat2: {
            avatar: "E",
            classname: "indigo",
            name: "Emma Watson"
        },
        chat3: {
            avatar: "J",
            classname: "fuchsia",
            name: "Jasica Alba"
        },
    }
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const nexId = `chat${Object.keys(state.chatList).length + 1}`;
            const avaName = getName();
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    [nexId]: {
                        avatar: avaName[1],
                        classname: getColor(),
                        name: avaName[0]
                    }
                },
            };
        }
        case DEL_CHAT: {
            return {
                chatList:action.payload
            }
        }
        default:
            return state;
    }
}