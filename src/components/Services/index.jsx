/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Styles =====================-*/
import '../../styles/_services.scss'

/*-===================== Icons =====================-*/
import { FiArrowDown as ArrowDown } from 'react-icons/fi'

import {
  BiCodeCurly as FrontIcon,
  BiServer as BackIcon,
  BiCodeAlt as FullIcon,
} from 'react-icons/bi'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section id="services" className="Services">
      <h1 className="Heading">{t('services.title')}</h1>
      <div className="Services--Container">
        <div id="service-fe" className="Service">
          <span className="Decoration" />
          <div className="Content">
            <FrontIcon className="Icon" />
            <h2 className="Title">{t('services.frontEnd')}</h2>
            <a href="#contact" className="Link">
              {t('services.getInTouch')} <ArrowDown className="Arrow" />
            </a>
          </div>
        </div>
        <div id="service-be" className="Service">
          <span className="Decoration" />
          <div className="Content">
            <BackIcon className="Icon" />
            <h2 className="Title">{t('services.backEnd')}</h2>
            <a href="#contact" className="Link">
              {t('services.getInTouch')} <ArrowDown className="Arrow" />
            </a>
          </div>
        </div>
        <div id="service-fs" className="Service">
          <span className="Decoration" />
          <div className="Content">
            <FullIcon className="Icon" />
            <h2 className="Title">{t('services.fullStack')}</h2>
            <a href="#contact" className="Link">
              {t('services.getInTouch')} <ArrowDown className="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
