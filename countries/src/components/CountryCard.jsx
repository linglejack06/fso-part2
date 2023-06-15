import { useState } from 'react'

const LargeCountryCard = ({ country, handleClick }) => {
  return (
    <div className='country'>
      <p>{country.name.official}</p>
      <button onClick={handleClick}>Minimize</button>
    </div>
  )
}
const SmallCountryCard = ({ country, handleClick }) => {
  return (
    <div className='country small-country'>
      <p>{country.name.common}</p>
      <button onClick={handleClick}>Expand</button>
    </div>
  )
}
const CountryCard = ({ country, isActive }) => {
  const [isShowing, setIsShowing] = useState(false);
  if(isActive) {
    setIsShowing(true);
  }
  const handleClick = () => {
    setIsShowing(!isShowing);
  }
  if (isShowing) {
    return (<LargeCountryCard country={country} handleClick={handleClick}/>)
  } else {
    return (<SmallCountryCard country={country} handleClick={handleClick} />)
  }
}

export default CountryCard;