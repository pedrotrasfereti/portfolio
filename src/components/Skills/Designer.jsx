/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Icons =====================-*/
import { BiPen as DesignerIcon } from 'react-icons/bi'

import {
  RiArrowUpSLine as ArrowUp,
  RiArrowDownSLine as ArrowDown,
} from 'react-icons/ri'

/*-===================== Children ==================-*/
import Skill from './Skill'
import { v4 as uuid } from 'uuid'

const Designer = ({ handleDropdown, arrow, setWidth }) => {
  const { t } = useTranslation()

  const skills = [
    {
      skillName: 'UI Design',
      ability: '80',
    },
    {
      skillName: 'Figma',
      ability: '90',
    },
  ];

  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <DesignerIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">UX/UI Design</h2>
          <a
            href=""
            target="_blank"
            className="Link Unavailable"
          >
            {t('skills.viewCertificate')}
          </a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown('de')}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="de-list" className="DropdownList Hidden">
        {
          skills.map(({ skillName, ability }) => (
            <Skill
              key={ uuid() }
              name={ skillName }
              ability={ ability }
              setWidth={ setWidth }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Designer
