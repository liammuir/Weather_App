import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import YesterdaysWeather from './components/YesterdaysWeather';
import Weather2001 from './components/Weather2001';

function App() {
  const [page,setPage] = useState("weather")
  const [weather,setWeather] = useState(0)
  const apiUrl = "https://api.openweathermap.org"
  const apiKey = '9a3bb4172ecc354d6a5c00d4b5ef06d3'
  useEffect( () => {
      console.log(page)
      if (page === "weather"){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"toronto"}&appid=${apiKey}`).then( res => {
          console.log(res)
          setWeather(res)
        })
      }
  },[])
  return (
    <div className="App">
      	<header>
        	<h1>Liams WeatherGetter&trade;</h1>
      	</header>
	 	<button onClick={() => {setPage("weather")}} className="link">Todays Weather</button>
        <button onClick={() => {setPage("yesterdayweather")}} className="link">Yesterdays Weather</button>
    	<button onClick={() => {setPage("2001weather")}} className="link">Weather on 2001, Oct 2.</button>
      	{page === "weather" ? <Weather page={page} setPage={setPage} weather={weather} /> : <></>}
      	{page === "yesterdayweather" ? <YesterdaysWeather page={page} setPage={setPage}  /> : <></>}
      	{page === "2001weather" ? <Weather2001 page={page} setPage={setPage}  /> : <></>}
    </div>
  );
}

export default App;
