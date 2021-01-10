import React from "react";
import "./Description.css";
import FormattedDate from "./FormattedDate";

export default function Description(props) {

    return (
    <div className="Description">
      <section className="header">
        <h1>
          <span id="current-city">
            {" "}
           {props.data.description} IN
            <br />
            {props.data.city}{" "}
          </span>
        </h1>
      </section>
      <div className="row">
        <div className="col-6  float-left current-date">
          <FormattedDate date={props.data.date} />
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
              {props.data.temperature}º{" "}
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
              Max: 15ºC
            </li>
            <li>
              Min: 11ºC
            </li>
          </ul>
        </div>
        <div className="col-6 float-right">
          <ul className="current-condition">
            <li>
              Feels like: {props.data.feelslike}ºC
            </li>
            <li>
              Humidity: {props.data.humidity}%
            </li>
            <li>
              Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
