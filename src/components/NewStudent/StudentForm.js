import React, { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'

import classes from './StudentForm.module.css'

const StudentForm = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredScore, setEnteredScore] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [error, setError] = useState()

  const studentNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredAge(event.target.value)
  }

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredDate(event.target.value)
  }

  const scoreChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredScore(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (enteredName.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name.',
      })
      return
    }

    if (+enteredAge.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age.',
      })
      return
    }

    if (enteredDate.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid date.',
      })
      return
    }

    if (+enteredScore.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid score (> 0).',
      })
      return
    }

    const studentData = {
      studentName: enteredName,
      age: enteredAge,
      date: new Date(enteredDate),
      score: +enteredScore,
    }

    props.onSaveStudentData(studentData)
    setEnteredName('')
    setEnteredAge('')
    setEnteredDate('')
    setEnteredScore('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={classes['new-student__controls']}>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              value={enteredName}
              onChange={studentNameChangeHandler}
            />
          </div>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='age'>Age</label>
            <input
              id='age'
              type='number'
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='date'>Date</label>
            <input
              id='date'
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='score'>Score</label>
            <input
              id='score'
              type='number'
              min='0.00'
              step='0.10'
              value={enteredScore}
              onChange={scoreChangeHandler}
            />
          </div>
        </div>
        <div className={classes['new-student__actions']}>
          <Button type='button' onClick={props.onCancel}>
            Cancel
          </Button>
          <Button type='submit'>Add Student</Button>
        </div>
      </form>
    </>
  )
}

export default StudentForm
