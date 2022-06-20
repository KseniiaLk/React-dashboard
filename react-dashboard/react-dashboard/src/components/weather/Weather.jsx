import React from "react";
import temp from "./sun.png";
function Weather () {
  const [weather, setWeather] = React.useState("");
React.useEffect(() => {
  (async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=59.33&lon=18.07&appid=a2a17c13f56afeb276549a78c5f08a6e`
      );
      const data = await res.json();
      setWeather({
        temp:( ((data.main.temp - 32) / 18).toFixed(0) ) + "°C"
      });
    } catch (err) {
      console.log(err);
    }
  })();
}, []);
  
  return(
    <div className="weather-component">
      <h1>Stokholm</h1>
      <h2>{weather.temp}</h2>
      <img src={temp} alt="weather"/>
      </div>
       );
      };

export default Weather;