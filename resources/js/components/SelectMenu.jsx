import React from 'react';
import '../../css/components/selectmenu.css';
import {SelectBox, InputBox } from './';

const SelectMenu = () => {
    let filters = {
        'Facility Name': '',
        'Facility Type': '',
        'Budget':        '',
        'Room Type':     '',
        'Stay Duration':  '',
    }

  return (
    <div className="select-menu p-fix top left full-vhw z-5 ">
        <div className = 'overlay p-abs top left full-hw' onClick = {() => { document.querySelector('.select-menu').classList.remove('active') } }></div>
        <SelectBox options={filters} placeholder='Type your filter here...'   active={true}/>
        <SelectBox options={filters} placeholder='Search for a value here...' active={false} icon = 'bi bi-square-fill' top='Facility Name'/>
        <InputBox top={''} />
    </div>
  );
}

export default SelectMenu