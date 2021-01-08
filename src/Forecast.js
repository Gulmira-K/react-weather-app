import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row row-cols-5">
        <div className="col forecast-info">
          <h5 id="day-one">09:00</h5>

          <img
            src="https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-cloud-72dpi-forPersonalUseOnly.gif"
            alt="Cloudy"
            className="forecast-icon"
          />
          <p className="degrees">16ºC</p>
        </div>
        <div className="col  forecast-info">
          <h5 id="day-two">12:00</h5>
          <img
            src="https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-cloud-72dpi-forPersonalUseOnly.gif"
            alt="Cloudy"
            className="forecast-icon"
          />
          <p className="degrees">17ºC</p>
        </div>
        <div className="col  forecast-info">
          <h5 id="day-three">15:00</h5>

          <img
            src="https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-cloud-with-rain-72dpi-forPersonalUseOnly.gif"
            alt="Rainy"
            className="forecast-icon"
          />
          <p className="degrees">13ºC</p>
        </div>
        <div className="col  forecast-info">
          <h5 id="day-four">18:00</h5>

          <img
            src="https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-sun-behind-small-cloud-72dpi-forPersonalUseOnly.gif"
            alt="Mainly Cloudy"
            className="forecast-icon"
          />
          <p className="degrees">11ºC</p>
        </div>
        <div className="col  forecast-info">
          <h5 id="day-five">21:00</h5>

          <img
            src="https://www.emoji.com/wp-content/uploads/filebase/3d%20icons/emoji-3d%20icons-glossy-3d-icons-sun-behind-small-cloud-72dpi-forPersonalUseOnly.gif"
            alt="Mainly Cloudy"
            className="forecast-icon"
          />
          <p className="degrees">12ºC</p>
        </div>
      </div>
    </div>
  );
}
