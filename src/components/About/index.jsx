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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Numquam in iure minus labore harum perspiciatis id vel tempore
          fugiat accusamus delectus aliquam voluptate, magni placeat,
          quisquam nobis, qui sequi eum officia necessitatibus.
          Numquam mollitia voluptatem debitis repellendus reprehenderit
          sint consequatur?
        </p>
      </div>
    </section>
  )
}

export default About
