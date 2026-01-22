import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{props.forecast[0].dt}</div>
      <WeatherIcon code={props.forecast[0].weather[0].icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {forecast[0].temp.max}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {forecast[0].temp.min}°
        </span>
      </div>
    </div>
  );
}
