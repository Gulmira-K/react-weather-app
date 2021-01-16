import React, { useState } from "react";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if ( loaded && props.city === forecast.city.name ) {
    return (
      <div className="Forecast">
        <div className="row row-cols-5">
          {/* 2 options to build forecast */}
         {/* {forecast.list.slice(0, 4).map(function (forecastItem) { return <ForecastPreview data={forecastItem} />;})} */}
        <ForecastPreview data={forecast.list[0]} unit={props.unit}/>
        <ForecastPreview data={forecast.list[1]} unit={props.unit}/>
        <ForecastPreview data={forecast.list[2]} unit={props.unit}/>
        <ForecastPreview data={forecast.list[3]} unit={props.unit}/>
        <ForecastPreview data={forecast.list[4]} unit={props.unit}/>
        </div>
      </div>
    );
  } else {
    let apiKey = "e78ccf6f31ad51ffa9f2549f7ec140cb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios(apiUrl).then(handleForecastResponse);
    return null;
  } 
 }
