import React, { useState } from "react";
import "./Weather.css";
import Description from "./Description";
import Forecast from "./Forecast";
import Loader from 'react-loader-spinner';
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      feelslike: Math.round(response.data.main.feels_like),
      maxtemp: Math.round(response.data.main.temp_max),
      mintemp: Math.round(response.data.main.temp_min),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    let unit = "metric";
    let apiKey = "e78ccf6f31ad51ffa9f2549f7ec140cb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }
  
  function defineLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "e78ccf6f31ad51ffa9f2549f7ec140cb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse)
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(defineLocation);
}

 if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="col search-input">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                id="city-input"
                onChange={handleCityInput}
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
              onClick={getPosition}
              >
                <i className="fas fa-map-marker-alt"> </i>
              </button>
            </div>
        </div>
      </form>
      <br />
      <Description data={weatherData} unit={unit} setUnit={setUnit}/>
      <Forecast city={weatherData.city} unit={unit}/>
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
