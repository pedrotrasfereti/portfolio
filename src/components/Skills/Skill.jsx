/*-===================== React =====================-*/
import React from 'react'

const Skill = ({ key, name, ability, setWidth }) => {
  return (
    <li key={ key } className="Skill">
      <div className="Container">
        <span>{ name }</span>
        <span>{ ability }%</span>
      </div>
      <span className="ProgressBar">
        <div
          className="Ability"
          style={ setWidth(Number(ability)) }
        />
      </span>
    </li>
  )
}

export default Skill
