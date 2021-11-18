import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";

interface WeatherProps { }
  // weather: object;
  // name: string;
  // timezone: number;
  // main: {
  //   temp: number;
  //   feels_like: number;
  //   humidity: number;
  // };
  // visibility: number;
  // wind: {
  //   speed: number;
  // };
  // sys: {
  //   country: string;
  //   sunrise: number;
  //   sunset: number;
  // };


const App = () => {
  const [data, setData] = useState<WeatherProps>();
  const [value, setInput] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target?.value);
  };


  
  const handleClick = () => {
    axios
      .get<WeatherProps>(
        `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=e7c2dfdd5832f931ae161417a1a30a8b`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
   
  };

  return (
    <div className="container">
      <div className="content">
        <header>
          <input
            type="text"
            placeholder="Country"
            value={value}
            onChange={handleChange}
            ref={input}
          />
          <button onClick={() => handleClick()}>Submit</button>
         
        </header>
        <WeatherInfo dataWeather={data }/>
      
      </div>
    </div>
  );
};
export default App;

{
  /* <WeatherInfo timezone={timezone} name={name} main={main {
temp={temp}
feels_like={feels_like}
humidity={humidity}
}};
visibility= {visibility}
wind={wind  {
speed={speed}
}}
sys={sys {
country={country}
sunrise={sunrise}
sunset={sunset}
}}/> */
}
