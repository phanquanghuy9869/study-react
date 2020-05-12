import React from 'react';
import WeatherForCast from './WeatherForcast';
import axios from 'axios';

const WeatherForcastList = () => {
    const [weatherList, setWeatherList] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
        .then(res => {
            console.log('res ',res.data.list);
            setWeatherList(res.data.list);
        });
    }, []);

    return (
        <div>
            {
                weatherList.map(
                    item => <WeatherForCast data={item}/>
                )
            }
        </div>
    )
}

export default WeatherForcastList;