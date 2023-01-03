import React from 'react'

const Button = ({ type, name, icon }) => {
  return (
    <button className = {`flex-row ${type}`}>
        <span>{name?? 'Button'}</span>
        {icon !== '' && 
          <div className = 'icon'>
            <i className = {icon}></i>
          </div>
        }
    </button>
  )
}

export default Button