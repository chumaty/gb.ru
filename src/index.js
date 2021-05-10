import React, { useState } from "react";
import ReactDOM from "react-dom";
import {MessageField} from "./components/MessageField";
import {MessageField3} from "./components/MessageField3";
import {Container} from '@material-ui/core';
// console.info('Render app');

const App = (props) => {
    const [arr, setArr] = useState([new Date().toLocaleTimeString()]);

    const buttonClick = () => {
        setArr([...arr, new Date().toLocaleTimeString()]);
    }

    return (
        <>
            <div>
                <h2>#Lesson 1 - Render ReactJS {props.mytext} {arr[arr.length - 1]}</h2>
                <button onClick={buttonClick}>Click</button>
            </div>

            <div>
                <h2>#Lesson 2 - Messenger</h2>
                <MessageField />
            </div>

            <Container fixed>
                <MessageField3 />
            </Container>            
        </>
    );
}

ReactDOM.render(<App mytext="- Update: " />, document.getElementById("app"));