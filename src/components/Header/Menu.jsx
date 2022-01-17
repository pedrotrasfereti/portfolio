/*-===================== React =====================-*/
import React from 'react'

/*-===================== Children =====================-*/
import Navbar from './Navbar'

const Menu = ({ toggleMenu }) => {
  return (
    <div className="Menu">
      <Navbar inMenu toggleMenu={toggleMenu} />
    </div>
  )
}

export default Menu
