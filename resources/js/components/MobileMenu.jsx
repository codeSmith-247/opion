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

            <MenuItem name = "Home"             icon = 'bi bi-house'/>
            <MenuItem name = "Our Facilities"   icon = 'bi bi-building'/>
            <MenuItem name = "Custom Booking"   icon = 'bi bi-box'/>
            <MenuItem name = "Lease"            icon = 'bi bi-door-open'/>
            <MenuItem name = "Log In"           icon = 'bi bi-box-arrow-in-left'/>
            <MenuItem name = "Sign Up"          icon = 'bi bi-person-plus'/>
            <MenuItem name = "Contact Us"       icon = 'bi bi-phone'/>
        </div>
    </div>
  )
}

export default MobileMenu