/*-===================== React =====================-*/
import React from 'react'

/*-===================== Icons =====================-*/
import { FiGithub as Github } from 'react-icons/fi'
import { FiLinkedin as LinkedIn } from 'react-icons/fi'
import { FiDribbble as Dribbble } from 'react-icons/fi'

const Socials = () => {
  return (
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
  )
}

export default Socials
