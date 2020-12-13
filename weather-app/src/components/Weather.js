import React from 'react';

const Weather = ({page,setPage,weather}) => {
    let isnoweather = weather === 0 || weather.config.url.search("data/2.5/weather") === -1
    
    const temp = () => {
        if (isnoweather === false){
            console.log(weather)
            return (Number(weather.data.main.temp) - 273.15).toFixed(2)
        }
    }

    return (
        <div className="weatherPage">
            <div className="todaysWeather">
                <h2>Today's Weather</h2>
                <p>Temperature: {temp()} C</p>
                <p>Weather: {isnoweather ? <></> : weather.data.weather.map((r) => r.description + " ")}</p>
                <p>Cloudiness: {isnoweather ? <></> : weather.data.clouds.all}%</p>
            </div>
        </div>
    )
}

export default Weather;