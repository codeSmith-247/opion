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
      <div className = 'search-box'></div>
    </>
  )
}

export default SearchBox;