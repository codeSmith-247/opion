import React from 'react';
import '../../css/components/searchbox.css';

import { Input, Button } from './';

const SearchBox = () => {
  return (
    <div className = 'search-box'>
        <div className = 'box max-width'>

            <h3>Search to your specification</h3>

            <div className='inputs flex-row'>
                <Input type='text' name='location' placeholder='Location' icon = 'bi bi-geo-alt-fill' />
                <Input type='text' name='type'     placeholder='Type'     icon = 'bi bi-house-fill' />
                <Input type='text' name='budget'   placeholder='Budget'   icon = 'bi bi-piggy-bank-fill' />
                <Button name='Search Now' />
            </div>

        </div>
    </div>
  )
}

export default SearchBox