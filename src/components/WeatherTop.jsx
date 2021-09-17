import React from 'react'
import { CITIES_DATA } from '../mock'

const WeatherTop = ({
    currentCity,
    isSearching,
    inputValue,
    handleChange,
    isPopupVisible,
    handleCityChange,
    handlePopupItemClick,
    tempScale,
    setTempScale,
    setIsSearching }) => {
    return (
        <div className='weather-top'>
            <div className='weather-top__row'>
                {
                    !isSearching ? <div className='weather-top__city'>
                        <div className='weather-top__city-current'>{currentCity?.name}</div>
                    </div>
                        : <div className='weather-top__searchbar'>
                            <input value={inputValue} onChange={handleChange} type="text" />
                            <button onClick={handleCityChange}>ОК</button>
                            {isPopupVisible && <div className='weather-top__searchbar-popup'>
                                {
                                    CITIES_DATA.filter(c => c.toLowerCase()
                                        .includes(inputValue.toLowerCase()))
                                        .map((city, i) => <div
                                            onClick={() => handlePopupItemClick(city)}
                                            className='weather-top__searchbar-popup-item'
                                            key={i}>
                                            {city}
                                        </div>)}
                            </div>}
                        </div>
                }
                <div className='weather-top__scale'>
                    <span>º</span>
                    <div className='weather-top__scale-toggle'>
                        <button onClick={() => setTempScale('celcius')} className={tempScale === 'celcius' ? `celcius-active` : ''}>C</button>
                        <button onClick={() => setTempScale('fahrenheit')} className={tempScale === 'fahrenheit' ? `fahrenheit-active` : ''}>F</button>
                    </div>
                </div>
            </div>
            {
                !isSearching && <div className='weather-top__city-bottom'>
                    <div onClick={() => setIsSearching(!isSearching)} className='weather-top__city-change'>Сменить город</div>
                    <div className='weather-top__city-location'>Мое местоположение</div>
                </div>
            }
        </div>
    )
}

export default WeatherTop
