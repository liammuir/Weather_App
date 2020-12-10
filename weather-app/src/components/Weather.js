import React from 'react';

const Weather = ({page,setPage,weather}) => {

    const buttonHandler = (a) => {
        setPage("home")
    }
    const temp = () => {
        if (typeof(weather) !== 'undefined'){
            return (Number(weather.data.main.temp) - 273.15).toFixed(2)
        }
    }

    return (
        <div className="weatherPage">
            <button className="link" onClick={buttonHandler}>Back to Home</button>
            <div className="todaysWeather">
                <h2>Today's Weather</h2>
                <p>Temperature: {temp()} C</p>
                <p>Weather: {weather.data.weather[0].description}</p>
                <p>Cloudiness: {weather.data.clouds.all}%</p>
            </div>
        </div>
    )
}

export default Weather;