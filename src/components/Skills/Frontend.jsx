/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Icons =====================-*/
import { BiCodeCurly as FrontIcon } from 'react-icons/bi'

import {
  RiArrowUpSLine as ArrowUp,
  RiArrowDownSLine as ArrowDown,
} from 'react-icons/ri'

/*-===================== Children ==================-*/
import Skill from './Skill'
import { v4 as uuid } from 'uuid'

const Frontend = ({ handleDropdown, arrow, setWidth }) => {
  const { t } = useTranslation()

  const skills = [
    {
      skillName: 'HTML',
      ability: '85',
    },
    {
      skillName: 'CSS',
      ability: '80',
    },
    {
      skillName: 'Sass',
      ability: '80',
    },
    {
      skillName: 'Styled Components',
      ability: '90',
    },
    {
      skillName: 'Stitches',
      ability: '80',
    },
    {
      skillName: 'React',
      ability: '90',
    },
    {
      skillName: 'Redux',
      ability: '90',
    },
    {
      skillName: 'Context API',
      ability: '70',
    },
  ];

  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <FrontIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">{t('skills.frontEnd')}</h2>
          <a
            href="https://www.credential.net/e4cb5ef0-b33e-4b17-a4eb-48a73aa61205"
            target="_blank"
            className="Link"
          >
            {t('skills.viewCertificate')}
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

export default Frontend
