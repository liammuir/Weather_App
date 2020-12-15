import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import YesterdaysWeather from './components/YesterdaysWeather';
import WeatherBrazil from './components/WeatherBrazil';

function App() {
  const [page,setPage] = useState("weather")
  const [weather,setWeather] = useState(0)
  const apiUrl = "https://api.openweathermap.org"
  const apiKey = '9a3bb4172ecc354d6a5c00d4b5ef06d3'
  useEffect( () => {
      setWeather(0)
      console.log(page)
      if (page === "weather"){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"toronto"}&appid=${apiKey}`).then( res => {
          console.log(res)
          setWeather(res)
        })
      }
      if (page === "yesterdayweather"){
        console.log(Math.floor((Date.now()/1000)) - 86400)
        axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${43.6}&lon=${79.3}&dt=${Math.floor((Date.now()/1000)) - 86400}&appid=${apiKey}`).then( res => {
          console.log(res)
          setWeather(res)
        })
      }
  },[page])
  return (
    <div className="App">
      	<header>
        	<h1>Liams WeatherGetter&trade;</h1>
      	</header>
	 	    <button onClick={() => {setPage("weather")}} className="link">Todays Weather</button>
        <button onClick={() => {setPage("yesterdayweather")}} className="link">Yesterdays Weather</button>
    	  <button onClick={() => {setPage("weatherbrazil")}} className="link">Weather on 2001, Oct 2.</button>
      	{page === "weather" ? <Weather page={page} setPage={setPage} weather={weather} /> : <></>}
      	{page === "yesterdayweather" ? <YesterdaysWeather page={page} setPage={setPage} weather={weather}  /> : <></>}
      	{page === "weatherbrazil" ? <WeatherBrazil page={page} setPage={setPage} weather={weather}  /> : <></>}
    </div>
  );
}

export default App;
