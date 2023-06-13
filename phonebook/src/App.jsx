import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import AddForm from './components/AddForm';
import PersonList from './components/PersonList'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/persons')
      .then((response) => response.json())
      .then((data) => setPersons(data))
  }, [])
  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(persons.some((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return;
    }
    setPersons(persons.concat({name: newName, number: newNumber}));
    setNewName('');
    setNewNumber('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <AddForm name={newName} number={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <PersonList personsToShow={personsToShow} />
    </div>
  )
}

export default App
