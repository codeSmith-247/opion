import React from 'react'
import '../../css/components/input.css';

const Input = ({ type, name, placeholder, icon, className, activator}) => {
  
  return (
    <div className={`input p-rel flex-row ${className}`}>
        <input type={type} name={name} placeholder={placeholder} aria-placeholder={placeholder} className=''/>
        <div className = 'icon full-h flex-center size' onClick={() => activator(name)}>
            <i className = {icon}></i>
        </div>
    </div>
  )
}

export default Input