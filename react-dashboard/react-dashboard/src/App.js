import React from "react";
import Quote from "./components/Quote";
import Weather from "./components/weather/Weather";
import Timer from "./components/Timer";
import NewPicture from './iths.jpg';


import "./App.css";

function App() {
  return (
    <div className="App">
      
        <div className="header">
        <img src={NewPicture} className="iths" alt="iths" />
          <h1>IT-högskolan</h1>
        
      </div>
      <div className="allComp">
        <Weather />
        <Quote />
        <Timer />
      </div>
    </div>
  );
}

export default App;