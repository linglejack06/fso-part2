import { useState, useEffect } from 'react'
import getWeather from '../services/weatherService';

const LargeCountryCard = ({ country }) => {
  const [weather, setWeather] = useState({})
  useEffect(() => {
    getWeather(country.capital)
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.error(error))
  }, [])
  const displayLanguages = () => {
    const languageArr = [];
    for(const [key, value] of Object.entries(country.languages)) {
      languageArr.push(<li key={key}>{value}</li>)
    }
    return languageArr;
  }
  // prevents rendering component until api response is given
  if(Object.keys(weather).length === 0) return null;
  console.log(weather);
  return (
    <div className='country'>
      <h1>{country.name.official}({country.name.common})</h1>
      <div className='basic-info'>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} Square Kilometers</p>
      </div>
      <div className='languages'>
        <h3>Languages:</h3>
        <ul>
          {displayLanguages()}
        </ul>
      </div>
      <div className='flag-container'>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className='weather'>
        <h3>Weather in {country.capital}</h3>
        <p>Current Temperatue: {weather.current.temp_c}&deg;</p>
        <img className='weather-icon' src={weather.current.condition.icon} alt={weather.current.condition.text} />
        <p>Wind: {weather.current.wind_kph}km/h</p>
      </div>
    </div>
  )
}

export default LargeCountryCard;