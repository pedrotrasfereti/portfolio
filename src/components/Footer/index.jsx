/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Styles =====================-*/
import '../../styles/_footer.scss'

/*-===================== Icons =====================-*/
import {
  FiGithub as Github,
  FiLinkedin as LinkedIn,
  FiDribbble as Dribbble,
} from 'react-icons/fi'

const Footer = () => {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="Footer">
      <div className="Content--Container">
        <div className="Container">
          <h1 className="Title">Pedro</h1>
          <span className="Subtitle">{t('footer.title')}</span>
        </div>

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
      </div>
      <div className="Copyright--Container">
        <span className="Copyright">Pedro Trasfereti {currentYear} ©</span>
      </div>
    </footer>
  )
}

export default Footer
