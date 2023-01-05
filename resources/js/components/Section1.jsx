import React from 'react';
import '../../css/components/section1.css';
import {LineHeading, Button} from '.';


const Section1 = () => {
  return (
    
    <section className =  'section1 flex-row flex-between p-rel'>

        <div className =  'left full-h z-1'>
            <div className = 'image-box'>
                <img src = '/images/relaxed.webp' className = 'obj-fit'/>
            </div>
        </div>

        <div className =  'right full-h p-rel z-2'>
            <LineHeading heading = 'Our Services' />
            <h4>your comfort is our top priority</h4>

            <p>
              Experience comfort like never before when you book your stay with us! Our hostels, homestays, 
              and hotels offer a variety of amenities to ensure that you have a comfortable and enjoyable 
              stay. From plush beds to cozy common areas, we have everything you need to relax and unwind.
              Don't settle for less book your comfortable getaway with us today! 
            </p>

            <ul>
              <li>Comfort for any budget</li>
              <li>Quality amenities included</li>
              <li>Easy booking process</li>
              <li>Flexible location and stay options</li>
            </ul>

            <Button name = 'Explore'/>
        </div>

    </section>
  )
}

export default Section1