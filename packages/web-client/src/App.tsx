
import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

type AppProps = { num: number };

// const App: React.FC = () => {return()};

const App = ({num} : AppProps) => {
  return(
    <div className="App">
    <h1> Hello this is Sujay Kundu ! </h1>
    <span className="feelingLucky"> Lucky Number: {num} </span>
  </div>
  )
}

export default hot(module)(App);
