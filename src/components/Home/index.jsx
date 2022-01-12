/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_home.scss'

/*-===================== Children =====================-*/
import Socials from '../Socials'

/*-===================== Icons =====================-*/
import { FiArrowDown as ArrowDown } from 'react-icons/fi'
import { BiMouse as Mouse } from 'react-icons/bi'

const Home = () => {
  return (
    <section id="home" className="Home">
      <div className="Content--Container">
        <Socials />

        <div className="Hero">
          <h2 className="Heading">
            Olá, meu nome é Pedro.
          </h2>

          <p className="Description">
            Sou um estudante de programação me capacitando
            para ser um desenvolvedor Full-Stack!
          </p>

          <a href="#portfolio" className="Button">
            Ver portifólio
          </a>
        </div>

        <a href="#about" className="Link">
          <Mouse className="Mouse" />
          &nbsp;Role para baixo&nbsp;
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
