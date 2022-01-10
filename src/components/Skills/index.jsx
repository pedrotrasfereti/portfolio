/*-===================== React =====================-*/
import React, { useState } from 'react'

/*-===================== Styles =====================-*/
import '../../styles/_skills.scss'

/*-===================== Children =====================-*/
import Frontend from './Frontend'
import Backend from './Backend'
import Designer from './Designer'

const Skills = () => {
  const [arrowFe, setArrowFe] = useState(false)
  const [arrowBe, setArrowBe] = useState(false)
  const [arrowDe, setArrowDe] = useState(false)

  const handleDropdown = (id) => {
    // Variables
    const targets = {
      fe: document.getElementById('fe-list'),
      be: document.getElementById('be-list'),
      de: document.getElementById('de-list'),
    }

    const methods = {
      fe: setArrowFe,
      be: setArrowBe,
      de: setArrowDe,
    }

    const values = {
      fe: arrowFe,
      be: arrowBe,
      de: arrowDe,
    }

    const clicked = targets[id];

    const rest = Object.entries(targets)
      .filter((arr) => arr[1] !== clicked)

    // Show List
    rest.forEach((arr) => arr[1].classList.add('Hidden'))
    clicked.classList.toggle('Hidden')

    // Change Icons
    rest.forEach((arr) => methods[arr[0]](false))
    methods[id](!values[id])
  }

  return (
    <section id="skills" className="Skills">
      <h1 className="Heading">Habilidades</h1>
      <div className="Dropdown--Container">
        <Frontend handleDropdown={handleDropdown} arrow={arrowFe} />
        <Backend handleDropdown={handleDropdown} arrow={arrowBe} />
        <Designer handleDropdown={handleDropdown} arrow={arrowDe} />
      </div>
    </section>
  )
}

export default Skills
