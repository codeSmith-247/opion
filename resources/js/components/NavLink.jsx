import React from 'react'
import '../../css/components/navlink.css';

const NavLink = ({name}) => {
  return (
    <div class = 'navlink p-rel max-width'>
      <span>{ name?? 'Nav Link' }</span>
      <span class = 'underline p-abs left-center btm'></span>
    </div>
  )
}

export default NavLink