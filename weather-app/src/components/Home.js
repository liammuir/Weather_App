import React from 'react';

const Home = ({page,setPage}) => {
    
    const weatherHandler = (a) => {
        setPage("weather")
    }
    const yesterWeatherHandler = (a) => {
        setPage("yesterdayweather")
    }
    const weather2001Handler = (a) => {
        setPage("2001weather")
    }
    return (
        <div className="homePage">
            <div className="links">
                <button onClick={weatherHandler} className="link">Todays Weather</button>
                <button onClick={yesterWeatherHandler} className="link">Yesterdays Weather</button>
                <button onClick={weather2001Handler} className="link">Weather on 2001, Oct 2.</button>
            </div>
        </div>
    )
}

export default Home;