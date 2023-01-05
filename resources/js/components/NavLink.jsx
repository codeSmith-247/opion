import React from 'react'
import '../../css/components/navlink.css';

const NavLink = ({name}) => {
  return (
    <div className = 'navlink p-rel max-width'>
      <span>{ name?? 'Nav Link' }</span>
      <span className = 'underline p-abs left-center btm'></span>
    </div>
  )
}

export default NavLink