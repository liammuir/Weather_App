import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import Weather from './components/Weather';
import YesterdaysWeather from './components/YesterdaysWeather';
import Weather2001 from './components/Weather2001';

function App() {
  const [page,setPage] = useState("home")
  const [weather,setWeather] = useState({})
  const apiUrl = "https://api.openweathermap.org"
  const apiKey = '9a3bb4172ecc354d6a5c00d4b5ef06d3'
  useEffect( () => {
      if (page === "weather"){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"toronto"}&appid=${apiKey}`).then( res => {
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
      {page === "home" ? <Home page={page} setPage={setPage} /> : <></>}
      {page === "weather" ? <Weather page={page} setPage={setPage} weather={weather} /> : <></>}
      {page === "yesterdayweather" ? <YesterdaysWeather page={page} setPage={setPage}  /> : <></>}
      {page === "2001weather" ? <Weather2001 page={page} setPage={setPage}  /> : <></>}
    </div>
  );
}

export default App;
