import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SocialCard from './test-page/Social-Card';
import SocialCardList from './test-page/Social-Card-List';
import WeatherForecast from './test-page/WeatherForcast';

ReactDOM.render(
  <React.StrictMode>
    <WeatherForecast />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
