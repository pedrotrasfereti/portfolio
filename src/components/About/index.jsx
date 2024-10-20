/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Styles =====================-*/
import '../../styles/_about.scss'

/*-===================== Images =====================-*/
import Selfie from '../../images/Selfie.jpeg';

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="About">
      <img
        src={Selfie}
        alt="Selfie"
        className="Image"
      />

      <div className="Content">
        <h1 className="Heading">{t('aboutMe.title')}</h1>
        <p className="Paragraph">
          {t('aboutMe.text').slice(0, t('aboutMe.text').indexOf('Trybe'))}
          <a
            alt="Trybe"
            href="https://www.betrybe.com"
            target="_blank"
            className="Link"
          >
            Trybe
          </a>
          {t('aboutMe.text').slice(t('aboutMe.text').indexOf('Trybe') + 5)}
        </p>
      </div>
    </section>
  )
}

export default About
