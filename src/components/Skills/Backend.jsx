/*-===================== React =====================-*/
import React from 'react'
import { useTranslation } from 'react-i18next'

/*-===================== Icons =====================-*/
import { BiServer as BackIcon } from 'react-icons/bi'

import {
  RiArrowUpSLine as ArrowUp,
  RiArrowDownSLine as ArrowDown,
} from 'react-icons/ri'

/*-===================== Children ==================-*/
import Skill from './Skill'
import { v4 as uuid } from 'uuid'

const Backend = ({ handleDropdown, arrow, setWidth }) => {
  const { t } = useTranslation()
  
  const skills = [
    {
      skillName: 'Node.js',
      ability: '90',
    },
    {
      skillName: 'Express',
      ability: '100',
    },
    {
      skillName: 'MySQL',
      ability: '85',
    },
    {
      skillName: 'MongoDB',
      ability: '50',
    },
    {
      skillName: 'Prisma',
      ability: '60',
    },
    {
      skillName: 'Sequelize',
      ability: '75',
    },
    {
      skillName: 'TypeScript',
      ability: '80',
    },
    {
      skillName: 'Object-Oriented Programming',
      ability: '60',
    },
    {
      skillName: 'Socket.io',
      ability: '40',
    },
    {
      skillName: 'Docker',
      ability: '70',
    },
    {
      skillName: 'Heroku',
      ability: '100',
    },
  ];

  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <BackIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">{t('skills.backEnd')}</h2>
          <a
            href="https://www.credential.net/efef4cdd-4308-453f-8a42-91eb2664093a"
            target="_blank"
            className="Link"
          >
            {t('skills.viewCertificate')}
          </a>
        </div>
        <button
          className="Button"
          onClick={() => handleDropdown('be')}
        >
          {arrow ? <ArrowUp /> : <ArrowDown />}
        </button>
      </div>

      <ul id="be-list" className="DropdownList Hidden">
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

export default Backend
