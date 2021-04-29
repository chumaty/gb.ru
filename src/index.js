import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
console.info('Start');

// class App extends React.Component {
//     render() {
//         return (<h1>Render ReactJS</h1>);
//       }
// }

const App = (props) => {
    const [arr, setArr] = useState([]);

    const ButtonClick = () => {
        setArr([...arr,new Date().toLocaleTimeString()]);
        // console.log(arr);
    }
    
    const arrItems = arr.map((arr) =>
        <p>{arr}</p>
    );

    return (
        <div>
            <h1>Render ReactJS {props.mytext} {arr[arr.length - 1]}</h1>
            <button onClick={ButtonClick}>Click</button>
            <div>{arrItems}</div>
        </div>
    );
}

ReactDOM.render(<App name="app" mytext="+"/>, document.getElementById("app"));