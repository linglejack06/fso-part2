const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
};
const Part = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  )
}
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
      <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  )
}
const Total = ({ parts }) => {
  return (
    <p>Number of exercises {
      parts.reduce((prev, curr) => prev + curr.exercises, 0)
    }</p>
  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course;