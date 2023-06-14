import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/'
const getCountries = async (filter) => {
  const request = await axios.get(`${BASE_URL}/name/${filter}`);
  if(request.data.length > 10) {
    return 'Too many matches, specify a more specific search';
  }
  return request.data;
}

const countryService = { getCountries }

export default countryService