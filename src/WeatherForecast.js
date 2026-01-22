import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);  
 // if coordinates change, reset loaded to false to fetch new data
 

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
   
  }

  function loadForecast(loaded) {
    
    let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
    let longitude = props.coordinates.long;
    let latitude = props.coordinates.lat;
    

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    Axios.get(apiUrl).then(handleResponse);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day"> Thu</div>
            <WeatherIcon code="broken-clouds-day" size={36} />

            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19</span>
              <span className="WeatherForecast-temperature-min">10</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    funcation(loaded);
    return null;
  }
  }
}

