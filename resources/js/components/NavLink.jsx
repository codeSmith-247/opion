import React from 'react'
import '../../css/components/navlink.css';
import { Link } from 'react-router-dom';

const NavLink = ({name, location}) => {
  return (
    <Link to={location}>
      <div className = 'navlink p-rel max-width'>
        <span>{ name?? 'Nav Link' }</span>
        <span className = 'underline p-abs left-center btm'></span>
      </div>
    </Link>
  )
}

export default NavLink