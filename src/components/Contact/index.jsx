/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <section id="contact" className="Contact">
      <h1 className="Heading">{t('contact.title')}</h1>
      <div className="Contact--Container">
        <div className="Info--Container">
          <div className="Info">
            <Phone className="Icon" />
            <div className="Container">
              <h2 className="Name">{t('contact.phone')}</h2>
              <span className="Text">+55(19)987050602 </span>
            </div>
          </div>
          <div className="Info">
            <Email className="Icon" />
            <div className="Container">
              <h2 className="Name">{t('contact.email')}</h2>
              <span className="Text">pedrotrasfereti@gmail.com</span>
            </div>
          </div>
          <div className="Info">
            <MapPin className="Icon" />
            <div className="Container">
              <h2 className="Name">{t('contact.location')}</h2>
              <span className="Text">
                Campinas, SP, {t('contact.country')}
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
