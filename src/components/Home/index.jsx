/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_home.scss'

/*-===================== Icons =====================-*/
import { FiGithub as Github } from 'react-icons/fi'
import { FiLinkedin as LinkedIn } from 'react-icons/fi'
import { FiDribbble as Dribbble } from 'react-icons/fi'
import { FiArrowDown as ArrowDown } from 'react-icons/fi'
import { BiMouse as Mouse } from 'react-icons/bi'

const Home = () => {
  return (
    <section id="home" className="Home">
      <div className="Content--Container">
        <div className="Social">
          <a href="https://github.com/pedrotrasfereti" target="_blank">
            <Github className="Icon" />
          </a>
          <a href="https://www.linkedin.com/in/pedro-trasfereti/" target="_blank">
            <LinkedIn className="Icon" />
          </a>
          <a href="https://dribbble.com/Trasfereti" target="_blank">
            <Dribbble className="Icon" />
          </a>
        </div>

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
