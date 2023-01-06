import React from 'react';
import '../../css/components/error.css';
import {Button } from './';

const Error = () => {
  return (
    <div className='errorpage flex-center flex-col full-vhw'>
        <div className = 'image'>
            <img src = '/images/error.jpg' className = 'obj-fit' />
        </div>

        <div class = 'text-center flex-col flex-center'>
          <p>We're sorry, but something went wrong on our end. Please try again later, or contact us if the problem persists.</p>
          <Button name='Go Back Home' location='/'/>
        </div>
    </div>
  )
}

export default Error