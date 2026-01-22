import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return `${Math.round(props.forecast.temp.max)}°`;
  }

  function minTemperature() {
    return `${Math.round(props.forecast.temp.min)}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>

      <WeatherIcon code={props.forecast.weather[0].icon} size={36} />

      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
