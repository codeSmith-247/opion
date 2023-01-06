import React from 'react';
import '../../css/components/mobilemenu.css';

import { MenuItem } from './';


const MobileMenu = () => {
  return (
    <div className = 'menu-box p-fix top right full-vhw z-5'>
        <div className = 'overlay full-hw p-abs z-1' onClick = {() => { document.querySelector('.menu-box').classList.remove('active') }}></div>
        <div className = 'menu full-h p-abs z-2 top right'>
            <div className = 'top flex-row flex-end'>
                <i className = 'bi bi-x-lg' onClick = {() => { document.querySelector('.menu-box').classList.remove('active') }}></i>
            </div>

            <MenuItem name = "Home"             icon = 'bi bi-house'                  location='/'/>
            <MenuItem name = "Our Facilities"   icon = 'bi bi-building'               location='/facilities'/>
            <MenuItem name = "Custom Booking"   icon = 'bi bi-box'                    location='/custom'/>
            <MenuItem name = "Lease"            icon = 'bi bi-door-open'              location='/lease'/>
            <MenuItem name = "Log In"           icon = 'bi bi-box-arrow-in-left'      location='/login'/>
            <MenuItem name = "Sign Up"          icon = 'bi bi-person-plus'            location='/signup'/>
            <MenuItem name = "Contact Us"       icon = 'bi bi-phone'                  location='/contact'/>
        </div>
    </div>
  )
}

export default MobileMenu