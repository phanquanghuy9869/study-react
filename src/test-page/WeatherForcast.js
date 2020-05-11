import React from 'react';
import './WeatherForcast.css';

const snowIconUrl = 'https://cdn0.iconfinder.com/data/icons/cloudy-2/425/snow-512.png';
const clearIconUrl = 'https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/day-clear-512.png';

const WeatherForecast = (prop) => {
    const data = {
        "dt": 1486112400,
        "temp": {
            "day": 265.69,
            "min": 256.55,
            "max": 266,
            "night": 256.55,
            "eve": 260.09,
            "morn": 266
        },
        "pressure": 1012.2,
        "humidity": 0,
        "weather": [{
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13d"
        }],
        "speed": 7.35,
        "deg": 24,
        "clouds": 45,
        "snow": 0.21
    };

    const getWeatherUrl = (weather) => {
        console.log(weather);
        if (weather == 'Clear') return clearIconUrl;
        if (weather == 'Snow') return snowIconUrl;
    }

    const timeStampToDay = (unix_timestamp) => {
        var date = new Date(unix_timestamp * 1000);
        return date.getUTCDay();
    }

    return (
        <span>
            <ul>
                <li>{timeStampToDay(data.dt)}</li>
                <li><img src={getWeatherUrl(data.weather[0].main)} className='wea-icon'></img></li>
                <li>{data.temp.max} - {data.temp.min}</li>
            </ul>
        </span>
    );
}


export default WeatherForecast;