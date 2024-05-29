import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox.jsx';

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 25.05,
        humidity: 47,
        weather: 'Haze'
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
          
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
};

export default WeatherApp;
