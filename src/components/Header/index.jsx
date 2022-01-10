/*-===================== React =====================-*/
import React, { useState } from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_header.scss'

/*-===================== Icons =====================-*/
import { FiMenu as Menu } from 'react-icons/fi'
import { FiMoon as Moon } from 'react-icons/fi'
import { FiSun as Sun } from 'react-icons/fi'

const Header = () => {
  const [theme, setTheme] = useState('light')

  function toggleDark(themeStr) {
    const root = document.getElementById('theme-root')

    root.classList.toggle('theme--default')
    root.classList.toggle('theme--dark')

    setTheme(themeStr)
  }

  function select({ target }) {
    const links = Array.from(document.getElementsByClassName('Link'))
    links.forEach((link) => link.classList.remove('Selected'))
    target.classList.add('Selected')
  }

  return (
    <header className="Header">
      <h1 className="Title">Pedro</h1>
      <nav className="Navbar">
        <a
          href="#about"
          className="Link"
          onClick={(evt) => select(evt)}
        >
          Sobre
        </a>

        <a
          href="#skills"
          className="Link"
          onClick={(evt) => select(evt)}
        >
          Habilidades
        </a>

        <a
          href="#services"
          className="Link"
          onClick={(evt) => select(evt)}
        >
          Serviços
        </a>

        <a
          href="#portfolio"
          className="Link"
          onClick={(evt) => select(evt)}
        >
          Projetos
        </a>

        <button className="Icon ThemeBtn">
          {theme === 'light' ? (
            <Moon onClick={() => toggleDark('dark')} />
          ) : (
            <Sun onClick={() => toggleDark('light')} />
          )}
        </button>

        <a href="#contact" className="Button">Contato</a>
        <span className="Divider" />
      </nav>

      <button id="menu-btn" className="MenuBtn Icon">
        <Menu />
      </button>
    </header>
  )
}

export default Header
