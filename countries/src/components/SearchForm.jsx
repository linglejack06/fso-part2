const SearchForm = ({ search, handleChange, handleSubmit }) => {
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input value={search} onChange={handleChange} />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm;