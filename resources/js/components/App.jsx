import React from 'react'
import {NavBar, Header, MobileMenu, SearchBox} from './';

import '../../css/components/button.css';

const App = () => {
  return (
    <div>
        <NavBar />
        <MobileMenu />
        <Header />
        <SearchBox />
        <div className = 'full-vh'></div>
    </div>
  )
}

export default App