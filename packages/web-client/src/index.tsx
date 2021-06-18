
import React from "react";
import ReactDOM from "react-dom";
import App from './App';

let luckNum = Math.random();

const rootElement = document.getElementById('root');
ReactDOM.render(<App num={luckNum} />,rootElement);
