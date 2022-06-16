import React,{ useState, useEffect } from "react";
import "./style.css";

const Weather = () => {
  const [data, setData] = useState({});
  const APIkey = "ee8bb87af9c00d44d9ebce7a6405ec3c";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}`;
  
   
   useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [URL]);
  
    return (
      <div className="app">
        <div className="search">
          <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
  
          placeholder="Location"
          type="text"/>
        </div>
        <div className="container">
        <div className="top">
        <div className="location">
          <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
        </div>
      <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
          <p>Feels like</p>
        </div>
        <div className="humidity">
          <p className='bold'>20%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className='bold'>12 MPH</p>
          <p>Wind speed</p>
        </div>
      </div>
      </div>
      </div>
    );
    };
  export default Weather;