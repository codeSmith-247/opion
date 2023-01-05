import React from 'react';
import '../../css/components/searchbox.css';

import { Input, Iconbutton, SelectMenu } from './';

const SearchBox = () => {

  let [selectedInput, setSelectedInput] = React.useState('location');

  const getname = (name) => {
    setSelectedInput(name);
  } 

  return (
    <>
      <div className = 'search-box full-w'>
          <div className = 'box full-w'>

              <h3>Search to your specification</h3>

              <div className='inputs flex-row'>
                  <Input type='text' name='location' placeholder='Location' icon = 'bi bi-geo-alt-fill'    className = {selectedInput === 'location' && 'active'} activator={getname}/>
                  <Iconbutton icon='bi bi-filter-right' onClick = {() => { document.querySelector('.select-menu').classList.add('active') } } />
                  <Iconbutton icon='bi bi-search'/>
              </div>

          </div>
      </div>
      <SelectMenu />
    </>
  )
}

export default SearchBox;