import React from "react";
import "./Forecast.css";

export default function ForecastPreview(props) {
    function hours() {
        let hour = new Date(props.data.dt * 1000);
        let hours = hour.getHours();
         if (hours < 10) {
            hours = `0${hours}`
        }
        return `${hours}:00`
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        if (props.unit === "fahrenheit") {
            temperature = Math.round((temperature * 9) / 5 + 32);
        }
         return `${temperature}ºC`
    }
    
    return (
        <div className="col forecast-info">
            <h5>{hours()}</h5>
            <img
                src={`${process.env.PUBLIC_URL}/icons/${props.data.weather[0].icon}.svg`} 
                alt="Weather icon"
                className="forecast-icon"
            />
            <p className="degrees"> {temperature()} </p>
        </div>
    )
}