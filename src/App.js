import React, { useState } from 'react'
import Card from './components/UI/Card'
import Header from './components/Students/Header'
import NewStudent from './components/NewStudent/NewStudent'
import Students from './components/Students/Students'

import classes from './App.module.css'

const initialList = [
  {
    id: 200141201,
    studentName: 'John Smith',
    age: 21,
    date: new Date(2021, 4, 12),
    score: 35.16,
  },
  {
    id: 200151002,
    studentName: 'Jane Doe',
    age: 19,
    date: new Date(2020, 5, 10),
    score: 355.27,
  },
  {
    id: 200162003,
    studentName: 'Rachel Parker',
    age: 20,
    date: new Date(2019, 6, 20),
    score: 376.89,
  },
  {
    id: 200040204,
    studentName: 'Ray Samson',
    age: 22,
    date: new Date(2021, 4, 2),
    score: 255,
  },
  {
    id: 200171205,
    studentName: 'Jane Doe',
    age: 21,
    date: new Date(2022, 3, 12),
    score: 327,
  },
]

const App = () => {
  const [students, setStudents] = useState(initialList)

  const addStudentHandler = (student) => {
    setStudents((prevStudents) => {
      return [...prevStudents, student]
    })
  }

  const deleteStudentHandler = (id) => {
    setStudents((prevList) => {
      const updatedList = prevList.filter((student) => student.id !== id)
      return updatedList
    })
  }

  let content = ''

  if (students.length === 0) {
    content = (
      <>
        <Card className={classes.wrapper}>
          <h2>List of Students</h2>
          <Header />
          <h3 className={classes['students-list__fallback']}>
            Found no students.Add a student?
          </h3>
        </Card>
      </>
    )
  }

  if (students.length > 0) {
    content = <Students students={students} onDelete={deleteStudentHandler} />
  }

  return (
    <div>
      <NewStudent onAddStudent={addStudentHandler} />
      {content}
    </div>
  )
}

export default App
