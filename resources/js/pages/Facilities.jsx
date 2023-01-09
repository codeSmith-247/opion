import React from 'react';
import {NavBar, Header, MobileMenu, SearchBox, LineHeading, LinkHeading, CardGrid, Section1, Section2, Footer} from '../components';

import '../../css/pages/facilities.css';

const Facilities = () => {
  return (
    <div className = 'facilities'>
        <NavBar />
        <MobileMenu />
        <SearchBox />
        <CardGrid />
        <CardGrid />
        <CardGrid />
        <CardGrid />
        <CardGrid />

        <Footer />
    </div>
  )
}

export default Facilities;