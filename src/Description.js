import React from "react";
import "./Description.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
                src={`${process.env.PUBLIC_URL}/icons/${props.data.icon}.svg`} 
                alt="Weather icon"
                id="icon"
            />
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-6 float-left">
          <ul className="current-weather">
              <li id="current-temp">
                <WeatherTemperature
                  unit={props.unit}
                  setUnit={props.setUnit}
                  celsius={props.data.temperature}/>
              
            </li>
            <li>
              Max: {props.data.maxtemp}ºC
            </li>
            <li>
              Min: {props.data.mintemp}ºC
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
