import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api'
const getCountries = async () => {
  const request = await axios.get(`${BASE_URL}/all`);
  return request.data;
}

const countryService = { getCountries }

export default countryService