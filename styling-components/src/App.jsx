import profileImage from './assets/profile.jpg'
import Student from './Student'
import './App.css'

function App() {
  // Array of student data
  const students = [
    { name: "John Doe", age: 20, image: profileImage },
    { name: "Jane Doe", age: 22, image: profileImage },
    { name: "James Doe", age: 25, image: profileImage },
    { name: "Cate Doe", age: 22, image: profileImage },
    { name: "Pete Doe", age: 25, image: profileImage },
    {name: "Mary Doe", age: 22, image: profileImage},
  ];

  return (
    <>
      {/* Dynamically render Student components using map */}
      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          age={student.age}
          image={student.image}
        />
      ))}
    </>
  );
}

export default App;