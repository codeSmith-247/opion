import React from 'react'

const Button = ({ type, name }) => {
  return (
    <button className = { type }>
        {name?? 'Button'}
    </button>
  )
}

export default Button