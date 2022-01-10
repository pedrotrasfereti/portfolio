/*-===================== React =====================-*/
import React from 'react'

/*-===================== Icons =====================-*/
import { BiCodeCurly as FrontIcon } from 'react-icons/bi'
import { RiArrowUpSLine as ArrowUp } from 'react-icons/ri'
import { RiArrowDownSLine as ArrowDown } from 'react-icons/ri'

const Frontend = ({ handleDropdown, arrow }) => {
  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <FrontIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">Desenvolvimento Front-End</h2>
          <a href="" target="_blank" className="Link">Ver Certificado</a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown('fe')}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="fe-list" className="DropdownList Hidden">
        <li className="Skill">
          <div className="Container">
            <span>HTML</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>CSS</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Sass</span>
            <span>80%</span>
          </div>
          <div className="ProgressBar">
            <div className="Ability" />
          </div>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Styled Components</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>React</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Frontend
