import { useState } from 'react'

import LargeCountryCard from './LargeCountryCard';

const SmallCountryCard = ({ country }) => {
  return (
    <p>{country.name.common}</p>
  )
}
const InteractiveCountryCard = ({ country, isActive }) => {
  const [isShowing, setIsShowing] = useState(false);
  if(isActive) {
    setIsShowing(true);
  }
  const handleClick = () => {
    setIsShowing(!isShowing);
  }
  if (isShowing) {
    return (
      <div className='large-card'>
        <LargeCountryCard country={country} />
        <button onClick={handleClick}>Minimize</button>
      </div>
    )
  } else {
    return (
      <div className='small-card'>
        <SmallCountryCard country={country} />
        <button onClick={handleClick}>Expand</button>
      </div>
    )
  }
}
export default InteractiveCountryCard