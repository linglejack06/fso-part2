import Notification from './Notification';

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.length < 10 ? 
        countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        )) : (
          <Notification message='Too many countries' />
        )}
    </div>
  )
}
export default Countries