/*-===================== React =====================-*/
import React from 'react'

/*-===================== Icons =====================-*/
import { BiServer as BackIcon } from 'react-icons/bi'
import { RiArrowUpSLine as ArrowUp } from 'react-icons/ri'
import { RiArrowDownSLine as ArrowDown } from 'react-icons/ri'

const Backend = ({ handleDropdown, arrow }) => {
  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <BackIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">Desenvolvimento Back-End</h2>
          <a href="" target="_blank" className="Link">Ver Certificado</a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown('be')}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="be-list" className="DropdownList Hidden">
        <li className="Skill">
          <div className="Container">
            <span>SQL</span>
            <span>65%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>MongoDB</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Node.js</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Express.js</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Arquitetura ORM/SOLID</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Socket.io</span>
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

export default Backend
