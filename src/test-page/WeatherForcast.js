import React from 'react';
import './WeatherForcast.css';

const snowIconUrl = 'https://cdn0.iconfinder.com/data/icons/cloudy-2/425/snow-512.png';
const clearIconUrl = 'https://cdn2.iconfinder.com/data/icons/weather-icons-8/512/day-clear-512.png';

const WeatherForecast = (prop) => {
    const data = prop.data;

    const getWeatherUrl = (weather) => {
        console.log(weather);
        if (weather == 'Clear') return clearIconUrl;
        if (weather == 'Snow') return snowIconUrl;
    }

    const timeStampToDay = (unix_timestamp) => {
        var date = new Date(unix_timestamp * 1000);
        return date.toUTCString();
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