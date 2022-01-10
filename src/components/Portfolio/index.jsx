/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_portfolio.scss'

/*-===================== Children =====================-*/
import Slide from './Slide'

const Portfolio = () => {
  return (
    <section id="portfolio" className="Portfolio">
      <h1 className="Heading">Projetos</h1>
      <Slide />
    </section>
  )
}

export default Portfolio
