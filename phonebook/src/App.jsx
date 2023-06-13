import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import AddForm from './components/AddForm';
import PersonList from './components/PersonList'
import personService from './services/personService'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    personService.getAll()
      .then((data) => setPersons(data));
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
    personService.addPerson({name: newName, number: newNumber})
      .then((data) => {
        setPersons(persons.concat(data))
        setNewName('');
        setNewNumber('');
      })
  }
  const handleDelete = (id) => {
    personService.deletePerson(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <AddForm name={newName} number={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <PersonList personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App
