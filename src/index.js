import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";

console.info('Start');

// class App extends React.Component {
//     render() {
//         return (<h1>Render ReactJS</h1>);
//       }
// }

const App = (props) => {
    const ButtonClick = () => {
        console.info('ButtonClick');
        setCount(count + 1);
        console.info(count);
    }

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Render ReactJS {props.mytext} {count}</h1>
            <button onClick={ButtonClick}>Click</button>
        </div>
    );
}

ReactDOM.render(<App name="app" mytext="+"/>, document.getElementById("app"));