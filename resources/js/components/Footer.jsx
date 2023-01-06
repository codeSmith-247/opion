import React from 'react';
import '../../css/components/footer.css';

import {NavLink, Button} from './';

const Footer = () => {
  return (
    <footer className = 'overlay-bg full-vw max-height'>
        <div class = 'left-right flex-row'>
            <div class = 'left flex-col-center'>
                <h2>Where you live affects your daily life and overall well-being</h2>
                <div class = 'flex-row socials'>
                    <div class = 'social-icon mail size round flex-center'>
                        <i class = 'bi bi-envelope-fill'></i>
                    </div>

                    <div class = 'social-icon whatsapp size round flex-center'>
                        <i class = 'bi bi-whatsapp'></i>
                    </div>

                    <div class = 'social-icon facebook size round flex-center'>
                        <i class = 'bi bi-facebook'></i>
                    </div>

                    <div class = 'social-icon instagram size round flex-center'>
                        <i class = 'bi bi-instagram'></i>
                    </div>
                </div>
            </div>
            <div class = 'right'>
                <input type = 'text' name = 'email' placeholder = 'Your email' />
                <textarea name = 'message' placeholder = 'Type your message here...'></textarea>
                <Button name="Send Message" />
            </div>
        </div>

        <div class = 'black-footer'>

            <div class = 'footer-links flex-row flex-end'>
              <NavLink name='Home'           location='/'/>
              <NavLink name='Our Facilities' location='facilities'/>
              <NavLink name='Custom Booking' location='/custom'/>
              <NavLink name='Lease'          location='lease'/>
            </div>

            <div class = 'flex-center copyright'> 
                Copyright ©  2022-2023 O.P.I.O.N All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer