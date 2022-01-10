/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_services.scss'

/*-===================== Icons =====================-*/
import { BiCodeCurly as FrontIcon } from 'react-icons/bi'
import { BiServer as BackIcon } from 'react-icons/bi'
import { BiCodeAlt as FullIcon } from 'react-icons/bi'
import { FiArrowDown as ArrowDown } from 'react-icons/fi'

const Services = () => {
  return (
    <section id="services" className="Services">
      <h1 className="Heading">Serviços</h1>
      <div className="Services--Container">
        <div id="service-fe" className="Service">
          <span className="Decoration" />
          <div className="Content">
            <FrontIcon className="Icon" />
            <h2 className="Title">Desenvolvedor Front-End</h2>
            <a href="#contact" className="Link">
              Entre em contato <ArrowDown className="Arrow" />
            </a>
          </div>
        </div>
        <div id="service-be" className="Service">
          <span className="Decoration" />
          <div className="Content">
            <BackIcon className="Icon" />
            <h2 className="Title">Desenvolvedor Back-End</h2>
            <a href="#contact" className="Link">
              Entre em contato <ArrowDown className="Arrow" />
            </a>
          </div>
        </div>
        <div id="service-fs" className="Service">
          <span className="Decoration" />
          <div className="Content">
            <FullIcon className="Icon" />
            <h2 className="Title">Desenvolvedor Full-Stack</h2>
            <a href="#contact" className="Link">
              Entre em contato <ArrowDown className="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
