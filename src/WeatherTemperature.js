import React from "react";

export default function WeatherTemperature(props) {
   function displayFahrenheit(event) {
        event.preventDefault();
        props.setUnit("fahrenheit");
    }

    function displayCelsius(event) {
        event.preventDefault();
        props.setUnit("celsius");
    }
    
    function fahrenheit() {
        return Math.round((props.celsius * 9) / 5 + 32);
    }
   
    if (props.unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                {props.celsius}º{" "}C{" "}
              {" "}
              |
                <a href="/" onClick={displayFahrenheit} id="fahrenheit">
                    {" "}
                F
              </a>
            </div>
        )
    } else {
        return (
            <div className="WeatherTemperature">
                {fahrenheit()}º{" "}<a href="/" onClick={displayCelsius} id="celsius">C</a>{" "}
              {" "}
              |{" "}F
             </div>
        )
    }
}