/*-===================== React =====================-*/
import React from 'react'

/*-===================== Icons =====================-*/
import { BiCodeCurly as FrontIcon } from 'react-icons/bi'
import { RiArrowUpSLine as ArrowUp } from 'react-icons/ri'
import { RiArrowDownSLine as ArrowDown } from 'react-icons/ri'

const Frontend = ({ handleDropdown, arrow, setWidth }) => {
  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <FrontIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">Desenvolvimento Front-End</h2>
          <a
            href="https://www.credential.net/aa8a954f-741b-426b-beb1-98477ad6194b"
            target="_blank"
            className="Link"
          >
            Ver Credencial
          </a>
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
            <span>85%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" style={setWidth(85)} />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>CSS</span>
            <span>65%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" style={setWidth(65)} />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Sass</span>
            <span>70%</span>
          </div>
          <div className="ProgressBar">
            <div className="Ability" style={setWidth(70)} />
          </div>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Styled Components</span>
            <span>90%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" style={setWidth(90)} />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>React.js</span>
            <span>80%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" style={setWidth(80)} />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Redux</span>
            <span>75%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" style={setWidth(75)} />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Context API</span>
            <span>60%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" style={setWidth(60)} />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Frontend
