import React, {useState} from 'react'
import Course from './components/Course'


const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  //const [course, setCourses] = useState(courses)
  //const [newCourse, setnewCourse] = useState(
   // 'uusi muistiinpano'
  //)

  /*const handleCourseChange = (event) => {
    console.log(event.target.value)
    setnewCourse(event.target.value)
  }*/

  /*const addCourse = (event) => {
    event.preventDefault()
    const courseObject = {
      name: newCourse,
      exercises: Math.random() < 10,
      id: course.length + 1
    }
    setCourses(course.concat(courseObject))
    setnewCourse('')
    console.log("nabi bainedu", event.target)
  }*/

  return (
    <div>
      <h1>
        Opetusohjelma
      </h1>
      <Course course={courses} />
    </div>
  )
}

export default App