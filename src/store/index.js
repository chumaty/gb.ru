//system
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
//custom
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chat/reducer";
import { messagesReducer } from "./messages/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: "gbMessenger",
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
    })
);


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);