import { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm';
import Countries from './components/Countries';
import LargeCountryCard from './components/LargeCountryCard';
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
    setFilteredCountries(countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()) || country.name.official.toLowerCase().includes(search.toLowerCase())));
  }
  return (
    <div className='app'>
      <SearchForm search={search} handleChange={handleChange}/>
      {filteredCountries.length > 1 ? (
        <Countries countries={filteredCountries} />
      ) : (
        <LargeCountryCard country={filteredCountries[0]} />
      )}
    </div>
  )
}

export default App
