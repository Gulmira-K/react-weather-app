import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function displayFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function fahrenheit() {
        return Math.round((props.degree * 9) / 5 + 32);
    }
    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                {props.degree}º{" "}C{" "}
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