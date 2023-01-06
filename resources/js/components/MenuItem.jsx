import React from 'react'
import '../../css/components/menuitem.css';
import {Link} from 'react-router-dom';

const MenuItem = ({ name, icon, location}) => {
  return (
    <div className = 'menu-item flex-row'>
        <Link to={location} className = 'flex-row'>
          <div className = 'item-icon'>
              <i className = {icon}></i>
          </div>
          <div className = 'item-text'>
              <span>{ name }</span>
          </div>
        </Link>
      </div>
  )
}

export default MenuItem;