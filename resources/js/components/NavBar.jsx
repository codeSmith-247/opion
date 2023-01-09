import React from 'react';
import { useState, useEffect } from 'react';
import '../../css/components/navbar.css';

import {Logo, NavLink, Button} from './';

const NavBar = () => {

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('active') : setStickyClass('');
    }
  };

  return (
    <div className={`navbar flex-row flex-between p-fix top left full-w ${stickyClass} z-4`}>
        <div className = 'left flex-row'>
            <Logo />
            <div className = 'flex-row desktop'>
              <NavLink name='Home'           location='/'/>
              <NavLink name='Our Facilities' location='/facilities'/>
              <NavLink name='Custom Booking' location='/custom'/>
              <NavLink name='Lease'          location='/lease'/>

            </div>
        </div>
        <div className = 'right flex-row desktop'>
            <NavLink name='Log In' type='inverse' location='/login'/>
            <Button  name='Sign Up' type='active'  location='/signup'/>
        </div> 
        <div className = 'menu-btn flex-center mobile size' onClick = {() => { document.querySelector('.menu-box').classList.add('active') } }>
          <i className = 'bi bi-list'></i>
        </div>
    </div>
  )
}

export default NavBar;