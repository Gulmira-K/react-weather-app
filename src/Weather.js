import React, { useState } from "react";
import "./Weather.css";
import Description from "./Description";
import Forecast from "./Forecast";
import Loader from 'react-loader-spinner';
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const city = "Barcelona";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feelslike: Math.round(response.data.main.feels_like),
      maxtemp: Math.round(response.data.main.temp_max),
      mintemp: Math.round(response.data.main.temp_min),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "e78ccf6f31ad51ffa9f2549f7ec140cb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

 if (weatherData.ready) {
  return (
    <div className="Search">
      <form className="search-form">
        <div className="form-row">
            <div className="col search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                id="city-input"
              />
            </div>
            <div className="col" id="search-btn">
              <input
                type="submit"
                className="btn btn-secondary"
                value="Search"
              />
            </div>
            <div className="col" id="map-marker">
              <button
                className="btn btn-secondary map-marker"
                id="location-btn"
              >
                <i className="fas fa-map-marker-alt"> </i>
              </button>
            </div>
        </div>
      </form>
      <br />
      <Description data={weatherData}/>
      <br />
      <Forecast />
    </div>
   );
 } else {
   search();
   return (
      <Loader
         type="Puff"
         color="#5A6268"
         height={100}
         width={100}
         timeout={3000}
      />
     );
   }
}
