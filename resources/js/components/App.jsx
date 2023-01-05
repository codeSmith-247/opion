import React from 'react'
import {NavBar, Header, MobileMenu, SearchBox, LineHeading, LinkHeading, CardGrid, DarkSection} from './';

const App = () => {
  return (
    <div>
        <NavBar />
        <MobileMenu />
        <Header />
        <SearchBox />

        <section>
          <LineHeading heading = 'Popular' />
          <LinkHeading heading = 'Popular' link_text = 'Explore All'/>
          <CardGrid />
        </section>

        <DarkSection />

        <div className = 'full-vh'></div>
    </div>
  )
}

export default App