import React from 'react'
import '../../css/components/input.css';

const Input = ({ type, name, placeholder, icon}) => {
  return (
    <div className='input p-rel'>
        <input type={type} name={name} placeholder={placeholder} aria-placeholder={placeholder} className='full-w' />
        <div class = 'icon p-abs right top-center'>
            <i class = {icon}></i>
        </div>
    </div>
  )
}

export default Input