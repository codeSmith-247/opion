import React from 'react'
import '../../css/components/menuitem.css';

const MenuItem = ({ name, icon }) => {
  return (
    
    <div className = 'menu-item flex-row'>
        <div className = 'item-icon'>
            <i className = {icon}></i>
        </div>
        <div className = 'item-text'>
            <span>{ name }</span>
        </div>
    </div>
  )
}

export default MenuItem