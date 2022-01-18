/*-===================== React =====================-*/
import React from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_about.scss'

/*-===================== Images =====================-*/
import Selfie from '../../images/Selfie.jpeg';

const About = () => {
  return (
    <section id="about" className="About">
      <img
        src={Selfie}
        alt="Uma selfie"
        className="Image"
      />

      <div className="Content">
        <h1 className="Heading">Sobre mim</h1>
        <p className="Paragraph">
          Minha jornada como programador se iniciou em 2020, quando tive a ideia
          de criar um website pessoal. Durante esse processo,
          me apaixonei pela liberdade dada pela tecnologia para resolver um problema,
          independente do seu tamanho. Desde então, continuei aprendendo mais sobre
          programação, em especial, o desenvolvimento web. Em 2021, ingressei no
          curso profissionalizante da&nbsp;
          <a
            alt="Site oficial da Trybe"
            href="https://www.betrybe.com"
            target="_blank"
            className="Link"
          >
            Trybe
          </a>,
          onde estou atualmente me qualificando para ser um desenvolvedor Full-Stack.
        </p>
      </div>
    </section>
  )
}

export default About
