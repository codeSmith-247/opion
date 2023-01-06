import React from 'react';
import '../../css/components/section1.css';
import {LineHeading, Button} from '.';

const Section2 = () => {
  return (
    <section className =  'section1 section2 flex-row flex-between p-rel'>



        <div className =  'right full-h p-rel z-2'>
            <LineHeading heading = 'Lease' />
            <h4>maximize your bookings</h4>

            <p>
                As a facility owner, you want to make the most of your space and maximize your bookings.
                By registering on our booking platform, you can easily connect with a large audience of 
                potential customers and manage your bookings efficiently. Our platform is user-friendly
                and offers a range of features to help you streamline your booking process. Plus, with 
                our secure payment system, you can have peace of mind knowing that your transactions are 
                safe. Don't miss out on the opportunity to grow your business. Sign up for our booking 
                platform today!
             </p>

            <Button name = 'Join Us'/>
        </div>

        <div className =  'left full-h z-1'>
            <div className = 'image-box'>
                <img src = '/images/facility.jpg' className = 'obj-fit'/>
            </div>
        </div>

    </section>
  )
}

export default Section2