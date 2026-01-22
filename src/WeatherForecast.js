import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (!props.coordinates) return;

    setLoaded(false);

    const apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;

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
        {forecast.slice(0, 5).map((day, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay forecast={day} />
          </div>
        ))}
      </div>
    </div>
  );
}
