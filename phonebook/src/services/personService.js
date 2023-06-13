import axios from 'axios';

const BASIC_URL = 'http://localhost:3000/persons';
const getAll = async() => {
  const request = await axios.get(BASIC_URL);
  return request.data;
}

const personServices = { getAll };
export default personServices;