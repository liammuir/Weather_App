import './App.css';
import {useState} from 'react';
import Home from './components/Home';
import Weather from './components/Weather';
import YesterdaysWeather from './components/YesterdaysWeather';
import Weather2001 from './components/Weather2001';

function App() {
  const [page,setPage] = useState("home")
  return (
    <div className="App">
      <header>
        <h1>Liams WeatherGetter&trade;</h1>
      </header>
      {page === "home" ? <Home page={page} setPage={setPage}/> : <></>}
      {page === "weather" ? <Weather page={page} setPage={setPage}/> : <></>}
      {page === "yesterdayweather" ? <YesterdaysWeather page={page} setPage={setPage}/> : <></>}
      {page === "2001weather" ? <Weather2001 page={page} setPage={setPage}/> : <></>}
    </div>
  );
}

export default App;
