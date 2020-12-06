import React from 'react';

const Weather2001 = ({page,setPage}) => {

    const buttonHandler = (a) => {
        setPage("home")
    }

    return (
        <div className="weatherPage">
            <button className="link" onClick={buttonHandler}>Back to Home</button>
            <div className="todaysWeather">
                <h2>Weather on 2001, Oct. 2nd</h2>
                <p>Sort of Cloudy</p>
            </div>
        </div>
    )
}

export default Weather2001;