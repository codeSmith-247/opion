import React from 'react'
import {NavBar, Header, MobileMenu, SearchBox, LineHeading, LinkHeading, CardGrid, Section1, Section2, Footer} from './';

const App = () => {
  return (
    <div>
        <NavBar />
        <MobileMenu />
        <Header />
        <SearchBox />

        <section>
          <LineHeading heading = 'Popular' />
          <LinkHeading heading = 'Popular Facilities' link_text = 'Explore All'/>
          <CardGrid />
        </section>

        <Section1 />
        <Section2 />

        <Footer />
    </div>
  )
}

export default App