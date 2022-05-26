import React from 'react'
import Card from '../UI/Card'
import classes from './Header.module.css'

const Header = () => {
  return (
    <>
      <li className={classes['list-container']}>
        <Card className={classes.student}>
          <div>Name</div>
          <div className={classes['center-align']}>Age</div>
          <div className={classes['center-align']}>Date</div>
          <div className={classes['center-align']}>Score</div>
          <div className={classes['end-align']}>Delete</div>
        </Card>
      </li>
    </>
  )
}

export default Header
