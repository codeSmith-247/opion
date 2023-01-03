import React from 'react';
import '../../css/components/searchbox.css';

import { Input, Button } from './';

const SearchBox = () => {

  let [selectedInput, setSelectedInput] = React.useState('location');

  const getname = (name) => {
    setSelectedInput(name);
  } 

  return (
    <div className = 'search-box max-width'>
        <div className = 'box'>

            <h3>Search to your specification</h3>

            <div className='inputs flex-row'>
                <Input type='text' name='location' placeholder='Location' icon = 'bi bi-geo-alt-fill'    className = {selectedInput === 'location' && 'active'} activator={getname}/>
                <Input type='text' name='type'     placeholder='Type'     icon = 'bi bi-house-fill'      className = {selectedInput === 'type'     && 'active'} activator={getname}/>
                <Input type='text' name='budget'   placeholder='Budget'   icon = 'bi bi-piggy-bank-fill' className = {selectedInput === 'budget'   && 'active'} activator={getname}/>
                <Button name='Search' icon='bi bi-search'/>
            </div>

        </div>
    </div>
  )
}

export default SearchBox;