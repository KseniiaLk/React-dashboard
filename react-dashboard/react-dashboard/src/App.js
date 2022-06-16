
import React from "react";
import Quote from "./components/quote/Quote";
import Weather from "./components/weather/Weather";
import Timer from "./components/timer/Timer";


import "./App.css";

function App() {
  return (
    <div className="App">
      
        <div className="header">
          <h1>Welcome!</h1>
        
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