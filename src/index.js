import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
console.info('Start');

const App = (props) => {
    const [arr, setArr] = useState([]);

    const buttonClick = () => {
        setArr([...arr,new Date().toLocaleTimeString()]);
        console.log(arr);
    }
    
    const arrItems = arr.map((arr) =>
        <p>{arr}</p>
    );

    return (
        <div>
            <h1>Render ReactJS {props.mytext} {arr[arr.length - 1]}</h1>
            <button onClick={buttonClick}>Click</button>
            <div>{arrItems}</div>
        </div>
    );
}

ReactDOM.render(<App mytext="+"/>, document.getElementById("app"));