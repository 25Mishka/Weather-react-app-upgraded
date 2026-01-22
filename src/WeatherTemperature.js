import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!props.coordinates) return;

    setLoaded(false);

    const apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.long;

    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [props.coordinates]);

  if (!loaded) {
    return null; // or "Loading forecast..."
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            {new Date(forecast[0].dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </div>

          <WeatherIcon code="broken-clouds-day" size={36} />

          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">
              {Math.round(forecast[0].temp.max)}°
            </span>
            <span className="WeatherForecast-temperature-min">
              {Math.round(forecast[0].temp.min)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
