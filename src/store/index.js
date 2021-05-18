//system
import { combineReducers, createStore } from "redux";
//custom
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chat/reducer";
import { messagesReducer } from "./messages/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)