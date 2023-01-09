import React from 'react';
import {Button} from './';
import '../../css/components/iconbutton.css';

const Iconbutton = ({icon, onClick, type}) => {
  return (
    <div className = {`icon-button `} onClick = {onClick}>
        <Button name='' icon={icon} type = {type}/>
    </div>
  )
}

export default Iconbutton;