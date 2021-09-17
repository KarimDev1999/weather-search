import { useState, useEffect } from 'react'
import './scss/app.scss'

import axios from 'axios'
import WeatherTop from './components/WeatherTop';
import WeatherMain from './components/WeatherMain';
import WeatherBottom from './components/WeatherBottom';
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"
const API_KEY = "381397280a22a3d847804f46ac23b87e"



const tempUnits = {
  'celcius': 'metric',
  'fahrenheit': 'imperial'
}



function App() {
  const [currentCity, setCurrentCity] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchValue, setSearchValue] = useState('Омск')
  const [inputValue, setInputValue] = useState('')
  const [tempScale, setTempScale] = useState('celcius')
  const [isPopupVisible, setPopupVisible] = useState(false)

  const handleChange = (e) => {
    if (inputValue) {
      setPopupVisible(true)
    }
    setInputValue(e.target.value)
  }
  const handleCityChange = () => {
    setSearchValue(inputValue)
    setIsSearching(false)
  }

  const handlePopupItemClick = (cityName) => {
    setInputValue(cityName)
    setPopupVisible(false)
  }

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}?q=${searchValue}&units=${tempUnits[tempScale]}&lang=ru&appid=${API_KEY}`)
        setCurrentCity({ name: data.city.name, ...data.list[0] })
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchWeather()
  }, [searchValue, tempScale])




  return (
    <div className='App'>
      <div className="container">

        <WeatherTop
          currentCity={currentCity}
          isSearching={isSearching}
          inputValue={inputValue}
          handleChange={handleChange}
          isPopupVisible={isPopupVisible}
          handleCityChange={handleCityChange}
          handlePopupItemClick={handlePopupItemClick}
          setTempScale={setTempScale}
          tempScale={tempScale}
          setIsSearching={setIsSearching}
        />

        <WeatherMain
          currentCity={currentCity}
        />
        < WeatherBottom
          currentCity={currentCity}
        />

      </div >
    </div>
  );
}

export default App;
