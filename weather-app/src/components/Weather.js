import React from 'react';

const Weather = ({page,setPage}) => {

    const buttonHandler = (a) => {
        setPage("home")
    }

    return (
        <div className="weatherPage">
            <button className="link" onClick={buttonHandler}>Back to Home</button>
            <div className="todaysWeather">
                <h2>Today's Weather</h2>
                <p>Quite Sunny</p>
            </div>
        </div>
    )
}

export default Weather;