import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import StudentForm from './StudentForm'
import classes from './NewStudent.module.css'

const NewStudent = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveStudentDataHandler = (enteredStudentData) => {
    const studentData = {
      ...enteredStudentData,
      id: Math.random().toString(),
    }
    props.onAddStudent(studentData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <Card className={classes.wrapper}>
      <div className={classes['new-student__actions']}>
        {!isEditing && (
          <Button onClick={startEditingHandler}>Add Student</Button>
        )}
        {isEditing && (
          <StudentForm
            onSaveStudentData={saveStudentDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </Card>
  )
}

export default NewStudent
