import React from "react";
import "./Description.css";

export default function Description() {
  let weatherData = {
    city: "BARCELONA",
    description: "CLOUDY",
    date: "Friday 18 Dec",
    hour: "08:12"
  };

  return (
    <div className="Description">
      <section className="header">
        <h1>
          <span id="current-city">
            {" "}
            IT IS {weatherData.description} IN
            <br />
            {weatherData.city}{" "}
          </span>
        </h1>
      </section>
      <div className="row">
        <div className="col-6  float-left current-date">
          <h2 id="date">{weatherData.date}</h2>
          <h2 id="hour">{weatherData.hour}</h2>
        </div>
        <div className="col-6 float-right">
          <div className="clearfix">
            <img
              src="https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-sun-behind-small-cloud-72dpi-forPersonalUseOnly.gif"
              alt="Weather icon"
              id="icon"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6 float-left">
          <ul className="current-weather">
            <li id="current-temp">
              14º{" "}
              <a href="/" id="celsius">
                {" "}
                C{" "}
              </a>{" "}
              |
              <a href="/" id="fahrenheit">
                {" "}
                F
              </a>
            </li>
            <li>
              Max: <span id="max-temp">15</span>ºC
            </li>
            <li>
              Min: <span id="min-temp">11</span>ºC
            </li>
          </ul>
        </div>
        <div className="col-6 float-right">
          <ul className="current-condition">
            <li>
              Feels like: <span id="feels-temp">13</span>ºC
            </li>
            <li>
              Humidity: <span id="humidity">40</span>%
            </li>
            <li>
              Wind: <span id="wind">5</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
