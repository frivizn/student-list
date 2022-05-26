import React, { useState } from 'react'
import Card from '../UI/Card'
import StudentFilter from './StudentFilter'
import StudentsList from './StudentsList'
import Header from './Header'
import classes from './Students.module.css'

const Students = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredStudents = props.students.filter((student) => {
    return student.date.getFullYear().toString() === filteredYear
  })

  const onDeleteStudent = (id) => {
    props.onDelete(id)
  }

  return (
    <>
      <Card className={classes.wrapper}>
        <StudentFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <h2>List of Students</h2>
        <Header />
        <StudentsList
          students={filteredStudents}
          onDeleteStudent={onDeleteStudent}
        />
      </Card>
    </>
  )
}

export default Students
