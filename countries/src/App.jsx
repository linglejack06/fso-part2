import { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm';
import Countries from './components/Countries';
import countryService from './services/countryService';

function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    countryService.getCountries()
      .then((data) => setCountries(data));
  }, [])
  const handleChange = (e) => {
    setSearch(e.target.value);
    setFilteredCountries(countries.filter((country) => country.name.common.includes(search) || country.name.official.includes(search)));
  }
  return (
    <div className='app'>
      <SearchForm search={search} handleChange={handleChange}/>
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App
