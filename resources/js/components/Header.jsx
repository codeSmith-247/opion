import React from 'react';
import '../../css/components/header.css';
import { Button, SearchBox } from './';

const Header = () => {
  return (
    <header className=" overlay-bg full-vh full-w flex-col-center">
        <div className = 'content'>
            <h1>Find Accomodation That Suits You</h1>
            <p>
                We take away the hassle of man hunting for your perfect place 
                by bringing your perfect place to you, all options at your 
                finger tips.
            </p>

            <Button name="Get Started"/>
        </div>

        <SearchBox />
    </header>
  )
}

export default Header