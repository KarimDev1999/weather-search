import React from 'react'



function windDirection(d) {
    let directions = ['северный', 'сев.-восточный', 'восточный', 'юго-восточный', 'южный', 'юго-западный', 'западный', 'сев.-западный'];
    d += 22.5;

    if (d < 0) {
        d = 360 - Math.abs(d) % 360;
    }
    else {
        d = d % 360;
    }

    let w = parseInt(d / 45);
    return `${directions[w]}`;
}


const WeatherBottom = ({ currentCity }) => {
    return (
        <div className='weather-bottom'>

            <div className='weather-bottom__wind'>
                <div className='weather-bottom__wind-title'>Ветер</div>
                <div className='weather-bottom__wind-value'>{currentCity && `${Math.round(currentCity.wind.speed)} м/c, ${windDirection(currentCity.wind.deg)}`}</div>
            </div>

            <div className='weather-bottom__pressure'>
                <div className='weather-bottom__wind-title'>Давление</div>
                <div className='weather-bottom__wind-value'>{currentCity?.main.pressure} мм рт. ст.</div>
            </div>

            <div className='weather-bottom__humidity'>
                <div className='weather-bottom__wind-title'>Влажность</div>
                <div className='weather-bottom__wind-value'>{currentCity?.main.humidity}%</div>
            </div>

            <div className='weather-bottom__rain-probability'>
                <div className='weather-bottom__wind-title'>Вероятность дождя</div>
                <div className='weather-bottom__wind-value'>{currentCity?.pop * 100}%</div>
            </div>
        </div>
    )
}

export default WeatherBottom
