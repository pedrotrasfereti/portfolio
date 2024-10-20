/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Styles =====================-*/
import '../../styles/_home.scss'

/*-===================== Children =====================-*/
import Socials from '../Socials'

/*-===================== Icons =====================-*/
import { FiArrowDown as ArrowDown } from 'react-icons/fi'
import { BiMouse as Mouse } from 'react-icons/bi'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="Home">
      <div className="Content--Container">
        <Socials />

        <div className="Hero">
          <h2 className="Heading">
            {t('hero.welcome')}
          </h2>

          <p className="Description">
            {t('hero.description')}
          </p>

          <a href="#portfolio" className="Button">
            {t('hero.cta')}
          </a>
        </div>

        <a href="#about" className="Link">
          <Mouse className="Mouse" />
          &nbsp;{t('hero.scrollDown')}&nbsp;
          <ArrowDown className="Arrow" />
        </a>
      </div>

      <div className="Illustration--Container">
        <div className="Illustration" />
      </div>
    </section>
  )
}

export default Home
