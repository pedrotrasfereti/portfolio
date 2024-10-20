/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Styles =====================-*/
import '../../styles/_portfolio.scss'

/*-===================== Children =====================-*/
import Slide from './Slide'

const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className="Portfolio">
      <h1 className="Heading">{t('projects.title')}</h1>
      <Slide />
    </section>
  )
}

export default Portfolio
