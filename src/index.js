import React from "react";
import ReactDOM from "react-dom";

console.log('Start');

// class App extends React.Component {
//     render() {
//         return (<h1>Render ReactJS</h1>);
//       }
// }

const App = () => {
    return (<h1>Render ReactJS</h1>);
}

ReactDOM.render(<App name="app"/>, document.getElementById("app"));