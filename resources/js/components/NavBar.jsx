import React from 'react'
import '../../css/components/navbar.css';

import {Logo, NavLink, Button} from './';

const NavBar = () => {
  return (
    <div className='navbar flex-row flex-between p-fix top left full-w'>
        <div className = 'left flex-row'>
            <Logo />
            <NavLink name='Home'/>
            <NavLink name='Our Facilities'/>
            <NavLink name='Custom Booking'/>
            <NavLink name='Lease'/>
        </div>
        <div className = 'right flex-row'>
            <NavLink name='Log In' type='inverse'/>
            <Button name='Sign In' />
        </div>
    </div>
  )
}

export default NavBar;