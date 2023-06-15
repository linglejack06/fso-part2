import axios from 'axios';

const KEY = import.meta.env.VITE_API_KEY
const BASIC_URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}`

const getWeather = async (location) => {
  const request = await axios.get(`${BASIC_URL}&q=${location}`)
  return request.data;
}

export default getWeather;