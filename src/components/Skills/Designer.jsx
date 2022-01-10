/*-===================== React =====================-*/
import React from 'react'

/*-===================== Icons =====================-*/
import { BiPen as DesignerIcon } from 'react-icons/bi'
import { RiArrowUpSLine as ArrowUp } from 'react-icons/ri'
import { RiArrowDownSLine as ArrowDown } from 'react-icons/ri'

const Designer = ({ handleDropdown, arrow }) => {
  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <DesignerIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">UI Design</h2>
          <a href="" target="_blank" className="Link">Ver Certificado</a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown('de')}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="de-list" className="DropdownList Hidden">
        <li className="Skill">
          <div className="Container">
            <span>UI Design para Iniciantes</span>
            <span>65%</span>
          </div>
          <span className="ProgressBar">
            <div className="Ability" />
          </span>
        </li>
        <li className="Skill">
          <div className="Container">
            <span>Figma</span>
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

export default Designer
