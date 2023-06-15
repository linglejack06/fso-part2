const SearchForm = ({ search, handleChange }) => {
  return (
    <form className='search-form'>
      <input value={search} onChange={handleChange} />
    </form>
  )
}

export default SearchForm;