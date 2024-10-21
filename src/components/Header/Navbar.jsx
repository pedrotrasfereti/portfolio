/*-===================== React =====================-*/
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Icons =====================-*/
import {
  FiMoon as Moon,
  FiSun as Sun,
} from 'react-icons/fi'

import { IoLanguage as Language } from 'react-icons/io5'

const Navbar = ({ inMenu, toggleMenu }) => {
  const { t, i18n } = useTranslation()

  const [theme, setTheme] = useState('light')

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  function toggleDark(themeStr) {
    const root = document.getElementById('theme-root')

    root.classList.toggle('theme--default')
    root.classList.toggle('theme--dark')

    setTheme(themeStr)
  }

  function handleClick({ target }) {
    if (inMenu || target.classList.contains('Button')) {
      toggleMenu()
    } else {
      const links = Array.from(document.getElementsByClassName('Link'))
      links.forEach((link) => link.classList.remove('Selected'))
      target.classList.add('Selected')
    }
  }

  return (
    <nav className="Navbar">
      <a
        href="#about"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        {t('aboutMe.title')}
      </a>

      <a
        href="#skills"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        {t('skills.title')}
      </a>

      <a
        href="#services"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        {t('services.title')}
      </a>

      <a
        href="#portfolio"
        className="Link"
        onClick={(evt) => handleClick(evt)}
      >
        {t('projects.title')}
      </a>

      {
        inMenu || (
          <div class="Container">
            <div className="Dropdown">
              <button className="Icon">
                <Language onClick={() => {}} />
              </button>

              <ul class="DropdownMenu">
                <li onClick={() => changeLanguage('en')}>
                  <span>🇬🇧</span><span>EN</span>
                </li>
                <li onClick={() => changeLanguage('pt')}>
                  <span>🇧🇷</span><span>PT</span>
                </li>
              </ul>
            </div>

            <button className="Icon ThemeBtn">
              {theme === 'light' ? (
                <Moon onClick={() => toggleDark('dark')} />
              ) : (
                <Sun onClick={() => toggleDark('light')} />
              )}
            </button>
          </div>
        )
      }

      <a
        href="#contact"
        className={inMenu ? 'Link' : 'Button'}
        onClick={(evt) => handleClick(evt)}
      >
        {t('contact.title')}
      </a>

      {
        inMenu && (
          <>
            <span className="Divider" />

            <div className="Switch--Container" onClick={toggleLanguage}>
              <span className="Label">Language:</span>
              <span className="Label">{String(i18n.language).toUpperCase()}</span>
            </div>

            <div className="Switch--Container">
              <span className="Label">Dark Mode</span>
              <label className="Switch">
                <input
                  className="Checkbox"
                  type="checkbox"
                  onClick={() => toggleDark('dark')}
                />
                <span className="Slider" />
              </label>
            </div>
          </>
        )
      }
    </nav>
  )
}

export default Navbar
