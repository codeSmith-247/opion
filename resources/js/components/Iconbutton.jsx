import React from 'react';
import {Button} from './';
import '../../css/components/iconbutton.css';

const Iconbutton = ({icon, onClick}) => {
  return (
    <div className = 'icon-button' onClick = {onClick}>
        <Button name='' icon={icon} />
    </div>
  )
}

export default Iconbutton;