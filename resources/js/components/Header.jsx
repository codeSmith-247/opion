import React from 'react';
import '../../css/components/header.css';
import { Iconbutton, SearchBox } from './';

const Header = () => {

  let num_of_lines = 10;

  let grids = [];

  for(let grid = 0; grid < num_of_lines; grid++) {
      grids.push(<div className = 'grid full-vh' key={grid}></div>);
  }

  return (
    <header className = 'full-vw p-rel overlay-bg z-1'>
        <div className = 'grid-patterns ov-hidden full-hw p-abs top-left z-1' >
            {grids}
        </div>

        <div className = 'header flex-row full-hw p-rel z-2'>
            <div className = 'content'>
                <h1>Find Accomodation that suits you</h1>
                <p>We take away the hassle of man hunting for your perfect place by bringing your perfect place to you, all options at your finger tips.</p>
                <div className = 'search-box max-height p-rel z-2'>
                    <div className = 'box flex-row'>
                        <input type = 'text' placeholder = 'Type your search here...' className = 'full-h' />
                        <Iconbutton icon = 'bi bi-search' type = 'active' />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;