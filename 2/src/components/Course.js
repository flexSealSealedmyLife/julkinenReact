import React from 'react'

const Course = (props) => {
    
    const reducer = (accu, current) => accu + current

    var otsikot = props.course.map(course => <li key ={course.id}><h1>{course.name}</h1>
        {course.parts.map(cours => <ul key={cours.id}>{cours.name} {cours.exercises} </ul>)}
        Yhteensä {course.parts.map(cours => cours.exercises).reduce(reducer)} Tehtävää</li>)

    return (
        <div>            
            {otsikot}
        </div>
    )
} 

export default Course
