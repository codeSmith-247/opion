import React from 'react';
import '../../css/pages/booking.css';
import {NavBar, MobileMenu, Button, Iconbutton} from '../components/';

const Booking = () => {
        


    return (
        <div className = 'booking'>

            <NavBar />
            <MobileMenu />

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

                    {/* <div className = 'header-image'>
                        <div className = 'image'>
                            <img src = '/images/header.jpg' className = 'obj-fit' />
                        </div>
                    </div> */}
                </div>

            </header>



        </div>
    )
}

export default Booking;