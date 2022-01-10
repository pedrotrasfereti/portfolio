/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_footer.scss'

/*-===================== Icons =====================-*/
import { FiGithub as Github } from 'react-icons/fi'
import { FiLinkedin as LinkedIn } from 'react-icons/fi'
import { FiDribbble as Dribbble } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id="footer" className="Footer">
      <div className="Content--Container">
        <div className="Container">
          <h1 className="Title">Pedro</h1>
          <span className="Subtitle">Desenvolvedor Full-Stack</span>
        </div>

        <div className="Social">
          <a href="https://github.com/pedrotrasfereti" target="_blank">
            <Github className="SocialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/pedro-trasfereti/" target="_blank">
            <LinkedIn className="SocialIcon" />
          </a>
          <a href="https://dribbble.com/Trasfereti" target="_blank">
            <Dribbble className="SocialIcon" />
          </a>
        </div>
      </div>
      <div className="Copyright--Container">
        <span className="Copyright">Pedro Trasfereti 2022 ©</span>
      </div>
    </footer>
  )
}

export default Footer
