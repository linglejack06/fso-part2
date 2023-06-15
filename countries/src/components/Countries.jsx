import Notification from './Notification';
import InteractiveCountryCard from './InteractiveCountryCard';

const Countries = ({ countries }) => { 
  return (
    <div>
      {countries.length < 10 ? 
        countries.map((country, index) => (
          <InteractiveCountryCard key={index} country={country} />
        )) : (
          <Notification message='Too many countries' />
        )}
    </div>
  )
}
export default Countries