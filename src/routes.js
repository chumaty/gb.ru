import React from "react";
import { Profile } from "./components/Profile";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { App } from "./app";

export const Routes = ({ mytext }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <App mytext={mytext} />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/chats/:chatId">
                    <App mytext={mytext} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}