const LargeCountryCard = ({ country }) => {
  return (
    <div className='country'>
      <p>{country.name.official}</p>
    </div>
  )
}

export default LargeCountryCard;