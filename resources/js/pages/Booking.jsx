import React from 'react';
import '../../css/pages/booking.css';
import {NavBar, MobileMenu, Button, Iconbutton} from '../components/';

const Booking = () => {

    let room_list = [
        'One in a room',
        'Two in a room',
        'Three in a room',
        'Four in a room',
    ];
        


    return (
        <div className = 'booking'>

            <NavBar />
            <MobileMenu />

            <header className = 'full-vw p-rel overlay-bg z-1'>

                <div className = 'grid-patterns ov-hidden full-hw p-abs top-left z-1' >
                    {/* {grids} */}
                </div>

                <div className = 'header flex-center full-hw p-rel z-2'>
                    <div className = 'content text-center'>
                        <h1>Jakaranta Hotels</h1>
                        <p>We tase at nobis soluta et nemo quo sit, laudantium nostrum. Magni! bringing your perfect place to you, all options at your finger tips.</p>
                    </div>
                </div>

            </header>

            <section className = 'plans'>
                <h3 className = 'text-center'>Choose a plan</h3>

                <div class = 'plan-box'>
                    {
                        room_list.map( (room, index) => {
                            return (
                                <div class = 'plan  flex-between'>
                                    <div class = 'left'>
                                        <h4>{room}</h4>
                                        <span class = 'price'>Ghc{1500 * index}</span>
                                    </div>
            
                                    <div class = 'right flex-row'>
                                        <Button name = 'View Images'/>
                                        <Button name = 'Book Now'/>
                                    </div>
                                </div>
                            );
                        })
                    }


                    
                </div>
            </section>



        </div>
    )
}

export default Booking;