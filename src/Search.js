import React, { useState } from "react";
import "./Search.css";
import Description from "./Description";
import Forecast from "./Forecast";
 import Loader from 'react-loader-spinner'

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });


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
      <Description />
      <br />
      <Forecast />
    </div>
   );
 } else {
   return (
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}
      />
     );;
   }
}
