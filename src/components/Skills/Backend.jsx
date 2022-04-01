/*-===================== React =====================-*/
import React from 'react'

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
  const skills = [
    {
      skillName: 'Node.js',
      ability: '75',
    },
    {
      skillName: 'Express',
      ability: '85',
    },
    {
      skillName: 'MySQL',
      ability: '70',
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
      ability: '70',
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
      ability: '70',
    },
  ];

  return (
    <div className="Dropdown">
      <div className="DdHeader">
        <BackIcon className="Icon" />
        <div className="Container">
          <h2 className="Title">Desenvolvimento Back-End</h2>
          <a
            href=""
            target="_blank"
            className="Link Unavailable"
          >
            Ver Credencial
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
