//system
import React, { useState } from "react";
import { MessageField3 } from "./components/MessageField";
import { Container } from '@material-ui/core';
// console.info('Render app');

export const App = (props) => {
    return (
        <>
            <Container fixed>
                <MessageField3/>
            </Container>
        </>
    );
}