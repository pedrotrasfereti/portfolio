/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_contact.scss'

/*-===================== Children =====================-*/
import Form from './Form'

/*-===================== Icons =====================-*/
import {
  FiPhone as Phone,
  FiMail as Email,
  FiMapPin as MapPin,
} from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h1 className="Heading">Contato</h1>
      <div className="Contact--Container">
        <div className="Info--Container">
          <div className="Info">
            <Phone className="Icon" />
            <div className="Container">
              <h2 className="Name">Telefone</h2>
              <span className="Text">+55(19)987050602 </span>
            </div>
          </div>
          <div className="Info">
            <Email className="Icon" />
            <div className="Container">
              <h2 className="Name">E-Mail</h2>
              <span className="Text">pedrotrasfereti@gmail.com</span>
            </div>
          </div>
          <div className="Info">
            <MapPin className="Icon" />
            <div className="Container">
              <h2 className="Name">Local</h2>
              <span className="Text">
                Campinas/SP
              </span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact
