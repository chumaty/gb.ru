//system
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//custom
import { store, persistor } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
        <Routes mytext="- Update: " />
        </PersistGate>
    </Provider>,
    document.getElementById("app"));