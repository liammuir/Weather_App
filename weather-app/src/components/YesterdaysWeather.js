import React from 'react';

const YesterdaysWeather = ({page,setPage,weather}) => {
    let isnoweather = weather === 0 || weather.config.url.search("data/2.5/onecall") === -1
    const temp = () => {
        if (isnoweather === false){
            console.log(weather)
            return (Number(weather.data.current.temp) - 273.15).toFixed(2)
        }
    }

    return (
        <div className="weatherPage">
            <div className="todaysWeather">
                <h2>Yesterdays Weather I Guess?</h2>
                <p>Temperature: {temp()} C</p>
                <p>Weather: {isnoweather ? <></> : weather.data.current.weather.map((r) => r.description + " ")}</p>
                <p>Cloudiness: {isnoweather ? <></> : weather.data.current.clouds}%</p>
            </div>
        </div>
    )
}

export default YesterdaysWeather;