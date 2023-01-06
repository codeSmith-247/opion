import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/components/button.css';


const Button = ({ type, name, icon, location }) => {
  return (
    <button className = {`flex-row flex-center ${type}`}>
        <Link to={location}>
          <span>{name?? 'Button'}</span>
          {icon !== '' && 
            <div className = 'icon flex-center'>
              <i className = {icon}></i>
            </div>
          }
      </Link>
    </button>
  )
}

export default Button