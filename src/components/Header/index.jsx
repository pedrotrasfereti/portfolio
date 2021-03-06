/*-===================== React =====================-*/
import React, { useState } from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_header.scss'

/*-===================== Children =====================-*/
import Navbar from './Navbar'
import Menu from './Menu'

/*-===================== Icons =====================-*/
import {
  FiMenu as MenuIcon,
  FiX as XIcon,
} from 'react-icons/fi'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <header className="Header">
      <h1 className="Title">Pedro</h1>
      <Navbar />

      <button
        id="menu-btn"
        className="MenuBtn Icon"
        onClick={() => toggleMenu()}
      >
        {
          showMenu ? <XIcon /> : <MenuIcon />
        }
      </button>

      {
        showMenu && <Menu toggleMenu={toggleMenu} />
      }
    </header>
  )
}

export default Header
