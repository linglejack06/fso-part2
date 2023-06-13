import { useState, useEffect } from 'react';
import Note from './components/Note';

const App = () => {
  const promise = fetch('http://localhost:3000/notes');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []) //empty array causes this effect to only be ran along with first render
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  }
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note {...note} key={note.id} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App;
