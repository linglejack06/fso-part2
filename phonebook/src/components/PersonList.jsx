const PersonList = ({ personsToShow }) => (
  <div>
    {personsToShow.map((person) => (
      <p key={person.name}>{person.name} {person.number}</p>
    ))}
  </div>
)

export default PersonList