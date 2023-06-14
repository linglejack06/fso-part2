const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country, index) => (
        <li key={index}>{country.name.official}</li>
      ))}
    </div>
  )
}
export default Countries