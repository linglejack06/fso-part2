import axios from 'axios';

const BASIC_URL = 'http://localhost:3000/persons';
const getAll = async() => {
  const request = await axios.get(BASIC_URL);
  return request.data;
}
const addPerson = async (newPerson) => {
  const request = await axios.post(BASIC_URL, newPerson);
  return request.data;
}
const deletePerson = async (id) => {
  const request = await axios.delete(`${BASIC_URL}/${id}`);
  return request.data;
}
const personServices = { getAll, addPerson, deletePerson, };
export default personServices;