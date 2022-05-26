import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './Student.module.css'

const Student = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  const [deleteStudent, setDeleteStudent] = useState(false)

  const deleteStudentHandler = () => {
    setDeleteStudent(true)
    return true
  }

  return (
    <>
      {deleteStudent && (
        <ErrorModal
          title='Warning!'
          message='Are you sure?'
          onConfirm={deleteHandler}
        />
      )}
      <li className={classes['list-container']}>
        <Card className={classes.student}>
          <div>{props.studentName}</div>
          <div className={classes['center-align']}>{props.age}</div>
          <div className={classes['center-align']}>
            {props.date.toDateString().split(' ').slice(1).join(' ')}
          </div>
          <div className={classes['center-align']}>{props.score}</div>
          <div className={`${classes['delete-icon']} ${classes['end-align']}`}>
            <FaTrashAlt onClick={deleteStudentHandler} />
          </div>
        </Card>
      </li>
    </>
  )
}

export default Student
