/*-===================== React =====================-*/
import React from 'react'

/*-===================== Children =====================-*/
import {
  Header,
  Home,
  About,
  Skills,
  Services,
  Portfolio,
  ScrollBtn,
  Contact,
  Footer,
} from './components'

const App = () => {
  return (
    <main id="theme-root" className="theme--default">
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollBtn />
    </main>
  )
};

export default App