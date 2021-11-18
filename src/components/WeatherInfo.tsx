import React, { useEffect, useState } from 'react'
import { Interface } from 'readline';

type WeatherProps = {
    dataWeather: any
}

const WeatherInfo = ({dataWeather}: WeatherProps) => {
    const [time, setTime] = useState(getDateNow(dataWeather));
    function getDateNow(weatherData: WeatherProps) {
      return new Date(Date.now() - (18000 - weatherData.timezone) * 1000)
        .toLocaleTimeString;
    }
    
 useEffect(() => {
     let interval = setInterval(() => {
         setTime(getDateNow(dataWeather));
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    });
    
    
  return (
    <div>
      <div className="time">
        <ul>
          <li>{new Date (Date.now() - (18000 - dataWeather.sunrise) * 1000).toLocaleTimeString}</li>
        </ul>
      </div>
      <main>
        <div className="cityName">
          <div className="city">
            <h2>{dataWeather?.sys.country}</h2>
            <h3>{dataWeather?.name}</h3>
          </div>
        </div>
        <div className="weatherInfo">
          <h2>{Math.round(dataWeather ? dataWeather.main.temp : 0)}℃</h2>

          <table>
            <tr>
              <td>Humidity</td>
              <td>{dataWeather?.main.humidity}%</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{Math.round(dataWeather ? dataWeather.wind.speed : 0)}m/s</td>
            </tr>
            <tr>
              <td>Visibility</td>
              <td>
                {Math.trunc(dataWeather ? dataWeather?.visibility / 1000 : 0)}km
              </td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>
                {new Date(
                  dataWeather ? dataWeather.sys.sunrise * 1000 : 0
                ).toLocaleTimeString()}
              </td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>
                {new Date(
                  dataWeather ? dataWeather.sys.sunset * 1000 : 0
                ).toLocaleTimeString()}
              </td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}

export default WeatherInfo
