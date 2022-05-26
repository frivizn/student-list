import React from 'react'
import Student from './Student'

import classes from './StudentsList.module.css'

const StudentsList = (props) => {
  if (props.students.length === 0) {
    return (
      <h2 className={classes['students-list__fallback']}>Found no students.</h2>
    )
  }

  const onDeleteStudentHandler = (id) => {
    props.onDeleteStudent(id)
  }

  return (
    <ul className={classes['students-list']}>
      {props.students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          studentName={student.studentName}
          age={student.age}
          date={student.date}
          score={student.score}
          onDelete={onDeleteStudentHandler}
        />
      ))}
    </ul>
  )
}

export default StudentsList
