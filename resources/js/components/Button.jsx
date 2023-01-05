import React from 'react';
import '../../css/components/button.css';


const Button = ({ type, name, icon }) => {
  return (
    <button className = {`flex-row ${type}`}>
        <span>{name?? 'Button'}</span>
        {icon !== '' && 
          <div className = 'icon flex-center'>
            <i className = {icon}></i>
          </div>
        }
    </button>
  )
}

export default Button