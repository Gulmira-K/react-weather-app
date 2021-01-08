import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function displayWeather(response) {
    let conditions = {
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
      let apiKey = "3d2ad3624a972543a23fa163db444044";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(displayWeather);
    }
    
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <div className="col" id="search-form">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                id="city-input"
                onChange={updateCity}
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
      </div>
    </div>
  );
}
