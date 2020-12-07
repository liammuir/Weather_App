import React from 'react';

const YesterdaysWeather = ({page,setPage}) => {

    const buttonHandler = (a) => {
        setPage("home")
    }

    return (
        <div className="weatherPage">
            <button className="link" onClick={buttonHandler}>Back to Home</button>
            <div className="todaysWeather">
                <h2>Yesterdays's Weather</h2>
                <p>Freezing Cold and most Horrid</p>
            </div>
        </div>
    )
}

export default YesterdaysWeather;