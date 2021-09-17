import React from 'react'
//images
import sunIcon from '../assets/sun.svg';
import cloudIcon from '../assets/cloud.svg';
import rainIcon from '../assets/rain.svg';
import stormIcon from '../assets/strom.svg';
import partlyCloudy from '../assets/partly cloudy.svg'
//images
const tempIcons = {
    'Rain': {
        img: rainIcon
    },
    'Clouds': {
        img: cloudIcon
    },
    'Clear': {
        img: sunIcon
    },
    'Extreme': {
        img: stormIcon
    }
}

const WeatherMain = ({ currentCity }) => {
    return (
        <div className='weather-main'>
            <div className='weather-main__temperature'>
                <div className='weather-main__temperature-top'>
                    <div className='weather-main__temperature-image'>
                        <img src={currentCity?.weather[0].description === 'облачно с прояснениями' ? partlyCloudy : tempIcons[currentCity?.weather[0].main]?.img} alt="sun icon" />
                    </div>
                    <div className='weather-main__temperature-number'>
                        {currentCity && Math.round(currentCity.main.temp)}º
                    </div>
                </div>
                <div className='weather-main__temperature-description'>
                    {currentCity?.weather[0].description}
                </div>
            </div>
        </div>
    )
}

export default WeatherMain
