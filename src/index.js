//system
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { Provider } from "react-redux";
//custom
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Routes mytext="- Update: " />
    </Provider>,
    document.getElementById("app"));