import React from 'react'
// import './Card.css'
import classes from './Card.module.css'

const Card = (props) => {
  // const classes = 'card ' + props.className
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card
