import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import countryService from './services/countryService';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    countryService.getCountries(search)
      .then((data) => {
        if(data === 'Too many matches, specify a more specific search') {
          setMessage(data);
        } else {
          setCountries(data);
          setSearch('');
        }
      })
  }
  return (
    <div className='app'>
      <SearchForm search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
