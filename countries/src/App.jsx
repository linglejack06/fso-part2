import { useState, useEffect } from 'react'
import Notification from './components/Notification';
import SearchForm from './components/SearchForm';
import Countries from './components/Countries';
import countryService from './services/countryService';

function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    countryService.getCountries()
      .then((data) => setCountries(data));
  }, [])
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries])
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = new RegExp(search, 'i');
    setFilteredCountries(countries.filter((country) => filter.test(country.name.common)));
  }
  return (
    <div className='app'>
      <SearchForm search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Notification message={message} />
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App
